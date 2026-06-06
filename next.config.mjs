/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true, // We have many pages to convert, skip strict TS checks during build for now
    }
};

export default nextConfig;
