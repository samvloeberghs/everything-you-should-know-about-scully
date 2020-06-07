// scully.<your-project-name>.config.js
const { setPluginConfig } = require('@scullyio/scully');
const { News } = require('./news.routerplugin');
const { MinifyHtml } = require('./minifyHtml.renderplugin');

setPluginConfig(News, {
  src: 'http://your.api/news'
});

const postRenderers = [MinifyHtml];

exports.config = {
  projectRoot: './src',
  outDir: './dist/static',
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

// scully.<your-project-name>.config.js
const { RouteTypes } = require('@scullyio/scully');

exports.config = {
  projectRoot: './src',
  routes: {
    '/users/:id': {
      type: RouteTypes.json,
      id: {
        url: 'http://your.api/users',
        property: 'id'
      }
    }
  }
}


