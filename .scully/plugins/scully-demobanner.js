// scully-demobanner.js
const {
  registerPlugin, getPluginConfig
} = require('@scullyio/scully');

const DemoBanner = 'demoBanner';

const demoBannerPlugin = (html) => {

  let demoBannerMessage = `Prerendered page ${(new Date()).toDateString()}`;
  const pluginConfig = getPluginConfig(DemoBanner);
  if (pluginConfig && pluginConfig.message) {
    demoBannerMessage = pluginConfig.message;
  }
  const demoBannerHtml = `<p>${demoBannerMessage}</p><hr />`;
  return html.replace(
    '<app-root', `${demoBannerHtml}<app-root`
  );
};

registerPlugin(
  'render', DemoBanner, demoBannerPlugin
);
exports.DemoBanner = DemoBanner;
