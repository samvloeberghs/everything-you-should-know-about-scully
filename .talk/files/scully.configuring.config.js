// scully.<your-project-name>.config.js
const {
  setPluginConfig, RouteTypes
} = require('@scullyio/scully');
const { News } = require('./news.routerplugin');
const { MinifyHtml } = require('./minifyHtml.renderPlugin');

setPluginConfig(News, {
  src: 'http://your.api/news'
});

const postRenderers = [MinifyHtml];

exports.config = {
  projectRoot: './src',
  outDir: './dist/apps/scully-static',
  inlineStateOnly: true,
  defaultPostRenderers: postRenderers,
  routes: {
    '/users/:id': {
      type: RouteTypes.json,
      id: {
        url: 'http://your.api/users',
        property: 'id'
      }
    },
    '/news/:id/:slug': {
      type: News
    }
  }
};
