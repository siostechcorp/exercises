'use strict';

/**
 * @ngdoc function
 * @name singlePageAppExerciseApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the singlePageAppExerciseApp
 */
angular.module('singlePageAppExerciseApp')
  .controller('EditCtrl', function ($scope, $location, Restangular) {
    var data = Restangular.one('data', $location.path().slice(1));

    data.get().then(function(dataItem) {
      $scope.data = dataItem;
    });

    $scope.edit = function() {
      // should only provide the data that's been changed, refactor later
      data.patch($scope.data).then(function() {;
        $location.path('/');
      });
    }
  });
