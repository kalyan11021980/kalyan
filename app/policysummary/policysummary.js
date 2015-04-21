/**
 * @ngdoc object
 * @name policysummary
 * @requires $routeprovider
 * @description
 *
 *  - This is the main policysummary module
 *  - Loads all the submodule
 *  - Define routes via routeprovider
 *
 */
(function(){
    'use strict';

    angular.module('policysummary', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'restangular']);
    
    angular.module('policysummary').config(function($routeProvider) {

        $routeProvider.when('/policysummary', {
            templateUrl: 'policysummary/policysummary.html',
            controller: 'policysummaryController',
            resolve: {
                loadContent: function( policysummaryService ){
                    return policysummaryService.getHelpContent();
                }
            }
        });
        /* Add New Routes Above */

    });
    

})();
