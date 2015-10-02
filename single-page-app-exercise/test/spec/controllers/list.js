'use strict';

describe('ListCtrl', function(){

    // Load the app's module
    beforeEach(angular.mock.module('singlePageAppExerciseApp'));

    // Necessities
    var scope, $moment, $timeout, $window, Restangular, createController;

    // Initialize controller and mock the scope
    beforeEach(inject(function($rootScope, $controller, _$moment_, _$timeout_, _$window_, _Restangular_){
        scope = $rootScope.$new();
        $moment = _$moment_;
        $timeout = _$timeout_;
        $window = _$window_;
        Restangular = _Restangular_;
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

});