'use strict';

angular.module('eTrade')
.controller('UsersCtrl', function($scope, $state, $window, User){
  $scope.name = $state.current.name;

  $scope.oauth = function(provider){
    User.oauth(provider);
  };

  $scope.anonLogin = function(){
    User.anonLogin();
  };

  $scope.submit = function(user){
    if($scope.name === 'register'){
      User.register(user)
      .then(function(){
        $state.go('login');
      })
      .catch(function(){
        $window.swal({title: 'Registration Error', text: 'There was a problem with your registration. Please try again.', type: 'error'});
      });
    }else{
      User.login(user)
      .catch(function(){
        $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
      });
    }
  };
});
