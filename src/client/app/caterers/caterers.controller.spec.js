/* jshint -W117, -W030 */
describe('CaterersController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.caterers');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('CaterersController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Caterers controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Caterers', function() {
        expect(controller.title).to.equal('Caterers');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
