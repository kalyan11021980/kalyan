/**
 * @ngdoc property
 * @name home.homeController
 * @requires $scope
 * @requires homeService
 * @description
 *
 *  - set the model on controller scope
 *  - get message from homeservice
 *
 */
(function(){
    'use strict';


    angular.module('home').controller('homeController', function($scope, homeService) {

        // get message from service
        $scope.message = homeService.getMessage();

    });

})();
