const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(glb|gltf)$/,
    use: {
      loader: 'file-loader',
    }
  });

  return config;
};