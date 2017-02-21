'use strict';

// src\services\time\hooks\restrict-to-sender.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors')

module.exports = function (options) {

  return function (hook) {
    const timeService = hook.app.service('times')

    return timeService.get(hook.id, hook.params).then(time => {
      if (time.sentBy._id !== hook.params.user._id) {
        throw new errors.NotAuthenticated('Access not allowed')
      }

      return hook
    })
  };
};
