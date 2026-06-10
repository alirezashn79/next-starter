/** @type {import('next').NextConfig} */

const url = new URL(process.env.NEXT_PUBLIC_BASE_URL);

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: url.protocol.replace(':', ''),
                hostname: url.hostname,
                port: url.port,
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
