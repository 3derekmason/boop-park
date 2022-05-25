/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [{ source: "/login", destination: "/login", permanent: true }];
  },
  nextConfig: {
    reactStrictMode: true,
  },
};
