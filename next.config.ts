import type { NextConfig } from "next";

const repoName = "cbcounselor";
const isGithubPages = process.env.GITHUB_PAGES === "true";
export const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  // Emit every route as a folder with its own index.html (e.g. /people/alan-engle/index.html).
  // Apache/HostGator serves these directly via DirectoryIndex; without it, static export
  // produces extension-less .html files that a plain Apache host will not resolve.
  trailingSlash: true,
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
