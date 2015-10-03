'use strict';

angular.module('singlePageAppExerciseApp')

.controller('ListCtrl', function($scope, $moment, $timeout, $window, Restangular){

    // Define possible error
    $scope.error = null;

    // Define list
    $scope.list = {

        // Initialize
        init: function(){

            // Get the list data
            $scope.list.get();

        },

        // UI
        ui: {
            showLoader: true,
            showContent: false,
            showError: false
        },

        // Grid
        grid: {
            data: null,
            enableSorting: true,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            onRegisterApi: function(gridApi){
                $scope.gridApi = gridApi;
                $scope.gridApi.selection.on.rowSelectionChanged($scope, $scope.list.editItem.init);
            },
            columnDefs: [
                { name: 'name', field: 'name' },
                { name: 'description', field: 'description' },
                { name: 'updated', field: 'timeStamp', cellFilter: 'date:\'MMM dd, yyyy H:mm:ss\'', width: '25%' }
            ]
        },

        // Get
        get: function(){

            // Make call to json file
            Restangular.all('thingy').getList().then(

                // Success
                function(data){

                    // Modify data timeStamps
                    angular.forEach(data, function(item){
                        item.timeStamp = $moment(item.timeStamp * 1000).toDate();
                    });

                    // Set data
                    $scope.list.grid.data = Restangular.copy(data);

                    // Set UI
                    $scope.list.ui.showLoader = false;
                    $scope.list.ui.showContent = true;

                    // Fix ui-grid layout issue
                    $timeout(function(){
                        $(window).resize();
                        $(window).resize();
                    },100);

                },

                // Fail
                function(error){

                    // Set error
                    $scope.error = angular.copy(error);

                    // Set UI
                    $scope.list.ui.showLoader = false;
                    $scope.list.ui.showError = true;

                }

            );

        },

        // Edit item
        editItem: {

            // Data
            data: null,

            // Show button
            showButton: false,

            // Initialize
            init: function(rowItem){
                if(rowItem.isSelected){

                    // Set data
                    $scope.list.editItem.data = rowItem.entity;

                    // Show button
                    $scope.list.editItem.showButton = true;

                }
                else{

                    // Set data
                    $scope.list.editItem.data = null;

                    // Show button
                    $scope.list.editItem.showButton = false;

                }
            }

        }

    };

    // Initialize list
    $scope.list.init();

});