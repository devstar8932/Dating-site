/* jshint -W117, -W030 */
describe('EventsController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.events');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('EventsController');
   
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('events controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of events', function() {
        expect(controller.title).to.equal('events');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
