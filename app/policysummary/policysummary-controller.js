/**
 * @ngdoc property
 * @name policysummary.policysummaryController
 * @requires $scope
 * @requires loadContent
 * @description
 *
 * This is a sample comment for ngdoc
 *
 */
(function(){
    'use strict';

    angular.module('policysummary').controller('policysummaryController', function($scope, loadContent) {

        $scope.helpContentList = loadContent;

    });

})();
