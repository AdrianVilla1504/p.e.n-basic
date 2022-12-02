const users = require('./api/users/index');

function routes (app) {
  app.use('/api/users', users);
}

module.exports = routes;
