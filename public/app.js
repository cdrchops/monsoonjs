import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './animate.css';
import './monsoon.css';
import './bstrap_or.css';
import 'bootstrap';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';


import routes from './app.routes';

import './components/home/home.controller';
import adminCtrl from './components/admin/admin.controller';
import weatherSvc from './services/weather.svc';
import gpioSvc from './services/gpio.svc';

angular.module('app', [uirouter, ngAnimate, ngResource])
  .config(routes).service('weatherSvc', weatherSvc).service('gpioSvc', gpioSvc).controller('adminCtrl', adminCtrl);