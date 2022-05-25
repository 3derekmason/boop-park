/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      { source: "/login", destination: "/login", permanent: true },
      { source: "/", destination: "/", permanent: true },
    ];
  },
  nextConfig: {
    reactStrictMode: true,
  },
};
