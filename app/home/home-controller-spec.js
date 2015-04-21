
(function(){

    describe('homeController', function() {

    beforeEach(module('home'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('homeController', {$scope: scope});
    }));    

    it('should ...', inject(function() {

        expect(1).toEqual(1);
        
    }));

});

})();