'use strict';

/**
 * @ngdoc function
 * @name firebaseAngularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseAngularDemoApp
 */
angular.module('firebaseAngularDemoApp')
  .controller('MainCtrl', [ '$scope', '$firebase', 
  	function ($scope, $firebase) {
		
    var refMessages = new Firebase('https://crackling-fire-2244.firebaseio.com/messages');
    var refUsers = new Firebase('https://crackling-fire-2244.firebaseio.com/users');
    var currentUser;

    var syncMessages = $firebase(refMessages);
    var syncUsers = $firebase(refUsers);

    $scope.messages = syncMessages.$asArray();
    $scope.users = syncUsers.$asArray();

    $scope.saveUser = function(){
			if (currentUser) {
				updateUser(currentUser, $scope.author);
			} else {
				currentUser = createUser($scope.author);
				$scope.currUserId = currentUser.key();
			}
    };

    $scope.isCurrentUser = function(id){
    	return id === $scope.currUserId;
    };

    $scope.addMessage = function(text){
    	if (!$scope.newMessage) { return; }
    	if (!$scope.author) { window.alert('Enter user name!'); return;}
    	var datestamp = new Date();
    	$scope.messages.$add(
    		{	
    			datestamp : datestamp.valueOf(),
    			author : $scope.author,
    			text : text
    		}
    	);
    	$scope.newMessage = '';
    };

    $scope.keyDownMsg = function(e){
    	if (e.keyCode === 13 && $scope.newMessage) {
    		$scope.addMessage($scope.newMessage);
    	}
  	};

  	function createUser (name){
    	return refUsers.push({username: name});
    }

    function updateUser (userRef, name) {
    	userRef.update({username : name });
    }

  }]);
