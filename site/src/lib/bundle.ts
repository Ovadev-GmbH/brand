// Tiny, dependency-free ZIP (stored) + ICO writers for the favicon bundle.

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = (CRC_TABLE[(c ^ (bytes[i] ?? 0)) & 0xff] ?? 0) ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

export type ZipFile = { name: string; data: Uint8Array };

/** Build a ZIP archive using the "stored" (no compression) method. */
export function zipStore(files: ZipFile[]): Blob {
  const enc = new TextEncoder();
  const parts: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  for (const f of files) {
    const nameBytes = enc.encode(f.name);
    const crc = crc32(f.data);
    const size = f.data.length;

    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true);
    lh.setUint16(4, 20, true);
    lh.setUint16(8, 0, true); // store
    lh.setUint32(14, crc, true);
    lh.setUint32(18, size, true);
    lh.setUint32(22, size, true);
    lh.setUint16(26, nameBytes.length, true);
    const lhBytes = new Uint8Array(lh.buffer);
    parts.push(lhBytes, nameBytes, f.data);

    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true);
    ch.setUint16(4, 20, true);
    ch.setUint16(6, 20, true);
    ch.setUint32(16, crc, true);
    ch.setUint32(20, size, true);
    ch.setUint32(24, size, true);
    ch.setUint16(28, nameBytes.length, true);
    ch.setUint32(42, offset, true);
    central.push(new Uint8Array(ch.buffer), nameBytes);

    offset += lhBytes.length + nameBytes.length + size;
  }

  const centralStart = offset;
  const centralSize = central.reduce((s, c) => s + c.length, 0);

  const eocd = new DataView(new ArrayBuffer(22));
  eocd.setUint32(0, 0x06054b50, true);
  eocd.setUint16(8, files.length, true);
  eocd.setUint16(10, files.length, true);
  eocd.setUint32(12, centralSize, true);
  eocd.setUint32(16, centralStart, true);

  const blobParts: BlobPart[] = [...parts, ...central, new Uint8Array(eocd.buffer)] as BlobPart[];
  return new Blob(blobParts, { type: "application/zip" });
}

/** Build a multi-resolution .ico that embeds PNG images (modern format). */
export function buildIco(entries: { size: number; png: Uint8Array }[]): Uint8Array {
  const count = entries.length;
  const dir = new DataView(new ArrayBuffer(6 + 16 * count));
  dir.setUint16(0, 0, true);
  dir.setUint16(2, 1, true); // type: icon
  dir.setUint16(4, count, true);

  let dataOffset = 6 + 16 * count;
  entries.forEach((e, i) => {
    const o = 6 + i * 16;
    dir.setUint8(o, e.size >= 256 ? 0 : e.size);
    dir.setUint8(o + 1, e.size >= 256 ? 0 : e.size);
    dir.setUint8(o + 2, 0);
    dir.setUint8(o + 3, 0);
    dir.setUint16(o + 4, 1, true);
    dir.setUint16(o + 6, 32, true);
    dir.setUint32(o + 8, e.png.length, true);
    dir.setUint32(o + 12, dataOffset, true);
    dataOffset += e.png.length;
  });

  const out = new Uint8Array(dataOffset);
  out.set(new Uint8Array(dir.buffer), 0);
  let p = 6 + 16 * count;
  for (const e of entries) {
    out.set(e.png, p);
    p += e.png.length;
  }
  return out;
}
