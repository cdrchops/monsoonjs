import 'bootstrap/dist/css/bootstrap.css';
import './animate.css';
import './monsoon.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate'

import routes from './app.routes';

import home from './components/home/home.controller';

angular.module('app', [uirouter, ngAnimate])
  .config(routes);