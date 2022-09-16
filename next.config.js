/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['www.kinopoisk.ru', 'floating-sierra-20135.herokuapp.com']
  }
}

module.exports = nextConfig
