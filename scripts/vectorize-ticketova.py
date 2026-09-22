#!/usr/bin/env python3
"""Rebuild black-only SVGs from landing-page sources. Requires magick and potrace."""
import html
import json
import sys
from pathlib import Path
import subprocess
import tempfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'site/public/ticketova/illustrations'
CATALOG = ROOT / 'site/src/lib/illustrations.ts'
SOURCES = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT.parent / 'Landing/apps/ticketova/public/illustrations'


def run(*args):
    return subprocess.run([str(a) for a in args], check=True, capture_output=True, text=True).stdout


text = CATALOG.read_text()
entries = json.loads(text[text.index('['):text.index('] as const') + 1])
originals = entries
result = []
with tempfile.TemporaryDirectory(prefix='ticketova-vector-') as temp:
    temp = Path(temp)
    for asset in originals:
        result.append(asset)
        if not asset['file'].endswith('-vector.svg'):
            continue
        source = SOURCES / Path(asset['source']).name
        width, height = map(int, run('magick', 'identify', '-format', '%w %h', source).split())
        stem = source.stem + '-vector'
        svg = ASSETS / (stem + '.svg')
        run('magick', source, '-background', 'white', '-alpha', 'remove', '-colorspace', 'Gray',
            '-filter', 'Catrom', '-resize', '400%', '-threshold', '50%', temp / 'trace.pbm')
        run('potrace', temp / 'trace.pbm', '--svg', '--opttolerance', '0.15', '--turdsize', '8',
            '--unit', '10', '--output', temp / 'trace.svg')
        traced = ET.parse(temp / 'trace.svg').getroot()
        paths = '\n'.join('<path d="' + e.attrib['d'] + '"/>' for e in traced.findall('.//{*}path'))
        title = asset['title'].removesuffix(' · Original')
        svg.write_text(f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc">
<title id="title">{html.escape(title)}</title>
<desc id="desc">Black vector contours and shapes on a fully transparent background. Reconstructed from {html.escape(source.name)}.</desc>
<g transform="translate(0,{height}) scale(0.025,-0.025)" fill="#000" stroke="none">
{paths}
</g>
</svg>
''')
        asset['bytes'] = svg.stat().st_size
        print(f'{source.name}: SVG ({width} × {height})')

CATALOG.write_text('export const illustrations = ' + json.dumps(result, ensure_ascii=False, indent=2) +
                   ' as const;' + text.split('] as const;', 1)[1])
