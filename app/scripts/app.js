'use strict';

/**
 * @ngdoc overview
 * @name firebaseAngularDemoApp
 * @description
 * # firebaseAngularDemoApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseAngularDemoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
