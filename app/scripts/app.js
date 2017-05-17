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
                views: {
                  'header': {
                    templateUrl: 'views/partials/header.html',
                    controller: 'AppCtrl'
                  },
                  'footer': {
                    templateUrl: 'views/partials/footer.html',
                    controller: 'AppCtrl'
                  }
                }
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
            .state('app.writer', {
                url: '/writer',
                views: {
                    'menuContent': {
                        templateUrl: 'views/writer/main.html',
                        controller: 'WriterCtrl'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/app/main');
    })
    .controller('AppCtrl', ['$scope', '$location', '$mdSidenav', '$mdToast', AppCtrl]);

function AppCtrl($scope, $location, $mdSidenav, $mdToast) {
    $scope.goHome = function () {
        $location.path('/app/main');
    };

    $scope.goPage = function () {
        $location.path('/app/page');
    };

    $scope.goWriter = function () {
        $location.path('/app/writer');
    };

    $scope.toggleSidenav = function () {
      $mdSidenav('left').toggle();
    };

    $scope.toastMessage = 'Hello There!';

    $scope.showToast = function (message) {
      var toast = $mdToast.simple()
        .content(message)
        .action('Close')
        .highlightAction(true)
        .position('top right');

        $mdToast.show(toast);
    };
}
