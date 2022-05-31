/** @type {import('next').NextConfig} */
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  esModule: true
}

module.exports = withImages({
  ...nextConfig
})
