/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ["assets.website-files.com"]
    // }
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.website-files.com",
                port: "",
            }
        ]
    }
};

export default nextConfig;
