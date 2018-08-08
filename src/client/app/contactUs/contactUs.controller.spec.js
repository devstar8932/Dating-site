/* jshint -W117, -W030 */
describe('ContactUsController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.contactUs');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('ContactUsController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('ContactUs controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of ContactUs', function() {
        expect(controller.title).to.equal('ContactUs');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
