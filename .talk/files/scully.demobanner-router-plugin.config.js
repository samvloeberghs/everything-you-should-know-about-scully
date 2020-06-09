// scully.<your-project-name>.config.js
const {
  DemoBanner
} = require('./demo.renderplugin');

exports.config = {
  projectRoot: './src',
  defaultPostRenderers: [DemoBanner]
};
