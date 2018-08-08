/* jshint -W117, -W030 */
describe('AccountController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.account');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('AccountController');
   
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Account controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Account', function() {
        expect(controller.title).to.equal('Account');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
