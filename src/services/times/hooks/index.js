'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const process = require('./process')

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [auth.queryWithCurrentUser()],
  get: [auth.queryWithCurrentUser()],
  create: [process()],
  update: [auth.restrictToOwner()],
  patch: [auth.restrictToOwner()],
  remove: [auth.restrictToOwner()]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
