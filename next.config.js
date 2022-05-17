// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  // other stuff
  i18n,
};

module.exports = nextConfig;