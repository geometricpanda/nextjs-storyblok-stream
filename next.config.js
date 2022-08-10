/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    redirects: async () => ([
        {
            source: '/home',
            destination: '/',
            permanent: true,
        },
    ]),
    rewrites: async () => ([
        {
            source: '/',
            destination: '/home',
        },
    ]),
}

module.exports = nextConfig
