'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAngularDemoApp
 */
angular.module('firebaseAngularDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
