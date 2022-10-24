 const nextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    disableStaticImages: true,
    domains: ['images.unsplash.com','tokens.buildspace.so', "stratosnft.io",'storage.googleapis.com','polygontechnology.notion.site'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    })

    return config
  },

}

module.exports = nextConfig