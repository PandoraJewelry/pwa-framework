// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const withImages = require('next-images')


const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
} = require('next/constants');

const nextConfig = {
  serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    API_URL: isProd ? process.env.API_URL : 'https://example.com' 
  }
};

module.exports = withPlugins([
  [withLess({
    // cssModules: false,
    // cssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName : '[local]___[hash:base64:5]',
    // },
    // [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
    //   cssLoaderOptions: {
    //     localIdentName: '[hash:base64:3]',
    //   },
    // },
  })],
  withImages,
], nextConfig);
