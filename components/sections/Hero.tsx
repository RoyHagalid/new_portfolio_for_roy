// HERO
// ----
// The first thing a visitor sees: who you are, what you do, two actions.

import type { Dictionary, Locale } from "@/lib/i18n";
import StageNote from "../StageNote";
import styles from "./Hero.module.css";

export default function Hero({ dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className={`section ${styles.hero}`} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.text}>
          <h1 id="hero-title" className={styles.title}>
            {dict.hero.title}
            <StageNote stage="idea" placement="right" showOnMobile>header 1</StageNote>
          </h1>
          <p className={styles.lede}>{dict.hero.lede}</p>
          <div className={styles.actions}>
            {/* The CV link will point to the PDF in Sanity later */}
            <a className="button button-primary" href="#">
              {dict.hero.cv}
            </a>
            <a className="button" href="#contact">
              {dict.hero.contact}
            </a>
            <StageNote stage="prototype" placement="right">2 CTAs, primary first</StageNote>
          </div>
        </div>
      </div>
    </section>
  );
}
