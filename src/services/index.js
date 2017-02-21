'use strict';
const times = require('./times');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function () {
  const app = this;

  app.configure(authentication);
  app.configure(user);
  app.configure(times);
};
