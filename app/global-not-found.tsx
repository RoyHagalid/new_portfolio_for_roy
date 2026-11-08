// 404 PAGE (for URLs that match nothing at all)
// Next.js uses this when a URL doesn't match any route. It skips the normal
// layout, so it brings its own <html> and styles.

import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/work-sans";
import "@fontsource/libre-baskerville/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 · Roy Hagalid",
};

export default function GlobalNotFound() {
  return (
    <html lang="nb" data-stage="final">
      <body>
        <main className="section">
          <div className="container">
            <h1>Fant ikke siden · Page not found</h1>
            <p>
              <Link href="/no">Til forsiden</Link> · <Link href="/en">Go to the front page</Link>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
