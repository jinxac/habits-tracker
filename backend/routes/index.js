const sleepController = require('../controllers').sleep;

module.exports = (app) => {
  app.post('/api/v0/sleep', sleepController.create);
  app.get('/api/v0/sleep', sleepController.get);
};