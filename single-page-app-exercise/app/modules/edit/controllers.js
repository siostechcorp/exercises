'use strict';

angular.module('singlePageAppExerciseApp')

.controller('EditCtrl', function($scope, $edit, $state, $stateParams, $moment, Restangular, NotificationFactory){

	// Define possible error
	$scope.getError = null;
	$scope.saveError = null;

	// Define edit
	$scope.edit = {

		// Initialize
		init: function(){

			// Get the data item
			$scope.edit.get();

			// Initialize the notification set
			$scope.notifSet = new NotificationFactory({
				position: 'top-right'
			});

		},

        // UI
        ui: {
            showLoader: true,
            showContent: false,
            showError: false
        },

		// Form
		form: {

			// Necessities
			name: null,
			template: $edit.form.template,
			model: {
				master: null,
				edit: null
			},

			// On reset
			onReset: function(){
				$scope.edit.form.model.edit = Restangular.copy($scope.edit.form.model.master);
				$scope.edit.form.name.$setPristine();
			}

		},

		// Get
		get: function(){

			// Make call to json file
			Restangular.one('thingy', $stateParams.itemId).get().then(

				// Success
				function(data){

					// Modify data timeStamp
					data.timeStamp = $moment(data.timeStamp * 1000).toDate();

					// Set data
	                $scope.edit.form.model.master = Restangular.copy(data);
	                $scope.edit.form.model.edit = Restangular.copy(data);

	                // Set UI
	                $scope.edit.ui.showLoader = false;
	                $scope.edit.ui.showContent = true;

				},

				// Fail
				function(error){

                    // Set error
                    $scope.getError = angular.copy(error);

                    // Set UI
                    $scope.edit.ui.showLoader = false;
                    $scope.edit.ui.showError = true;

				}

			);

		},

		// Save
		save: function(){

			// Update timeStamp
			$scope.edit.form.model.edit.timeStamp = $moment().unix();

			// Make call to json file
			$scope.edit.form.model.edit.patch().then(

                // Success
                function(){

                	// Set form to clean
                	$scope.edit.form.name.$setPristine();

                    // Add success notification
                    $scope.notifSet.addNotification({
                        title: 'Thingy success!',
                        content: 'Your thingy has been successfully updated.',
                        color: 'success',
                        autoclose: '3000'
                    });

				},

                // Fail
                function(error){

                    // Set error
                    $scope.saveError = angular.copy(error);

                    // Add success notification
                    $scope.notifSet.addNotification({
                        title: 'Thingy fail!',
                        content: 'Your thingy update failed. Sorry.',
                        color: 'alert',
                        autoclose: '3000'
                    });

				}

            );

		}

	};

	// Initialize edit
	$scope.edit.init();

});