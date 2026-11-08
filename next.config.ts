import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Lets app/global-not-found.tsx handle URLs that match nothing
    globalNotFound: true,
  },
};

export default nextConfig;
