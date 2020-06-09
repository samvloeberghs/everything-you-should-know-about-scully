// scully.router-render-plugins.config.js
const { News } = require('./plugins/scully-news');
const { Users } = require('./plugins/scully-users');
const { DemoBanner } = require('./plugins/scully-demobanner');

exports.config = {
  projectName: 'scully',
  outDir: './dist/apps/scully-static',
  projectRoot: './apps/scully',
  defaultPostRenderers: [DemoBanner],
  routes: {
    '/news/:id': {
      type: News,
      url: 'http://localhost:4200/assets/news.json'
    },
    '/users/:id/:slug': {
      type: Users,
      url: 'http://localhost:4200/assets/users.json'
    }
  }
};
