'use strict';

angular.module('singlePageAppExerciseApp')

.directive('footer', function(){
	return {
		restrict: 'E',
		templateUrl: 'components/footer/templates/footer.html',
		replace: true
	};
});