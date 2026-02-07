/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static export
  },
  // Use standalone for server deployment, or enable static export below
  output: "standalone",
  // Uncomment the line below if you want pure static HTML export (no server needed)
  // output: "export",
};

module.exports = nextConfig;
