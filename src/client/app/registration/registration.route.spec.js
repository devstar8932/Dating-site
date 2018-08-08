/* jshint -W117, -W030 */
describe('registration routes', function() {
  describe('state', function() {
    var view = 'app/registration/registration.html';

    beforeEach(function() {
      module('app.registration', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /registration ', function() {
      expect($state.href('registration', {})).to.equal('/registration');
    });

    it('should map /registration route to registration View template', function() {
      expect($state.get('registration').templateUrl).to.equal(view);
    });

    it('of registration should work with $state.go', function() {
      $state.go('registration');
       expect($state.is('registration'));
    });
  });
});
