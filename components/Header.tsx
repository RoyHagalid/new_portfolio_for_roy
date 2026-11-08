// HEADER
// ------
// Name, menu, language switch and stage switch. Sticks to the top when scrolling.

import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import StageSwitch from "./StageSwitch";
import LanguageSwitch from "./LanguageSwitch";
import StageNote from "./StageNote";
import styles from "./Header.module.css";

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${lang}`} className={styles.name}>
          Roy Hagalid
        </Link>

        <nav aria-label={dict.nav.label} className={styles.nav}>
          <a href={`/${lang}#projects`}>{dict.nav.projects}</a>
          <a href={`/${lang}#about`}>{dict.nav.about}</a>
          <a href={`/${lang}#contact`}>{dict.nav.contact}</a>
        </nav>

        <div className={styles.controls}>
          <LanguageSwitch lang={lang} dict={dict} className={styles.lang} />
          <StageSwitch dict={dict} />
        </div>

        {/* Placeholder notes, to be replaced by Roy's SVGs */}
        <StageNote stage="idea" placement="below-left">header / nav</StageNote>
        <StageNote stage="prototype" placement="below-right">sticky · 44px touch targets</StageNote>
      </div>
    </header>
  );
}
