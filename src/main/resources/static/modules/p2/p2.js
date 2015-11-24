'use strict';

var p2Module = angular.module('myApp.p2', []);

p2Module.controller('p2Ctrl', ['$scope', '$http', 
    function ($scope, $http) {

    $scope.var1 = '(P2) World';
}]);


