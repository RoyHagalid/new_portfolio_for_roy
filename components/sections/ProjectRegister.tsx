// PROJECT REGISTER
// ----------------
// The compact list of other projects: one row each with name, type and year.
// It's a real table for screen readers, and each project name links to its page.

import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { t, type Project } from "@/lib/content";
import StageNote from "../StageNote";
import styles from "./ProjectRegister.module.css";

type Props = { lang: Locale; dict: Dictionary; projects: Project[] };

export default function ProjectRegister({ lang, dict, projects }: Props) {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={`surface ${styles.card}`}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            <h2 className={styles.heading}>{dict.register.title}</h2>
          </caption>
          <thead>
            <tr>
              <th scope="col">{dict.register.project}</th>
              <th scope="col">{dict.register.type}</th>
              <th scope="col" className={styles.year}>
                {dict.register.year}
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.slug}>
                <th scope="row">
                  <Link href={`/${lang}/projects/${project.slug}`}>{project.title}</Link>
                </th>
                <td>{t(project.type, lang)}</td>
                <td className={styles.year}>{project.year ?? "–"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <StageNote stage="idea" placement="above-right">small, but readable?</StageNote>
      <StageNote stage="prototype" placement="above-right">rows = links · min row 44px</StageNote>
    </div>
  );
}
