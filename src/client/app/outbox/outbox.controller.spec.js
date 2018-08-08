/* jshint -W117, -W030 */
describe('OutboxController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.outbox');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('OutboxController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Outbox Controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Outbox', function() {
        expect(controller.title).to.equal('Inbox');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
