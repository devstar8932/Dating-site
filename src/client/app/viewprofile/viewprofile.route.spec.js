/* jshint -W117, -W030 */
describe('viewprofile routes', function() {
  describe('state', function() {
    var view = 'app/viewprofile/viewprofile.html';

    beforeEach(function() {
      module('app.viewprofile', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /viewprofile ', function() {
      expect($state.href('viewprofile', {})).to.equal('/viewprofile');
    });

    it('should map /viewprofile route to profile View template', function() {
      expect($state.get('viewprofile').templateUrl).to.equal(view);
    });

    it('of view viewprofile should work with $state.go', function() {
      $state.go('viewprofile');
      expect($state.is('viewprofile'));
    });
  });
});
