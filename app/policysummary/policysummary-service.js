/**
 * @ngdoc service
 * @name policysummary.policysummaryService
 * @requires $http
 * @requires $q
 * @description
 *
 * - set the model to the service scope
 * - Get data frm /data/help.json file
 *
 */
(function(){
    'use strict';

    angular.module('policysummary').service('policysummaryService', function($http, $q) {

        var helpContent = [];

        this.getHelpContent = function(){
            var deferred = $q.defer();

            if(helpContent.length === 0) {
                $http.get('/data/help.json').success(function (helpData) {
                    helpContent = helpData;
                    deferred.resolve(helpContent);
                });
            }else{
                deferred.resolve(helpContent);
            }

            return deferred.promise;
        };

    });

})();
