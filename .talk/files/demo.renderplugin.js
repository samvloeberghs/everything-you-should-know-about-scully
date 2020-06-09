// demo.renderplugin.js
const {
 registerPlugin
} = require('@scullyio/scully');

const DemoBanner = 'demoBanner';
const demoBannerHtml = `<p>
  This is a demo page
</p><hr />`;

const demoBannerPlugin = (html) => {
  return html.replace(
    '<app-root', `${demoBannerHtml}<app-root`
  );
};

registerPlugin(
  'render', DemoBanner, demoBannerPlugin
);
exports.DemoBanner = DemoBanner;
