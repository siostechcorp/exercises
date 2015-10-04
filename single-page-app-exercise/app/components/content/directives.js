'use strict';

angular.module('singlePageAppExerciseApp')

.directive('contentError', function(){
    return {
        restrict: 'E',
        templateUrl: 'components/content/templates/error.html',
        replace: true
    };
})

.directive('contentLoader', function(){
    return {
        restrict: 'E',
        templateUrl: 'components/content/templates/loader.html',
        replace: true
    };
});