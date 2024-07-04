/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io',

          },
          {
            protocol: 'https',
            hostname: 'landingfoliocom.imgix.net',

          },
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',

          },
          {
            protocol: 'https',
            hostname: 'static.shuffle.dev',

          },
        ],
      },
};

export default nextConfig;
  

  