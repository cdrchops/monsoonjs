'use strict';
const https = require('https');
const apiKey = '46c4517f4b60fd1bc4316505d69afad5' 

function getWeather(location, callback) {
    return https.get({
        host: 'api.darksky.net',
        path: '/forecast/' + apiKey + '/' + location.join(',')
    }, function(response) {
        //console.log('server responxe', response)
        // Continuously update stream with data
        let body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            // Data reception is done, do whatever with it!
            let parsed = JSON.parse(body);
            callback(parsed);
        });
    });

}

module.exports = {
    get: getWeather
}