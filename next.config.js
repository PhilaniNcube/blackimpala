/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["sqqxwwmtljjqhzmapmkh.supabase.co"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
