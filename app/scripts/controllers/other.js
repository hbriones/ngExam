'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:OtherCtrl
 * @description
 * # OtherCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('OtherCtrl', function($scope) {
  $scope.page = 'Other Page';
  $scope.content = 'This is the content of the other page.'
});
