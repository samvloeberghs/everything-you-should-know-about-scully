// scully.<your-project-name>.config.js
const {
  News
} = require('./news.routerplugin');

exports.config = {
  projectRoot: './src',
  routes: {
    '/news/:id/:slug': {
      type: News,
      url: 'http://your.api/news',
    }
  }
};
