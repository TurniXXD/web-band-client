// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL,
		IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
		IMAGES_LOADER: process.env.IMAGES_LOADER,
	},
	//concurrentFeatures: true,
	/*publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  }, */
	// Uncoment to add domain whitelist
  images: {
    domains: [ 'localhost', process.env.IMAGES_DOMAIN],
  },
	/*   webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  }, */
	eslint: {
		ignoreDuringBuilds: true,
	},
}
