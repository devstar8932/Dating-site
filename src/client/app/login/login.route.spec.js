/* jshint -W117, -W030 */
describe('Login routes', function() {
  describe('state', function() {
    var view = 'app/login/login.html';

    beforeEach(function() {
      module('app.login', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state home to url / ', function() {
      expect($state.href('login', {})).to.equal('/');
    });

    it('should map /home route to home View template', function() {
      expect($state.get('login').templateUrl).to.equal(view);
    });

    it('of login should work with $state.go', function() {
      $state.go('login');
       expect($state.is('login'));
    });
  });
});
