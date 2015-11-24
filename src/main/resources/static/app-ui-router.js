angular.module('myApp').config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state( 'main', {
        url: '/main',
        templateUrl: 'modules/main/main.html',
        controller: 'mainCtrl'
    })

    .state( 'login', {
        url: '/login',
        templateUrl: 'modules/login/login.html',
        controller: 'loginCtrl'
    })

    .state( 'p2', {
        url: '/p2',
        templateUrl: 'modules/p2/p2.html',
        controller: 'p2Ctrl'
    });

}]);