/* jshint -W117, -W030 */
describe('ViewProfileController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.viewprofile');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('ViewProfileController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('ViewProfile controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Home', function() {
        expect(controller.title).to.equal('ViewProfile');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
