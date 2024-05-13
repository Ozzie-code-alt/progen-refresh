/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/embracingchange',
                destination: '/blog/1_creative_direction',
                permanent: true
            },
            {
                source: '/creativedirection',
                destination: '/blog/1_creative_direction',
                permanent: true
            },
            {
                source: '/kwartodistrito',
                destination: '/blog/2_kwatro_distrito',
                permanent: true
            },
            {
                source: '/beautyofthestruggle',
                destination: '/blog/3_beauty_of_struggle',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
