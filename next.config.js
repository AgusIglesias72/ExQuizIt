/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cdn.discordapp.com',
      'lh3.googleusercontent.com',
    ],
  },
}

module.exports = nextConfig
