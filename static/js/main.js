var randomQuoteApp = angular.module('RandomQuoteGenerator',[]);
/**
 * Override angular delimiter notation  to use alongside jinja temp
 * Notation - {@ ang_var @}
 **/
randomQuoteApp.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{@');
    $interpolateProvider.endSymbol('@}');
}]);


randomQuoteApp.controller('QuotesController', ['$http', '$scope', '$log', function($http, $scope, $log) {
    $scope.getNewQuote = function() {
        $http.post('/newQuote').
        success(function(results) {
          //get random new quote from controller
            console.log(results);
            $scope.quotes = results;
        }).
        error(function(error) {
            $log.log(error);
        });
    }
}]);
