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
    location: ''
  }

  $scope.experience = []

  $scope.education = []

  $scope.skills = []

  $scope.viewed = [
    {
      name: 'Jigno Alfred V. Venezuela',
      headline: 'CEO of Misc Stuff at Imaginary Company',
      connection: '1st'
    }, {
      name: 'Rommel Lagurin',
      headline: 'Bubbles of Powerpuff Girls',
      connection: '1st'
    }, {
      name: 'Hyacinth Briones',
      headline: 'Blossom of Powerpuff Girls',
      connection: '1st'
    }
  ]

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

  function IntroCtrl($scope, $mdDialog) {
    $scope.save = function() {
      $scope.profile.work = $scope.work;
      $scope.profile.school = $scope.school;
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.hide();
    };
  }

$scope.addExperience = function(ev) {
  $mdDialog.show({
    controller: AddExperienceCtrl,
    templateUrl: 'views/writer/profile-experience-add.html',
    parent: angular.element(document.body),
    scope: $scope,
    preserveScope: true,
    targetEvent: ev,
    clickOutsideToClose: true,
    fullscreen: $scope.customFullscreen,
  })
};

function AddExperienceCtrl($scope, $mdDialog) {
  $scope.add = function() {
    $scope.experience.push({
      name: $scope.company.name || '',
      location: $scope.company.location || '',
      title: $scope.company.title || '',
      startdate: $scope.company.startdate || '',
      enddate: $scope.company.enddate || '',
      duration: $scope.company.duration || '',
      description: $scope.company.description || '',
    })

    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.hide();
  };
}

  $scope.editExperience = function(ev, data, index) {
    $mdDialog.show({
      controller: EditExperienceCtrl,
      templateUrl: 'views/writer/profile-experience-edit.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen,
      resolve: {
        company: function () {
          return data;
        }
      }
    })
  };

  function EditExperienceCtrl($scope, $mdDialog, company) {
    $scope.company = company;

    $scope.save = function() {
      $mdDialog.hide();
    };

    $scope.delete = function(company) {
      $scope.experience.splice($scope.experience.indexOf(company), 1);
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.hide();
    };
  }

  $scope.addEducation = function(ev) {
    $mdDialog.show({
      controller: AddEducationCtrl,
      templateUrl: 'views/writer/profile-education-add.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  function AddEducationCtrl($scope, $mdDialog) {
    $scope.save = function() {
      $scope.education.push({
        name: $scope.school.name || '',
        degree: $scope.school.degree || '',
        field: $scope.school.field || '',
        grade: $scope.school.grade || '',
        activities: $scope.school.activities || '',
        startdate: $scope.school.startdate || '',
        enddate: $scope.school.enddate || '',
        description: $scope.school.description || '',
      })

      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.hide();
    };
  }

  $scope.editEducation = function(ev, data) {
    $mdDialog.show({
      controller: EditEducationCtrl,
      templateUrl: 'views/writer/profile-education-edit.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen,
      resolve: {
        school: function () {
          return data;
        }
      }
    })
  };

  function EditEducationCtrl($scope, $mdDialog, school) {
    $scope.school = school;

    $scope.save = function() {
      $mdDialog.hide();
    };

    $scope.delete = function(school) {
      $scope.education.splice($scope.education.indexOf(school), 1)
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.hide();
    };
  }

  $scope.addSkills = function(ev) {
    $mdDialog.show({
      controller: AddSkillsCtrl,
      templateUrl: 'views/writer/profile-skills-add.html',
      parent: angular.element(document.body),
      scope: $scope,
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen
    })
  };

  function AddSkillsCtrl($scope, $mdDialog) {
    $scope.add = function() {
      $scope.skills.push($scope.modalSkills);
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.hide();
    };
  }

  $scope.deleteSkill = function(skill) {
    $scope.skills.splice($scope.skills.indexOf(skill), 1)
  }
});
