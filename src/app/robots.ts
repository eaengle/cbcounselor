import type { MetadataRoute } from "next";
import { siteUrl } from "./base-layout";

// Static export requires a non-dynamic robots file; evaluated at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Internal calibration tool; already noindex, kept out of crawl too.
        disallow: ["/map-calibrator/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
