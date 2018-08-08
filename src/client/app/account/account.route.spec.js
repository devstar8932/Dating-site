/* jshint -W117, -W030 */
describe('account routes', function() {
  describe('state', function() {
    var view = 'app/account/account.html';

    beforeEach(function() {
      module('app.account', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /account ', function() {
      expect($state.href('account', {})).to.equal('/account');
    });

    it('should map /account route to account View template', function() {
      expect($state.get('account').templateUrl).to.equal(view);
    });

    it('of account should work with $state.go', function() {
      $state.go('account');
      $rootScope.$apply();
      expect($state.is('account'));
    });
  });
});
