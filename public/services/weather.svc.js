'use strict';

weatherSvc.$inject = ['$resource'];

function weatherSvc($resource){
    return $resource('/api/weather', null, {
        'check': {method:'POST'}
    })
}

export default weatherSvc