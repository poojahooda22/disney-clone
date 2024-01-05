/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            'https://images.unsplash.com/photo-:id',
        ]
    }
}

module.exports = nextConfig
