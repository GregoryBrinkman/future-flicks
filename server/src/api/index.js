const KoaRouter = require('koa-router');
const getVersions = require('./all');

module.exports = function version() {
  const router = new KoaRouter();

  router.get('/', getVersions);

  return router.routes();
};
