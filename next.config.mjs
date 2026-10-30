/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/labs",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/labs/:path*",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
