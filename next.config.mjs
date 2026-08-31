/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hutaib.admin.simboz.website',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hutaib.org',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
