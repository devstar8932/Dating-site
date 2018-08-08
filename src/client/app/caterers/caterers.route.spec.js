/* jshint -W117, -W030 */
describe('caterers routes', function() {
  describe('state', function() {
    var view = 'app/caterers/caterers.html';

    beforeEach(function() {
      module('app.caterers', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /caterers ', function() {
      expect($state.href('caterers', {})).to.equal('/caterers');
    });

    it('should map /caterers route to caterers View template', function() {
      expect($state.get('caterers').templateUrl).to.equal(view);
    });

    it('of caterers should work with $state.go', function() {
      $state.go('caterers');
       expect($state.is('caterers'));
    });
  });
});
