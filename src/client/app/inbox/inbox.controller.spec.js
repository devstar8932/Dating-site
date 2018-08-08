/* jshint -W117, -W030 */
describe('InboxController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.inbox');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('InboxController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Inbox Controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Inbox', function() {
        expect(controller.title).to.equal('Inbox');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
