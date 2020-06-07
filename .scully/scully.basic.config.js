const {
  setPluginConfig
} = require('@scullyio/scully');
const {
  MyCustomRouterPlugin,
  MyOtherCustomRenderPlugin
} = require('./my-custom-router-plugins');
const {
  MyCustomRenderPlugin
} = require('./my-custom-render-plugin');

setPluginConfig(MyCustomRouterPlugin, {
  // custom plugin config
});

const defaultPostRenderers = [MyCustomRenderPlugin];

exports.config = {
  projectRoot: './src',
  outDir: './dist/static',
  inlineStateOnly: true,
  defaultPostRenderers: postRenderers,
  routes: {
    '/dynamic-route/:id/:slug': {
      type: MyCustomRouterPlugin,
      postRenderers: [
        ...defaultPostRenderers,
        MyOtherCustomRenderPlugin
      ]
    }
  }
};
