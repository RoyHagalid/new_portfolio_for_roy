// FRONT PAGE
// ----------
// The one-page layout, top to bottom:
//   hero (who + what) -> featured projects -> other projects (register) -> about/contact

import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { getProjects } from "@/lib/content";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProjectRegister from "@/components/sections/ProjectRegister";
import About from "@/components/sections/About";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const projects = getProjects();

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <section id="projects" aria-labelledby="featured-title">
        <FeaturedProjects lang={lang} dict={dict} projects={projects.filter((p) => p.featured)} />
        <ProjectRegister lang={lang} dict={dict} projects={projects.filter((p) => !p.featured)} />
      </section>
      <About lang={lang} dict={dict} />
    </>
  );
}
