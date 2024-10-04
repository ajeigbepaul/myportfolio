/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};
export default nextConfig;

