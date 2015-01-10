'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firebaseAngularDemoApp
 */
angular.module('firebaseAngularDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
