/* jshint -W117, -W030 */
describe('AboutUsController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.aboutUs');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('AboutUsController');
   
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('AboutUs controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of AboutUs', function() {
        expect(controller.title).to.equal('AboutUs');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
