// 404 PAGE (inside a language)
// Shown when a project or page under /no or /en doesn't exist.
// It sits inside the normal layout, so header, footer and stage switch still work.

import Link from "next/link";

export default function NotFound() {
  // not-found pages don't receive the language, so we show both.
  return (
    <section className="section">
      <div className="container">
        <h1>Fant ikke siden · Page not found</h1>
        <p>Siden finnes ikke, eller er flyttet. · This page doesn&apos;t exist, or it has moved.</p>
        <p>
          <Link href="/no">Til forsiden</Link> · <Link href="/en">Go to the front page</Link>
        </p>
      </div>
    </section>
  );
}
