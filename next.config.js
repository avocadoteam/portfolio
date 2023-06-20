const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    esmExternals: true,
    appDir: false,
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/MCfPwMKYfs',
        permanent: true,
      },
    ]
  }
};

module.exports = withVanillaExtract(nextConfig);
