/* jshint -W117, -W030 */
describe('inbox routes', function() {
  describe('state', function() {
    var view = 'app/inbox/inbox.html';

    beforeEach(function() {
      module('app.inbox', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /inbox ', function() {
      expect($state.href('inbox', {})).to.equal('/inbox');
    });

    it('should map /inbox route to inox View template', function() {
      expect($state.get('inbox').templateUrl).to.equal(view);
    });

    it('of inbox should work with $state.go', function() {
      $state.go('inbox');
      expect($state.is('inbox'));
    });
  });
});
