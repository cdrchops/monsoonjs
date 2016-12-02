'use strict';

const Hapi = require('hapi');
const models = require('./models');

//create the server
const server = new Hapi.Server();
server.connection({
    port: 3000
});

server.route(require('./lib/routes'));

models.sequelize.sync().then(() => {
    server.start(() => {
        console.log('running on 3000');
    })
});