/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/embracingchange',
                destination: '/blog/creative_direction',
                permanent: true
            },
            {
                source: '/creativedirection',
                destination: '/blog/creative_direction',
                permanent: true
            },
            {
                source: '/kwartodistrito',
                destination: '/blog/kwatro_distrito',
                permanent: true
            },
            {
                source: '/beautyofthestruggle',
                destination: '/blog/beauty_of_struggle',
                permanent: true
            }
            ,
            {
                source: '/embracingchange',
                destination: 'https://www.prometheus.ph/blog/discovering_purpose',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
