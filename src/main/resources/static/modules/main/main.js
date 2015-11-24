'use strict';

var mainModule = angular.module('myApp.main', []);

mainModule.controller('mainCtrl', ['$scope', '$http', '$state', 'GlobalVariables',
    function ($scope, $http, $state, GlobalVariables) {

    if ( GlobalVariables.authToken==null || GlobalVariables.authToken=='' ) {
        $state.go( 'login', {}, {reload: true});
    }
    else {
        $http({method: 'GET', url: '/rest/api/mt' })
        .then(function (result) {
            console.dir( result.data );
            $scope.var1 = result.data[0].author;
        }, function (err) {
            console.log(err);
        });
    }
}]);


