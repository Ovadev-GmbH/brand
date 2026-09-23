import { useMemo, type HTMLAttributes } from "react";
import { blobSvg, type BlobOptions } from "./index";

export interface BlobAvatarProps extends BlobOptions, Omit<HTMLAttributes<HTMLSpanElement>, "title"> {
  /** a stable, non-secret id: user id, e-mail address, order e-mail */
  seed: string;
}

/**
 * The blob inline, so it scales with the page, needs no request and can
 * answer a hover. `title` names it for assistive technology; without one
 * it is decorative, as an avatar beside the person's written name is.
 */
export function BlobAvatar({ seed, size = 32, background, expression, traits, animate, title, style, ...rest }: BlobAvatarProps) {
  const pinned = JSON.stringify(traits ?? null);
  const html = useMemo(
    () => blobSvg(seed, { size, background, expression, traits, animate, title }),
    // traits is usually an inline object; its content is what matters
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed, size, background, expression, pinned, animate, title],
  );
  return (
    <span
      {...rest}
      style={{ display: "inline-flex", width: size, height: size, flex: "none", lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
