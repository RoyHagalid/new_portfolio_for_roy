"use client";
// LANGUAGE SWITCH
// ---------------
// A link to the same page in the other language: /no/projects/x <-> /en/projects/x

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function LanguageSwitch({ lang, dict, className }: { lang: Locale; dict: Dictionary; className?: string }) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Locale = lang === "no" ? "en" : "no";
  const target = pathname.replace(/^\/(no|en)(?=\/|$)/, `/${other}`);

  return (
    <Link href={target} hrefLang={other === "no" ? "nb" : "en"} lang={other === "no" ? "nb" : "en"} className={className}>
      <span aria-hidden="true">{dict.language.switchToShort}</span>
      <span className="sr-only">{dict.language.switchTo}</span>
    </Link>
  );
}
