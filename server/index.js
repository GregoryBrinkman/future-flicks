// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// const debug = require('debug')('app');
const makeApp = require('./src');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT) || 3001;
(async() => {

const app = await makeApp();
app.listen(PORT, HOST, err => {
  if (err) {
    return reject(err);
  }

  // debug(`API listening on ${HOST}:${PORT}`);
  console.log(`App listening on ${HOST} - Port ${PORT}`);
});

})();

