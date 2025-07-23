/** @type {import('next').NextConfig} */
const nextConfig = { output: 'standalone',
    experimental: {
        cssChunking: 'strict',
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        unoptimized: true,
    },};

export default nextConfig;
