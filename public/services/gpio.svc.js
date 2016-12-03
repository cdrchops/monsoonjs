'use strict';

gpioSvc.$inject = ['$resource'];

function gpioSvc($resource){
    return $resource('/api/gpio/:pin/:action', {pin:'@pin', action:'@action'}, {
        'set': {method:'POST'}
    })
}

export default gpioSvc