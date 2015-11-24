'use strict';

var loginModule = angular.module('myApp.login', []);

loginModule.controller('loginCtrl', ['$scope', '$http', '$state', 'GlobalVariables',
    function ($scope, $http, $state, GlobalVariables) {

    $scope.username = '';
    $scope.password = '';
    $scope.login = function() {
        if ($scope.username==null || $scope.username=='') {
            return;
        }
        if ($scope.password==null || $scope.password=='') {
            return;
        }
        var authReq = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post( '/rest/api/login', authReq)
        .then(function (result) {

            if ( result.data.token!=null ) {
                GlobalVariables.authToken = result.data.token;
                $state.go( 'main', {}, {reload: true});
            }

        }, function (err) {
            console.log(err);
        });
    }
}]);

