/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/creativedirection',
                destination: '/blog/creativedirection',
                permanent: true
            },
            {
                source: '/kwartodistrito',
                destination: '/blog/kwatrodistrito',
                permanent: true
            },
            {
                source: '/beautyofthestruggle',
                destination: '/blog/beautyofstruggle',
                permanent: true
            }
            ,
            {
                source: '/embracingchange',
                destination: '/blog/discoveringpurpose',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
