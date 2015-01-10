'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAngularDemoApp
 */
angular.module('firebaseAngularDemoApp')
  .controller('MainCtrl', [ '$scope', '$firebase', function ($scope, $firebase) {
    var author = 'Me';
    var refMessages = new Firebase('https://crackling-fire-2244.firebaseio.com/messages');
    var syncMessages = $firebase(refMessages);

    $scope.messages = syncMessages.$asArray();

    $scope.users = [
    	{username: 'Misko', img:''},
    	{username: 'Vojta', img:''},
    	{username: 'Tom', img:''},		
    ];

    $scope.addMessage = function(text){
    	if (!$scope.newMessage) { return; }
    	$scope.messages.$add(
    		{	
    			datestamp : new Date(),
    			author : author,
    			text : text
    		}
    	);
    	$scope.newMessage = '';
    };

  }]);
