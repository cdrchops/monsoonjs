// lib/api.js
'use strict'
const models = require('../models');
const Scheduler = require('./scheduler');
const scheduler = new Scheduler();

exports.pins = {
  all: function(request, reply) {
    models.Pin.findAll()
      .then(function(pins) {
        reply(pins).code(200);
      });
  },
  add: (request, reply) => {
      const p = request.payload;
      models.Pin.create(p).then( (a) => {
          reply(a).code(200)
      }).catch( (err) => {
          reply(err).code(500);
      });
  }
};
exports.schedules = {
    all: (request, reply) => {
        models.Schedule.findAll({include:[{model: models.SchedulePin}]}).then((schedules) => {
            reply(schedules).code(200);
        })
    },
    find: (request, reply) => {
        const q = request.payload;
        models.Schedule.findAll(q).then((schedules) => {
            schedules.map((s)=>{
                console.log(s);
            })
            reply(schedules).code(200);
        })
    },
    add: (request, reply) => {
        const s = request.payload;
        models.Schedule.create(s, {include: models.SchedulePin}).then( (a) => {
            console.log(a);
            reply(a).code(200);
        }).catch( (err) => {
            reply(err).code(500)
        })
    }
}