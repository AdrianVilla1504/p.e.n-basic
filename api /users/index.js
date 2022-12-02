const microservice = require('.api/microservice');

function routes (app) {
  app.use('/api/microservice', microservice);
}

module.exports = routes;
