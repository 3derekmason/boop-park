/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  async redirects() {
    return [{ source: "/login", destination: "/login", permanent: true }];
  },
  nextConfig: {
    reactStrictMode: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
