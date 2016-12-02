import homeCtrl from './components/home/home.controller';
import appCtrl from './components/app/app.controller';
routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('app', {
    abstract: true,
    template:require('./components/app/app.html'),
    controller:appCtrl,
    controllerAs:'vm'
  }).state('app.home', {
    url:'/',
     template:require('./components/home/home.html'),
    controller:homeCtrl,
    controllerAs:'vm'
  });
}