const path = require('path')

module.exports = {
  //reactStrictMode: true,
  distDir: 'dist/functions/next',
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    IMAGES_LOADER: process.env.IMAGES_LOADER
  }, /*
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  }, */
  images: {
/*     deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96], */
/*     loader: 'cloudinary',
    path: `https://${process.env.IMAGES_DOMAIN}/${process.env.IMAGES_DOMAIN_USERNAME}/`, */
    //loader: 'cloudinary',
    domains: [ 'localhost', process.env.IMAGES_DOMAIN],
  },
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  }
}
