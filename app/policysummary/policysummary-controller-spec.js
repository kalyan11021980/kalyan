
(function(){

    describe('policysummaryController', function() {

    beforeEach(module('policysummary'));

    var scope,ctrl,loadContent;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('policysummaryController', {$scope: scope, loadContent: {}});
    }));    

    it('should ...', inject(function() {

        expect(1).toEqual(1);
        
    }));

});

})();
