// scully.<your-project-name>.config.js
const {
  RouteTypes
} = require('@scullyio/scully');

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
};
