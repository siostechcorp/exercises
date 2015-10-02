'use strict';

angular.module('singlePageAppExerciseApp')

.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched URL, reroute to /
    $urlRouterProvider.otherwise('/');

    // State configuration
    $stateProvider
        // List
        .state('list', {
            url: '/',
            templateProvider: function($templateCache){ return $templateCache.get('modules/list/templates/list.html'); },
            controller: 'ListCtrl'
        })
        // Edit
        .state('edit', {
            url: '/edit/:itemId',
            templateProvider: function($templateCache){ return $templateCache.get('modules/edit/templates/edit.html'); },
            controller: 'EditCtrl'
        });

});