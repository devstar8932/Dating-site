/* jshint -W117, -W030 */
describe('weddinghall routes', function() {
  describe('state', function() {
    var view = 'app/weddinghall/weddinghall.html';

    beforeEach(function() {
      module('app.weddinghall', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /weddinghall ', function() {
      expect($state.href('weddinghall', {})).to.equal('/weddinghall');
    });

    it('should map /weddinghall route to weddinghall View template', function() {
      expect($state.get('weddinghall').templateUrl).to.equal(view);
    });

    it('of weddinghall should work with $state.go', function() {
      $state.go('weddinghall');
      expect($state.is('weddinghall'));
    });
  });
});
