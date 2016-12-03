'use strict';
appCtrl.$inject = ['$interval', '$timeout', 'weatherSvc'];
export default function appCtrl($interval, $timeout, weatherSvc) {
    console.log('appCtrl');
    let vm = this;
    vm.bgImg = 'img/bg1.jpg';
    vm.currentIcon = 'wi-na';
    vm.weather = {};
    vm.windDir = windDir;
    vm.imgLoaded = true;
    function getWeather() {
        weatherSvc.check({
            location: [27.494906, -82.5827889]
        }).$promise.then(function (w) {
            vm.weather = w;
            vm.weather.currently.time = new Date(vm.weather.currently.time * 1000);
            weatherIcon(w);
        });
    }

    function windDir(bearing) {
        var icon = 'wi wi-wind from-' + bearing + '-deg'
        console.log(icon);
        return icon;
    }

    function weatherIcon(w) {
        let icon = 'wi ';
        switch (w.currently.icon) {
            case 'clear-day':
                icon += 'wi-day-sunny';
                break;
            case 'clear-night':
                icon += 'wi-night-clear';
                break;
            case 'partly-cloudy-day':
                icon += 'wi-day-cloudy';
                break;
            case 'partly-cloudy-night':
                icon += 'wi-night-alt-cloudy';
                break;
            case 'cloudy':
                icon += 'wi-cloudy';
                break;
            case 'rain':
                icon += 'wi-rain';
                break;
            case 'sleet':
                icon += 'wi-sleet';
                break;
            case 'snow':
                icon += 'wi-snow';
                break;
            case 'wind':
                icon += 'wi-strong-wind'
                break;
            case 'fog':
                icon += 'wi-fog'
                break;
            default:
                icon += 'wi-na';
        }
        vm.currentIcon = icon;
    }

    function changeBackground() {
        console.log('changing image');
        vm.imgLoaded = false;
        let imageNum = Math.floor(Math.random() * 6) + 1;
        vm.bgImg = 'img/bg' + imageNum + '.jpg';
        $timeout(() => {
            vm.imgLoaded = true;
        }, 50)

    }
    getWeather();

    $interval(() => {
        changeBackground()
    }, 10000);

    $interval(() => {
        getWeather();
    }, 300000);

}