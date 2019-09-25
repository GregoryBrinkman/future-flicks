module.exports = async function getVersions(ctx) {
  ctx.body = {
    backEndVersion: '5.0.0',
    frontEndVersion: '5.0.0',
  };

  ctx.status = 200;
};
