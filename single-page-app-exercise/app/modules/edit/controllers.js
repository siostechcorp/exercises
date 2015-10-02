'use strict';

singlePageAppExerciseApp.controller('EditCtrl', function($scope, $edit, $state, $stateParams, $moment, Restangular, NotificationFactory){

	// Define possible error
	$scope.getError = null;
	$scope.saveError = null;

	// Notification set
	var notifSet;

	// Define edit
	$scope.edit = {

		// Initialize
		init: function(){

			// Get the data item
			$scope.edit.get.exec();

			// Initialize the notification set
			notifSet = new NotificationFactory({
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
		get: {

			// Execute
			exec: function(){

				// Make call to json file
				Restangular.one('thingy', $stateParams.itemId).get().then(function(data){
					$scope.edit.get.success(data);
				}, function(error){
					$scope.edit.get.fail(error);
				});

			},

			// Success
			success: function(data){

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
			fail: function(error){

                // Set error
                $scope.getError = angular.copy(error);

                // Set UI
                $scope.edit.ui.showLoader = false;
                $scope.edit.ui.showError = true;

            }

		},

		// Save
		save: {

			// Execute
			exec: function(){

				// Update timeStamp
				$scope.edit.form.model.edit.timeStamp = $moment().unix();

				// Make call to json file
				$scope.edit.form.model.edit.patch().then(function(){
					$scope.edit.save.success();
				}, function(error){
					$scope.edit.save.fail(error);
				});

			},

			// Success
			success: function(){

				// Add success notification
				notifSet.addNotification({
					title: 'Thingy success!',
					content: 'Your thingy has been successfully updated.',
					color: 'success',
					autoclose: '3000'
				});

			},

			// Fail
			fail: function(error){

				// Set error
				$scope.saveError = angular.copy(error);

				// Add success notification
				notifSet.addNotification({
					title: 'Thingy fail!',
					content: 'Your thingy update failed. Sorry.',
					color: 'alert',
					autoclose: '3000'
				});

			}

		}

	};

	// Initialize edit
	$scope.edit.init();

});