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
    var author = 'Me';
    
    $scope.messages = [
		{text: 'Message 1', datestamp: new Date(), author: 'Misko'},
		{text: 'Message from Yo', datestamp: new Date(), author: 'Tom'}
    ];

    $scope.users = [
    	{username: 'Misko', img:''},
    	{username: 'Vojta', img:''},
    	{username: 'Tom', img:''},		
    ];

    $scope.addMessage = function(){
    	if (!$scope.newMessage) { return; }
    	$scope.messages.push(
    		{	
    			datestamp : new Date(),
    			author : author,
    			text : $scope.newMessage
    		}
    	);
    	$scope.newMessage = '';
    };
  });
