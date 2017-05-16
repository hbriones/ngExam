'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:WriterCtrl
 * @description
 * # WriterCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('WriterCtrl', function($scope) {
  $scope.page = 'Other Page';
  $scope.content = 'This is the content of the other page.'
});
