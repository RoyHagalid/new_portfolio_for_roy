// LANGUAGE REDIRECT
// -----------------
// Runs before every page request. If the URL has no language in it
// (e.g. designhagalid.no/), the visitor is sent to /no or /en based on the
// language their browser prefers. Norwegian is the fallback.

import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "./lib/i18n";

function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language")?.toLowerCase() ?? "";
  // Browsers list languages in order of preference, e.g. "nb-NO,nb;q=0.9,en;q=0.8"
  for (const part of header.split(",")) {
    const code = part.trim().split(";")[0].split("-")[0];
    if (code === "nb" || code === "nn" || code === "no") return "no";
    if (code === "en") return "en";
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next.js internals, files with an extension (images, fonts, notes),
  // and the sitemap/robots files.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
