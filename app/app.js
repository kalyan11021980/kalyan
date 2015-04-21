(function(){
    'use strict';

    angular.module('test', ['ui.bootstrap','ui.utils', 'ngRoute', 'ngAnimate', 'restangular', 'angular-loading-bar', 'home', 'policysummary']);
    
    angular.module('test').config(function($routeProvider) {

        /* Add New Routes Above */
        $routeProvider.otherwise({redirectTo:'/home'});

    });
    
    angular.module('test').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

})();
