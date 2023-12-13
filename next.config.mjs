/** @type {import('next').NextConfig} */
const config = {
  redirects: async () => {
    return [
      {
        source: '/counselling',
        destination: '/aanpak',
        permanent: true,
      },
      {
        source: '/wie-ben-ik',
        destination: '/puur',
        permanent: true,
      },
      {
        source: '/tarieven-en-vergoedingen',
        destination: '/aanpak',
        permanent: true,
      },
      {
        source: '/dietetiek',
        destination: '/aanpak',
        permanent: true,
      },
      {
        source: '/registratie',
        destination: '/registraties',
        permanent: true,
      },
      {
        source: '/reacties',
        destination: '/',
        permanent: true,
      },
      {
        source: '/links',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default config
