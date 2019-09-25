const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser');
const koaCors = require('@koa/cors');
const koaLogger = require('koa-logger');
const KoaRouter = require('koa-router');

const { UnprocessableEntity: UnprocessableEntityError } = require('http-errors');

// const { useAnalytics } = require('./services/analytics');
// const { useDatabase } = require('./services/database');

const api = require('./api');
// const errors = require('./middleware/errors');

module.exports = async function makeApp(port, host) {
  const app = new Koa();

  if (process.env.NODE_ENV === 'development') {
    app.use(koaLogger());
  }

  // app.use(errors(process.env.NODE_ENV !== 'production'));

  app.use(
    koaCors({
      exposeHeaders: [ 'Authorization' ],
    }),
  );

  app.use(
    koaBodyParser({
      strict: true,
      enableTypes: [ 'json' ],
      jsonLimit: '5mb',
      onerror(err, ctx) {
        throw new UnprocessableEntityError('body parse error');
      },
    }),
  );

  // await useDatabase(app);
  // await useAnalytics(app);

  const router = new KoaRouter();
  app.use(router.routes());
  app.use(router.allowedMethods());

  router.use('/api', api());

  return app;
};
