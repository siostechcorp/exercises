'use strict';

describe('EditCtrl', function(){

	// Load the app's module
	beforeEach(module('singlePageAppExerciseApp'));
	beforeEach(module('singlePageAppExerciseApp.templates'));

	// Necessities
	var scope, $edit, $stateParams, $moment, Restangular, $httpBackend, NotificationFactory, createController;
	$stateParams = { itemId: 0 };

	// Initialize controller and mock the scope
	beforeEach(inject(function($rootScope, $controller, _$edit_, _$moment_, _Restangular_, _$httpBackend_, _NotificationFactory_){
		scope = $rootScope.$new();
		$edit = _$edit_;
		$moment = _$moment_;
		Restangular = _Restangular_
		$httpBackend = _$httpBackend_;
		NotificationFactory = _NotificationFactory_;
		createController = function(){
			return $controller('EditCtrl', {
				'$scope': scope,
				'$stateParams': $stateParams
			});
		};
	}));

	it('should be defined', function(){
		var controller = createController();
		expect(controller).toBeDefined();
	});

	describe('$scope.getError', function(){

		it('should be defined and be null', function(){
			var controller = createController();
			expect(scope.getError).toBeDefined();
			expect(scope.getError).toBeNull();
		});

	});

	describe('$scope.saveError', function(){

		it('should be defined and be null', function(){
			var controller = createController();
			expect(scope.saveError).toBeDefined();
			expect(scope.saveError).toBeNull();
		});

	});

	describe('$scope.edit', function(){

		it('should be defined and be an object', function(){
			var controller = createController();
			expect(scope.edit).toBeDefined();
			expect(angular.isObject(scope.edit)).toBe(true);
		});

		describe('$scope.edit.init', function(){

			beforeEach(function(){
				var controller = createController();
				spyOn(scope.edit, 'init').and.callThrough();
				spyOn(scope.edit, 'get').and.callThrough();
				scope.edit.init();
				scope.notifSet = new NotificationFactory({ position: 'top-right' });
			});

			it('should be defined and be a function', function(){
				expect(scope.edit.init).toBeDefined();
				expect(angular.isFunction(scope.edit.init)).toBe(true);
			});

			it('should have been called', function(){
				expect(scope.edit.init).toHaveBeenCalled();
			});

			it('should have also called the scope.edit.get function and set scope.notifSet', function(){
				expect(scope.edit.get).toHaveBeenCalled();
				expect(scope.notifSet).toBeDefined();
				expect(angular.isFunction(scope.notifSet.addNotification)).toBe(true);
				expect(angular.isFunction(scope.notifSet.clearAll)).toBe(true);
				expect(angular.isFunction(scope.notifSet.destroy)).toBe(true);
			});

		});

        describe('$scope.edit.ui', function(){

            beforeEach(function(){
                var controller = createController();
            });

            it('should be defined and be an object', function(){
                expect(scope.edit.ui).toBeDefined();
                expect(angular.isObject(scope.edit.ui)).toBe(true);
            });

            it('should have a showLoader parameter defined and be true', function(){
                expect(scope.edit.ui.showLoader).toBeDefined();
                expect(scope.edit.ui.showLoader).toBe(true);
            });

            it('should have a showContent parameter defined and be false', function(){
                expect(scope.edit.ui.showContent).toBeDefined();
                expect(scope.edit.ui.showContent).toBe(false);
            });

            it('should have a showError parameter defined and be false', function(){
                expect(scope.edit.ui.showError).toBeDefined();
                expect(scope.edit.ui.showError).toBe(false);
            });

        });

		describe('$scope.edit.form', function(){

			beforeEach(function(){
				var controller = createController();
			});

			it('should have all of the necessities defined', function(){

				expect(scope.edit.form.name).toBeDefined();
				expect(scope.edit.form.name).toBeNull();

				expect(scope.edit.form.template).toBeDefined();
				expect(scope.edit.form.template).toEqual($edit.form.template);

				expect(scope.edit.form.model).toBeDefined();
				expect(angular.isObject(scope.edit.form.model)).toBe(true);

				expect(scope.edit.form.model.master).toBeDefined();
				expect(scope.edit.form.model.master).toBeNull();

				expect(scope.edit.form.model.edit).toBeDefined();
				expect(scope.edit.form.model.edit).toBeNull();

				expect(scope.edit.form.onReset).toBeDefined();
				expect(angular.isFunction(scope.edit.form.onReset)).toBe(true);

			});

		});

		describe('$scope.edit.get', function(){

			beforeEach(function(){

				var controller = createController();

				spyOn(scope.edit, 'init').and.callThrough();
				spyOn(scope.edit, 'get').and.callThrough();
				spyOn(Restangular, 'one').and.callThrough();

			});

			it('should be defined and be a function', function(){
				expect(scope.edit.get).toBeDefined();
				expect(angular.isFunction(scope.edit.get)).toBe(true);
			});

			it('should have been called and then called a Restangular get and handle success or error', function(done){

				var mockToRespond = {
                    'id': 0,
                    'name': 'Samual Adams Boston Lagers',
                    'description': 'Samuel Adams Boston Lager® is the best example of the fundamental characteristics of a great beer, offering a full, rich flavor that is both balanced and complex.',
                    'timeStamp': 1443533486
                };

                $httpBackend.whenGET('http://localhost:3000/thingy/0').respond(mockToRespond);
                $httpBackend.expectGET('http://localhost:3000/thingy/0');

				scope.edit.init();

                expect(scope.edit.get).toHaveBeenCalled();

                Restangular.one('thingy', $stateParams.itemId).get()
                	.then(function(data){

                		spyOn(Restangular, 'stripRestangular').and.callThrough();
                		expect(Restangular.stripRestangular(data)).toEqual(mockToRespond);

                		mockToRespond.timeStamp = $moment(data.timeStamp * 1000).toDate();

                		expect(Restangular.stripRestangular(scope.edit.form.model.master)).toEqual(mockToRespond);
                		expect(Restangular.stripRestangular(scope.edit.form.model.edit)).toEqual(mockToRespond);

                		expect(scope.edit.ui.showLoader).toBe(false);
                		expect(scope.edit.ui.showContent).toBe(true);

                	})
                	.catch(function(error){

                		expect(scope.getError).toEqual(error);

                		expect(scope.edit.ui.showLoader).toBe(false);
                		expect(scope.edit.ui.showError).toBe(true);

                	})
                	.finally(done);

                $httpBackend.flush();

			});

		});

	});

});