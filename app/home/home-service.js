/**
 * @ngdoc service
 * @name home.homeService
 * @requires $http
 * @requires $q
 * @description
 *
 *  - set the model to the service scope
 *  - method added to pass static message to home page
 *
 */
(function(){
    'use strict';

    angular.module('home').service('homeService', function($http, $q) {

        var message = '';

        this.getMessage = function(){
            if(message === ''){
                message = 'Congratulations! Your app is fully up and running.';
            }

            return message;
        };

    });

})();
