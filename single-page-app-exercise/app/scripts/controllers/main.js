'use strict';

/**
 * @ngdoc function
 * @name singlePageAppExerciseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the singlePageAppExerciseApp
 */
angular.module('singlePageAppExerciseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
