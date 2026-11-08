// ROOT LAYOUT
// -----------
// The frame around every page: <html>, <head>, header, footer.
// The [lang] folder name means this layout receives "no" or "en" from the URL.

import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Self-hosted fonts (no requests to Google, which is better for privacy).
// One set per stage: Courier Prime = Idea, Inter = Prototype,
// Libre Baskerville + Work Sans = Final.
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/700.css";
import "@fontsource-variable/inter";
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource-variable/work-sans";
import "../globals.css";

import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { defaultStage, stageInitScript } from "@/lib/stage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Tells Next.js which language versions to build ahead of time.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    metadataBase: new URL("https://www.designhagalid.no"),
    title: { default: `Roy Hagalid · ${dict.hero.title}`, template: "%s · Roy Hagalid" },
    description: dict.hero.lede,
    // Tells search engines that the two language versions belong together
    alternates: {
      canonical: `/${lang}`,
      languages: { "nb-NO": "/no", en: "/en" },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    // suppressHydrationWarning: the stage script may change data-stage before
    // React starts, and that's on purpose.
    <html lang={lang === "no" ? "nb" : "en"} data-stage={defaultStage} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: stageInitScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          {dict.skipToContent}
        </a>
        <Header lang={lang} dict={dict} />
        <main id="main">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
