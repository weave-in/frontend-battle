/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables blocking on ESLint errors
  },
};

module.exports = nextConfig;
