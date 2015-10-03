'use strict';

describe('contentError', function(){

	// Load the app's module
	beforeEach(module('singlePageAppExerciseApp'));
	beforeEach(module('singlePageAppExerciseApp.templates'));

	// Necessities
	var $rootScope, $compile;

	// Initialize necessities
	beforeEach(inject(function(_$rootScope_, _$compile_){
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	it('should replace the element with the appropriate html content', function(){
		var element = $compile('<content-error></content-error>')($rootScope);
		$rootScope.$digest();
		expect(element.html()).toContain('Error Retrieving Information');
	});

});