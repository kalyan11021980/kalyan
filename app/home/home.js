/**
 * @ngdoc object
 * @name home
 * @requires $routeprovider
 * @description
 *
 *  - This is the main home module
 *  - Loads all the submodule
 *  - Define routes via routeprovider
 *
 */
(function(){
    'use strict';


    angular.module('home', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'restangular']);
    
    angular.module('home').config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'home/home-template.html',
            controller: 'homeController'
        });
        /* Add New Routes Above */

    });
    

})();
