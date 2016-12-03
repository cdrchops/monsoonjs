import homeCtrl from './components/home/home.controller';
import appCtrl from './components/app/app.controller';
import adminCtrl from './components/admin/admin.controller';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('app', {
    abstract: true,
    template: require('./components/app/app.html'),
    controller: appCtrl,
    controllerAs: 'vm'
  }).state('app.home', {
    url: '/',
    views: {
      'main': {
        template: require('./components/home/home.html')
      },
      'nav': {
        template: require('./components/app/nav.html')
      },
      'opt':{
        template: require('./components/home/weather.html')
      }
    },
    controller: homeCtrl,
    controllerAs: 'vm'
  }).state('app.admin', {
    url: '/admin',
    views: {
      'main': {
        template: require('./components/admin/admin.html')
      },
      'nav': {
        template: require('./components/app/nav.html')
      },
      'opt':{
      }
    },
    controller: adminCtrl,
    controllerAs: 'vm'
  });
}