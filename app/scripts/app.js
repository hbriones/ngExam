'use strict';

/**
 * @ngdoc overview
 * @name ngmaterialApp
 * @description
 * # ngmaterialApp
 *
 * Main module of the application.
 */
angular
    .module('ngmaterialApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ui.router',
        'ngMdIcons',
    ])
    .config(
    function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'views/menu.html',
                controller: 'AppCtrl'
            })
            .state('app.main', {
                url: '/main',
                views: {
                    'menuContent': {
                        templateUrl: 'views/main.html',
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('app.page', {
                url: '/page',
                views: {
                    'menuContent': {
                        templateUrl: 'views/page.html',
                        controller: 'PageCtrl'
                    }
                }
            })
        ;

        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/app/main');
    })
    .controller('AppCtrl', ['$scope', '$mdSidenav', '$location', AppCtrl]);

function AppCtrl($scope, $mdSidenav, $location) {
    $scope.goHome = function () {
        $location.path('/app/main');
    };

    $scope.goPage = function () {
        $location.path('/app/page');
    };

    $scope.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    };
}
