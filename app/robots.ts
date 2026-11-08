// ROBOTS
// Tells search engines what they may index. Available at /robots.txt.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: "https://www.designhagalid.no/sitemap.xml",
  };
}
