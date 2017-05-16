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
  $scope.editIntro = function () {
    $scope.templatePath = 'edit-intro.html';
    $scope.intro = true;
  }
});
