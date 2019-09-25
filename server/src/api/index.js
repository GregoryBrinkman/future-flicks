const KoaRouter = require('koa-router');
const search = require('./search');

module.exports = function version() {
  const router = new KoaRouter();

  router.get('/search', search);

  return router.routes();
};
