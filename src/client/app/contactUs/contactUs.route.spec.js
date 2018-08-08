/* jshint -W117, -W030 */
describe('contactUs routes', function() {
  describe('state', function() {
    var view = 'app/contactUs/contactUs.html';

    beforeEach(function() {
      module('app.contactUs', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /contactUs ', function() {
      expect($state.href('contactUs', {})).to.equal('/contactUs');
    });

    it('should map /contactUs route to contactUs View template', function() {
      expect($state.get('contactUs').templateUrl).to.equal(view);
    });

    it('of contactUs should work with $state.go', function() {
      $state.go('contactUs');
      $rootScope.$apply();
      expect($state.is('contactUs'));
    });
  });
});
