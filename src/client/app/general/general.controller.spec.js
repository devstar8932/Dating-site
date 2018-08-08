/* jshint -W117, -W030 */
describe('GeneralController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.general');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('GeneralController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('General controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of general', function() {
        expect(controller.title).to.equal('General');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
