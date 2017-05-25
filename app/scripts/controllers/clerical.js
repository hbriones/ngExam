'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:ClericalCtrl
 * @description
 * # ClericalCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('ClericalCtrl', function($scope) {
  $scope.exams = [{
    title: 'Data Checking',
    url: 'http://aptitude-test.com/fla/datachecking.swf',
    desc: 'You are presented with two addresses or invoices. You have to determine whether the two displayed addresses or invoices are exactly the same or different',
    'time': '2 mins'
  }, {
    title: 'Workload and Concentration',
    url: 'http://aptitude-test.com/fla/workload.swf',
    desc: 'You are to answer what may seem like short and simple questions.',
    'time': '2 mins'
  }, {
    title: 'Attention to Detail',
    url: 'http://aptitude-test.com/fla/attention.swf',
    desc: 'You are presented with three names, numbers, or addresses. You have to determine whether one of these are different from the other two, or if there is no difference between the three.',
    'time': '3 mins'
  }, {
    title: 'Alphabetical and Numerical Filing',
    url: 'http://aptitude-test.com/fla/filing.swf',
    desc: 'You are first to sort names and company names according to alphabetic filing, later you are to sort numerical sequences according to numerical filing.',
    'time': '3 mins'
  }];
});
