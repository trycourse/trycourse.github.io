/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.com/users/852613869406912563',
      permanent: true
    }
  ]
}

module.exports = nextConfig
