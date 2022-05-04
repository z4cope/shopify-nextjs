/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
};

module.exports = nextConfig;
