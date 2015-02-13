'use strict';

/**
 * @ngdoc function
 * @name singlePageAppExerciseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the singlePageAppExerciseApp
 */
angular.module('singlePageAppExerciseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
