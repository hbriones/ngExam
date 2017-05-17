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
    summary: 'Web Developer'
  }

  $scope.experience = [
    {
      name: 'Big Outsource',
      location: 'San Pablo City, Laguna',
      title: 'IT Associate',
      startdate: '',
      duration: '',
      description: ''
    }, {
      name: 'Telus',
      location: 'Quezon City',
      title: 'Tech Support',
      enddate: '',
      duration: '',
      description: ''
    }
  ]

  $scope.education = [
    {
      name: 'First Asia Institute of Technology and Humanities',
      degree: 'Bachelor of Science - BS',
      field: 'Computer Science',
      grade: '',
      activities: '',
      startdate: 'May 2017',
      enddate: 'June 2017',
      description: '',
    }, {
      name: 'De La Salle Lipa',
      degree: '',
      field: 'Computer Engineering',
      grade: '',
      activities: '',
      startdate: '',
      enddate: '',
      description: '',
    }
  ]

  $scope.skills = [
    'Node.js',
    'Angular.js',
    'JavaScript'
  ]

  $scope.viewed = [{
    name: 'Jigno Alfred V. Venezuela',
    headline: 'VP of Misc Stuff at Imaginary Company',
    connection: '1st',
  }, {
    name: 'Rommel Lagurin',
    headline: 'Bubbles of Powerpuff Girls',
    connection: '1st',
  }]

  $scope.editIntro = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/writer/profile-intro.html',
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
