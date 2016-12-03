// lib/routes.js
'use strict';

const api = require('./api');

module.exports = [{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public'
    }
  }
}, {
  method: 'GET',
  path: '/api/pins',
  handler: api.pins.all
}, {
  method: 'POST',
  path: '/api/pins',
  handler: api.pins.add
}, {
  method: 'GET',
  path: '/api/schedules',
  handler: api.schedules.all
}, {
  method: 'POST',
  path: '/api/schedules',
  handler: api.schedules.add
}, {
  method: 'POST',
  path: '/api/schedules/find',
  handler: api.schedules.find
}, {
  method:'POST',
  path: '/api/weather',
  handler:api.weather.get
}];