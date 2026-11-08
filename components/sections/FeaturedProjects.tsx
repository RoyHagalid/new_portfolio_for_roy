// FEATURED PROJECTS
// -----------------
// 2–3 large cards. Each card is one big link to the project page.

import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { t, type Project } from "@/lib/content";
import StageNote from "../StageNote";
import styles from "./FeaturedProjects.module.css";

type Props = { lang: Locale; dict: Dictionary; projects: Project[] };

export default function FeaturedProjects({ lang, dict, projects }: Props) {
  return (
    <div className={`section container ${styles.wrapper}`}>
      <h2 id="featured-title" className={styles.heading}>
        {dict.featured.title}
        <StageNote stage="idea" placement="right">best work first</StageNote>
      </h2>
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/${lang}/projects/${project.slug}`} className={`surface ${styles.card}`}>
              {/* Cover image / logo goes here once Sanity is connected */}
              <div className={styles.cover} aria-hidden="true">
                {project.client ?? project.title}
              </div>
              <div className={styles.body}>
                <p className={styles.meta}>
                  {project.client} · {t(project.type, lang)}
                </p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.outcome}>{t(project.outcome, lang)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <StageNote stage="prototype" placement="top-right">card = one link · 16:10 cover</StageNote>
    </div>
  );
}
