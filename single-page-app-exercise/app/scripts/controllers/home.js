'use strict';

/**
 * @ngdoc function
 * @name singlePageAppExerciseApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the singlePageAppExerciseApp
 */
angular.module('singlePageAppExerciseApp')
  .controller('HomeCtrl', function ($scope, Restangular) {

    var data = Restangular.all('data');

    data.getList().then(function(dataList) {
      $scope.gridData = dataList;
    });

    $scope.selectedItemId = function() {
      var selectedItem = $scope.gridOptions.selectedItems[0];
      return selectedItem ? selectedItem.id : 0;
    };

    $scope.gridOptions = {
      multiSelect: false,
      selectedItems: [],
      keepLastSelected: false,
      columnDefs: [{
        field: 'name',
        displayName: 'Name'
      }, {
        field: 'description',
        displayName: 'Description'
      }],
      data: 'gridData'
    };
  });
