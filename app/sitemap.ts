// SITEMAP
// A list of every page, for search engines. Available at /sitemap.xml.

import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getProjects } from "@/lib/content";

const base = "https://www.designhagalid.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...getProjects().map((p) => `/projects/${p.slug}`)];
  return pages.flatMap((page) =>
    locales.map((lang) => ({
      url: `${base}/${lang}${page}`,
      alternates: { languages: { "nb-NO": `${base}/no${page}`, en: `${base}/en${page}` } },
    })),
  );
}
