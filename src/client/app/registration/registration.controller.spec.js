/* jshint -W117, -W030 */
describe('RegistrationController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.registration');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('RegistrationController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Registration controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Registration', function() {
        expect(controller.title).to.equal('Registration');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
