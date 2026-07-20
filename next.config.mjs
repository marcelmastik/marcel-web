const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "marcel-web";

const nextConfig = {
  poweredByHeader: false,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
