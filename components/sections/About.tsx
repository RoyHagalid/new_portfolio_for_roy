// ABOUT AND CONTACT
// -----------------
// Short bio with photo, followed by contact details. Kept to about one screen.

import type { Dictionary, Locale } from "@/lib/i18n";
import { about, t } from "@/lib/content";
import StageNote from "../StageNote";
import styles from "./About.module.css";

export default function About({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        {/* Photo placeholder until the portrait comes from Sanity */}
        <div className={`surface ${styles.photo}`} role="img" aria-label={dict.about.photoAlt} />
        <div className={styles.text}>
          <h2 id="about-title" className={styles.heading}>
            {dict.about.title}
            <StageNote stage="idea" placement="right">max one screen!</StageNote>
          </h2>
          <p>{t(about.body, lang)}</p>

          <h3 id="contact">{dict.contact.title}</h3>
          <ul className={styles.contact}>
            <li>
              {dict.contact.email}: <a href={`mailto:${about.email}`}>{about.email}</a>
            </li>
            <li>
              <a href={about.linkedin}>{dict.contact.linkedin}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
