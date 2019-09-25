module.exports = function errors(forceExpose = false) {
  return async function errors(ctx, next) {
    try {
      await next();
    }
    catch (error) {
      if (!forceExpose && !error.expose) {
        if (error.headers) {
          Object.assign(ctx.response.headers, error.headers);
        }

        ctx.status = error.status || 500;

        ctx.app.emit('error', error, ctx);
      }
      else {
        if (error.headers) {
          Object.assign(ctx.response.headers, error.headers);
        }

        ctx.status = error.status || 500;
        ctx.body = {
          type: error.name,
          message: error.message,
        };

        for (const key in error) {
          if ([
            'status', 'statusCode', 'expose', 'headers', 'stack',
            'name', 'message', 'request', 'response',
          ].includes(key)) {
            continue;
          }

          ctx.body[key] = error[key];
          if (typeof ctx.body[key] === 'string') {
            ctx.body[key] = ctx.body[key]
              .replace(/[^\x00-\x7F]/g, '-') // eslint-disable-line no-control-regex
              .replace(/-+$/gm, '')
            ;
          }
        }

        if (process.env.NODE_ENV === 'development') {
          ctx.body.debug = toDebug(error);
        }

        if (ctx.status >= 500) {
          ctx.app.emit('error', error, ctx);
        }
      }
    }
  };
};

function toDebug(error) {
  /* istanbul ignore next */
  if (!error.stack) {
    return undefined;
  }

  const stack = error.stack.split('\n');

  const output = {
    error: stack[0],
    stack: stack.slice(1).map(v => v.trim()),
  };

  if (error.raw) {
    output.debug = toDebug(error.raw);
  }

  return output;
}
