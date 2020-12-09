// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const withImages = require("next-images")

const debug = process.env.NODE_ENV !== "production"

module.exports = withImages({
  assetPrefix: !debug ? "/ruucm.github.io/" : "",
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      }
    }

    return config
  },
})
