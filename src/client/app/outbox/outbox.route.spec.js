/* jshint -W117, -W030 */
describe('outbox routes', function() {
  describe('state', function() {
    var view = 'app/outbox/outbox.html';

    beforeEach(function() {
      module('app.outbox', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /outbox ', function() {
      expect($state.href('outbox', {})).to.equal('/outbox');
    });

    it('should map /outbox route to inox View template', function() {
      expect($state.get('outbox').templateUrl).to.equal(view);
    });

    it('of outbox should work with $state.go', function() {
      $state.go('outbox');
       expect($state.is('outbox'));
    });
  });
});
