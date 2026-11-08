// FOOTER
// ------
// Contact details, repeated at the bottom of every page.

import type { Dictionary, Locale } from "@/lib/i18n";
import { about } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer({ dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>{about.name}</p>
        <ul className={styles.links}>
          <li>
            <a href={`mailto:${about.email}`}>{about.email}</a>
          </li>
          <li>
            <a href={about.linkedin}>{dict.contact.linkedin}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
