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
    firstname: 'Devon',
    lastname: 'Sloan',
    headline: '',
    summary: '',
    work: '',
    school: '',
    location: '',
  }

  $scope.experience = [
    {
      name: 'Big Outsource',
      location: '',
      title: 'IT',
      startdate: '',
      duration: '',
      description: ''
    }
  ]

  $scope.education = [
    {
      name: 'Harvard',
      degree: '',
      field: '',
      grade: '',
      activities: '',
      startdate: '',
      enddate: '',
      description: '',
    }
  ]

  $scope.skills = []

  $scope.viewed = [{
    name: 'Jigno Alfred V. Venezuela',
    headline: 'VP of Misc Stuff at Imaginary Company',
    connection: '1st',
  }, {
    name: 'Rommel Lagurin',
    headline: 'Bubbles of Powerpuff Girls',
    connection: '1st',
  }, {
    name: 'Hyacinth Briones',
    headline: 'Blossom of Powerpuff Girls',
    connection: '1st',
  }]

  $scope.editIntro = function(ev) {
    $mdDialog.show({
      controller: IntroCtrl,
      templateUrl: 'views/writer/profile-intro.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  $scope.addExperience = function(ev) {
    $mdDialog.show({
      controller: ExperienceCtrl,
      templateUrl: 'views/writer/profile-experience-add.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  $scope.editExperience = function(ev) {
    $mdDialog.show({
      controller: ExperienceCtrl,
      templateUrl: 'views/writer/profile-experience-edit.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  $scope.addEducation = function(ev) {
    $mdDialog.show({
      controller: EducationCtrl,
      templateUrl: 'views/writer/profile-education-add.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  $scope.editEducation = function(ev) {
    $mdDialog.show({
      controller: EducationCtrl,
      templateUrl: 'views/writer/profile-education-edit.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  $scope.addSkills = function(ev) {
    $mdDialog.show({
      controller: SkillsCtrl,
      templateUrl: 'views/writer/profile-skills-add.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  $scope.editSkills = function(ev) {
    $mdDialog.show({
      controller: SkillsCtrl,
      templateUrl: 'views/writer/profile-skills-edit.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  function IntroCtrl($scope, $mdDialog) {
    $scope.save = function() {
      $scope.profile.work = $scope.work;
      $scope.profile.school = $scope.school;
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  function ExperienceCtrl($scope, $mdDialog) {
    $scope.save = function() {

      $mdDialog.hide();
    };

    $scope.delete = function() {

      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  function EducationCtrl($scope, $mdDialog) {
    $scope.save = function() {

      $mdDialog.hide();
    };

    $scope.delete = function() {

      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }

  function SkillsCtrl($scope, $mdDialog) {
    $scope.save = function() {

      $mdDialog.hide();
    };

    $scope.delete = function() {

      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});
