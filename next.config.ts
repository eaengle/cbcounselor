import type { NextConfig } from "next";

const repoName = "cbcounselor";
const isGithubPages = process.env.GITHUB_PAGES === "true";
export const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.law.com",
        pathname: "/brightspot/21/eb/50dbd11a4f3083019ff65d9b2037/**",
      },
    ],
  },
  basePath,
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
