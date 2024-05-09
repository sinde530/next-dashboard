/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mml.pstatic.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'docs.nestjs.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
