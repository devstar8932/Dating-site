/* jshint -W117, -W030 */
describe('aboutUs routes', function() {
  describe('state', function() {
    var view = 'app/aboutUs/aboutUs.html';

    beforeEach(function() {
      module('app.aboutUs', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /aboutUs ', function() {
      expect($state.href('aboutUs', {})).to.equal('/aboutUs');
    });

    it('should map /aboutUs route to aboutUs View template', function() {
      expect($state.get('aboutUs').templateUrl).to.equal(view);
    });

    it('of aboutUs should work with $state.go', function() {
      $state.go('aboutUs');
      $rootScope.$apply();
      expect($state.is('aboutUs'));
    });
  });
});
