// STAGE NOTE
// ----------
// A decorative note or sketch that only appears in one stage.
//
// Rules that keep the layout identical across stages:
//   - It floats on top of the page (position: absolute) and never takes up space.
//   - It's hidden from screen readers (aria-hidden); the stage switch explains
//     to screen reader users that notes are decorative.
//   - On small screens it's hidden unless you set showOnMobile.
//
// Usage, with one of Roy's SVGs:
//   <StageNote stage="idea" src="/notes/idea-hero-h1.svg" width={120} placement="right" />
// Or as a text placeholder while the SVG isn't drawn yet:
//   <StageNote stage="idea" placement="right">header 1</StageNote>
//
// The parent element needs position: relative so the note knows what to sit next to.

import type { Stage } from "@/lib/stage";
import styles from "./StageNote.module.css";

type Placement = "right" | "left" | "above-right" | "below-left" | "below-right" | "top-right";

type Props = {
  stage: Exclude<Stage, "final">;
  placement: Placement;
  src?: string;
  width?: number;
  showOnMobile?: boolean;
  children?: React.ReactNode;
};

export default function StageNote({ stage, placement, src, width, showOnMobile = false, children }: Props) {
  const classes = [styles.note, styles[stage], styles[placement], showOnMobile ? styles.mobile : ""].join(" ");

  return (
    <span className={classes} aria-hidden="true">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- small decorative SVG, no optimisation needed
        <img src={src} alt="" width={width} />
      ) : (
        <span className={styles.text}>{children}</span>
      )}
    </span>
  );
}
