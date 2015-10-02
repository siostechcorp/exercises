'use strict';

// Configure angular loading bar
singlePageAppExerciseApp.config(function(cfpLoadingBarProvider){
    cfpLoadingBarProvider.includeSpinner = false;
});

// Configure IE fix for form handling
singlePageAppExerciseApp.config(['$provide', function($provide){
    $provide.decorator('$sniffer', ['$delegate', function($sniffer){
        var msie = angular.lowercase(navigator.userAgent).indexOf('trident') > -1 || angular.lowercase(navigator.userAgent).indexOf('msie') > -1;
        var _hasEvent = $sniffer.hasEvent;
        $sniffer.hasEvent = function(event){
            if(event === 'input' && msie){ return false; }
            _hasEvent.call(this, event);
        };
        return $sniffer;
    }]);
}]);

// Configure Restangular
singlePageAppExerciseApp.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://localhost:3000/');
});

// Configure material design theme
singlePageAppExerciseApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('red');
});