// PROJECT PAGE (TEMPLATE)
// -----------------------
// Every project uses this same template. The layout is a placeholder for now;
// we'll design the project page formula together in a later step.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { getProject, getProjects, t } from "@/lib/content";
import styles from "./page.module.css";

// Build every project page in both languages ahead of time.
export function generateStaticParams() {
  return locales.flatMap((lang) => getProjects().map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !isLocale(lang)) return {};
  return {
    title: project.title,
    description: t(project.summary, lang),
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: { "nb-NO": `/no/projects/${slug}`, en: `/en/projects/${slug}` },
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const all = getProjects();
  const index = all.findIndex((p) => p.slug === slug);
  const previous = all[(index - 1 + all.length) % all.length];
  const next = all[(index + 1) % all.length];

  return (
    <article className="section">
      <div className="container">
        <p>
          <Link href={`/${lang}#projects`}>← {dict.project.back}</Link>
        </p>

        <header className={styles.header}>
          {project.client && <p className={styles.client}>{project.client}</p>}
          <h1>{project.title}</h1>
          <p className={styles.summary}>{t(project.summary, lang)}</p>
        </header>

        <dl className={`surface ${styles.facts}`}>
          <div>
            <dt>{dict.project.role}</dt>
            <dd>{t(project.role, lang)}</dd>
          </div>
          {project.period && (
            <div>
              <dt>{dict.project.period}</dt>
              <dd>{t(project.period, lang)}</dd>
            </div>
          )}
          <div>
            <dt>{dict.project.methods}</dt>
            <dd>{project.methods.join(", ")}</dd>
          </div>
        </dl>

        <div className={styles.content}>
          <p>{lang === "no" ? "Dummytekst: innholdet i casen kommer fra Sanity." : "Dummy text: the case content will come from Sanity."}</p>
        </div>

        <nav className={styles.pager} aria-label={lang === "no" ? "Flere prosjekter" : "More projects"}>
          <Link href={`/${lang}/projects/${previous.slug}`}>
            <span className={styles.pagerLabel}>{dict.project.previous}</span>
            {previous.title}
          </Link>
          <Link href={`/${lang}/projects/${next.slug}`} className={styles.pagerNext}>
            <span className={styles.pagerLabel}>{dict.project.next}</span>
            {next.title}
          </Link>
        </nav>
      </div>
    </article>
  );
}
