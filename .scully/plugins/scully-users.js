const {
  httpGetJson, registerPlugin, routeSplit
} = require('@scullyio/scully');

const Users = 'users';

const usersPlugin = async (route, config) => {
  const list = await httpGetJson(config.url);
  const { createPath } = routeSplit(route);
  const handledRoutes = [];
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.id, item.slug)
    });
  }
  return handledRoutes;
};

registerPlugin('router', Users, usersPlugin);
exports.Users = Users;
