/* jshint -W117, -W030 */
describe('refer-your-friends routes', function() {
  describe('state', function() {
    var view = 'app/refer-your-friends/refer-your-friends.html';

    beforeEach(function() {
      module('app.referfriends', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /refer-your-friends ', function() {
      expect($state.href('refer-your-friends', {})).to.equal('/refer-your-friends');
    });

    it('should map /refer-your-friends route to refer-your-friends View template', function() {
      expect($state.get('profile').templateUrl).to.equal(view);
    });

    it('of refer-your-friends should work with $state.go', function() {
      $state.go('refer-your-friends');
         expect($state.is('refer-your-friends'));
    });
  });
});
