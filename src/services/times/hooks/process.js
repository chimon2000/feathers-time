'use strict';

// src\services\time\hooks\process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function (options) {

  return function (hook) {
    const user = hook.params.user
    const what = hook.data.what
      .substring(0, 400)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    hook.data = {
      date: hook.data.date,
      hours: hook.data.hours,
      what,
      userId: user._id,
      createdAt: new Date().getTime()
    }
  };
};
