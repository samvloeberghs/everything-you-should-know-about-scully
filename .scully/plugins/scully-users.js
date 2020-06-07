const {httpGetJson, registerPlugin, routeSplit} = require('@scullyio/scully');

const Users = 'users';

const usersPlugin = async(route, config) => {
  const list = await httpGetJson(config.url);
  const {createPath} = routeSplit(route);
  const handledRoutes = [];
  console.log(list);
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.id, item.slug)
    });
  }
  return handledRoutes;
};

const usersPluginValidator = async conf => [];

registerPlugin('router', Users, usersPlugin, usersPluginValidator);
exports.Users = Users;
