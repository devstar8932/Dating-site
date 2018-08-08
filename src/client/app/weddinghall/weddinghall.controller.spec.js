/* jshint -W117, -W030 */
describe('WeddingHallController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.weddinghall');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('WeddingHallController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('WeddingHall controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of WeddingHall', function() {
        expect(controller.title).to.equal('WeddingHall');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
