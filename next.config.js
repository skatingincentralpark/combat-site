/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    emotion: {
      autoLabel: "dev-only",
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {},
};
