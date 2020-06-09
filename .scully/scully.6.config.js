// scully.router-render-plugins.config.js
const { setPluginConfig } = require('@scullyio/scully');
const { MinifyHtml } = require('scully-plugin-minify-html');
const { DisableAngular } = require('scully-plugin-disable-angular');

const { News } = require('./plugins/scully-news');
const { Users } = require('./plugins/scully-users');
const { DemoBanner } = require('./plugins/scully-demobanner');

setPluginConfig(DemoBanner, {
  message: 'Hi ngLeipzig'
})

exports.config = {
  projectName: 'scully',
  outDir: './dist/apps/scully-static',
  projectRoot: './apps/scully',
  inlineStateOnly: true,
  defaultPostRenderers: [DemoBanner, MinifyHtml],
  routes: {
    '/news/:id': {
      type: News,
      url: 'http://localhost:4200/assets/news.json'
    },
    '/users/:id/:slug': {
      type: Users,
      url: 'http://localhost:4200/assets/users.json',
      postRenderers: [
        DemoBanner, DisableAngular, MinifyHtml
      ]
    }
  }
};
