import 'bootstrap/dist/css/bootstrap.css';
import './monsoon.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes';

import home from './components/home/home.controller';

angular.module('app', [uirouter])
  .config(routes);