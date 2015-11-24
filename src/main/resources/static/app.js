'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ui.bootstrap',
    'ui.router',
    'myApp.mainPage',
    'myApp.mainSidebar',
    'myApp.main',
    'myApp.login',
    'myApp.p2'
]);

myApp.factory('GlobalVariables', function() {
	return {
		loginUrl : '/login',
		authToken : ''
	};
});

myApp.factory("tokenInterceptor", ["$q", "GlobalVariables", function ($q, GlobalVariables) {
	return {
		"request": function ($config) {
			if ( GlobalVariables.authToken!=null && GlobalVariables.authToken!='' ) {
				$config.headers['X-AUTH-TOKEN'] = GlobalVariables.authToken;
				return $config;
			}
			else {
				//window.location.href = '/login';
			}
			return $config;
		}
	};
}]);

myApp.config(['$httpProvider', function ($httpProvider) {
	$httpProvider.interceptors.push('tokenInterceptor');
}]);

var mainPageModule = angular.module('myApp.mainPage', []);
mainPageModule.controller('mainPageCtrl', ['$scope', function ($scope) {


}]);

var mainSidebarModule = angular.module('myApp.mainSidebar', []);
mainSidebarModule.controller('mainSidebarCtrl', ['$scope', '$rootScope', '$http', '$location', 
    function ($scope, $rootScope, $http, $location) {

        $scope.m1Collapsed = false;
        $scope.m4Collapsed = true;

        $scope.init = function () {
        };
        $scope.init();
}]);
