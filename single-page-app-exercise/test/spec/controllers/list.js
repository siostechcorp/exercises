'use strict';

describe('ListCtrl', function(){

    // Load the app's module
    beforeEach(module('singlePageAppExerciseApp'));

    // Necessities
    var scope, $moment, $timeout, $window, Restangular, $httpBackend, createController;

    // Initialize controller and mock the scope
    beforeEach(inject(function($rootScope, $controller, _$moment_, _$timeout_, _$window_, _Restangular_, _$httpBackend_){
        scope = $rootScope.$new();
        $moment = _$moment_;
        $timeout = _$timeout_;
        $window = _$window_;
        Restangular = _Restangular_;
        $httpBackend = _$httpBackend_;
        createController = function(){
            return $controller('ListCtrl', {
                '$scope': scope
            });
        };
    }));

    it('should be defined', function(){
        var controller = createController();
        expect(controller).toBeDefined();
    });

    describe('$scope.list', function(){

        it('should be defined and be an object', function(){
            var controller = createController();
            expect(scope.list).toBeDefined();
            expect(angular.isObject(scope.list)).toBe(true);
        });

        describe('$scope.list.init', function(){

            beforeEach(function(){
                var controller = createController();
                spyOn(scope.list, 'init').and.callThrough();
                spyOn(scope.list.get, 'exec').and.callThrough();
                scope.list.init();
            });

            it('should be defined and be a function', function(){
                expect(scope.list.init).toBeDefined();
                expect(angular.isFunction(scope.list.init)).toBe(true);
            });

            it('should have been called', function(){
                expect(scope.list.init).toHaveBeenCalled();
            });

            it('should have also called the scope.list.get.exec function', function(){
                expect(scope.list.get.exec).toHaveBeenCalled();
            });

        });

        describe('$scope.list.ui', function(){

            beforeEach(function(){
                var controller = createController();
            });

            it('should be defined and be an object', function(){
                expect(scope.list.ui).toBeDefined();
                expect(angular.isObject(scope.list.ui)).toBe(true);
            });

            it('should have a showLoader parameter defined and be true', function(){
                expect(scope.list.ui.showLoader).toBeDefined();
                expect(scope.list.ui.showLoader).toBe(true);
            });

            it('should have a showContent parameter defined and be false', function(){
                expect(scope.list.ui.showContent).toBeDefined();
                expect(scope.list.ui.showContent).toBe(false);
            });

            it('should have a showError parameter defined and be false', function(){
                expect(scope.list.ui.showError).toBeDefined();
                expect(scope.list.ui.showError).toBe(false);
            });

        });

        describe('$scope.list.grid', function(){

            beforeEach(function(){
                var controller = createController();
            });

            it('should be defined and be an object', function(){
                expect(scope.list.grid).toBeDefined();
                expect(angular.isObject(scope.list.grid)).toBe(true);
            });

            it('should have a data parameter be defined and be null', function(){
                expect(scope.list.grid.data).toBeDefined();
                expect(scope.list.grid.data).toBeNull();
            });

            it('should have an enableSorting parameter be defined and be true', function(){
                expect(scope.list.grid.enableSorting).toBeDefined();
                expect(scope.list.grid.enableSorting).toBe(true);
            });

            it('should have an enableRowSelection parameter be defined and be true', function(){
                expect(scope.list.grid.enableRowSelection).toBeDefined();
                expect(scope.list.grid.enableRowSelection).toBe(true);
            });

            it('should have an enableRowHeaderSelection parameter be defined and be false', function(){
                expect(scope.list.grid.enableRowHeaderSelection).toBeDefined();
                expect(scope.list.grid.enableRowHeaderSelection).toBe(false);
            });

            it('should have a multiSelect parameter be defined and be false', function(){
                expect(scope.list.grid.multiSelect).toBeDefined();
                expect(scope.list.grid.multiSelect).toBe(false);
            });

            describe('$scope.list.grid.onRegisterApi', function(){

                var gridApi;

                beforeEach(function(){
                    var controller = createController();
                    spyOn(scope.list.grid, 'onRegisterApi').and.callThrough();
                    gridApi = {
                        selection: {
                            on: {
                                rowSelectionChanged: function(a, b){}
                            }
                        }
                    };
                    scope.list.grid.onRegisterApi(gridApi);
                });

                it('should be defined and be a function', function(){
                    expect(scope.list.grid.onRegisterApi).toBeDefined();
                    expect(angular.isFunction(scope.list.grid.onRegisterApi)).toBe(true);
                });

                it('should have been called', function(){
                    expect(scope.list.grid.onRegisterApi).toHaveBeenCalled();
                });

                it('should have created $scope.gridApi and set it to gridApi', function(){
                    expect(scope.gridApi).toBeDefined();
                    expect(scope.gridApi).toEqual(gridApi);
                });

                describe('$scope.gridApi.selection.on.rowSelectionChanged', function(){

                    beforeEach(function(){
                        var controller = createController();
                        spyOn(scope.gridApi.selection.on, 'rowSelectionChanged').and.callThrough();
                        scope.gridApi.selection.on.rowSelectionChanged(scope, scope.list.editItem.init);
                    });

                    it('should be defined and be a function', function(){
                        expect(scope.gridApi.selection.on.rowSelectionChanged).toBeDefined();
                        expect(angular.isFunction(scope.gridApi.selection.on.rowSelectionChanged)).toBe(true);
                    });

                    it('should have been called', function(){
                        expect(scope.gridApi.selection.on.rowSelectionChanged).toHaveBeenCalledWith(scope, scope.list.editItem.init);
                    });

                });

            });

            it('should have a columnDefs parameter be defined and be an array', function(){

                expect(scope.list.grid.columnDefs).toBeDefined();
                expect(angular.isArray(scope.list.grid.columnDefs)).toBe(true);
                expect(scope.list.grid.columnDefs.length === 3).toBe(true);

                expect(angular.isObject(scope.list.grid.columnDefs[0])).toBe(true);
                expect(scope.list.grid.columnDefs[0].name).toEqual('name');
                expect(scope.list.grid.columnDefs[0].field).toEqual('name');

                expect(angular.isObject(scope.list.grid.columnDefs[1])).toBe(true);
                expect(scope.list.grid.columnDefs[1].name).toEqual('description');
                expect(scope.list.grid.columnDefs[1].field).toEqual('description');

                expect(angular.isObject(scope.list.grid.columnDefs[2])).toBe(true);
                expect(scope.list.grid.columnDefs[2].name).toEqual('updated');
                expect(scope.list.grid.columnDefs[2].field).toEqual('timeStamp');
                expect(scope.list.grid.columnDefs[2].cellFilter).toEqual('date:\'MMM dd, yyyy H:mm:ss\'');
                expect(scope.list.grid.columnDefs[2].width).toEqual('25%');

            });

        });

        describe('$scope.list.get', function(){

            beforeEach(function(){
                var controller = createController();
            });

            it('should be defined and be an object', function(){
                expect(scope.list.get).toBeDefined();
                expect(angular.isObject(scope.list.get)).toBe(true);
            });

            describe('$scope.list.get.exec', function(){

                beforeEach(function(){
                    var controller = createController();
                    spyOn(scope.list, 'init').and.callThrough();
                    spyOn(scope.list.get, 'exec').and.callThrough();
                    spyOn(Restangular, 'all').and.callThrough();
                    spyOn(scope.list.get, 'success').and.callThrough();
                    spyOn(scope.list.get, 'fail').and.callThrough();
                    scope.list.init();
                });

                it('should be defined and be a function', function(){
                    expect(scope.list.get.exec).toBeDefined();
                    expect(angular.isFunction(scope.list.get.exec)).toBe(true);
                });

                it('should have been called and then called a Restangular getList, which if success calls $scope.list.get.success with the requested data', function(){

                    expect(scope.list.get.exec).toHaveBeenCalled();

                    var mockToRespond = [
                        {
                            "id": 0,
                            "name": "Samual Adams Boston Lagers",
                            "description": "Samuel Adams Boston Lager® is the best example of the fundamental characteristics of a great beer, offering a full, rich flavor that is both balanced and complex.",
                            "timeStamp": 1443533486
                        },
                        {
                            "id": 1,
                            "name": "Stone Ruination",
                            "description": "So called because of the immediate ruinous effect on your palate. 100+ IBUs. Bracingly bitter. Thick, pungent hop aroma. Sounds tasty.",
                            "timeStamp": 1443673531
                        }
                    ];

                    $httpBackend.when('GET', 'http://localhost:3000/thingy').respond(mockToRespond);
                    expect(Restangular.all).toHaveBeenCalledWith('thingy');

                    $httpBackend.flush();

                    expect(scope.list.get.success).toHaveBeenCalledWith(Restangular.restangularizeElement(mockToRespond));

                });

            });

        });

    });

});