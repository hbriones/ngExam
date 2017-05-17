'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:WriterCtrl
 * @description
 * # WriterCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('WriterCtrl', function($scope, $mdDialog) {
  $scope.profile = {
    firstname: 'Jigno Alfred',
    lastname: 'Venezuela',
    headline: 'JavaScript Cultist | Web Developer',
  }

  $scope.editIntro = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/writer/edit-intro.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});
