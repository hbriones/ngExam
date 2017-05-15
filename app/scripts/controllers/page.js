'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:PageCtrl
 * @description
 * # PageCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp').controller('PageCtrl', function($scope) {
  $scope.page = 'Page 1';
  $scope.content = 'This is the content of page 1.'
});
