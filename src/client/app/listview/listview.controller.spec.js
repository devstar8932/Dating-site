/* jshint -W117, -W030 */
describe('listview routes', function() {
  describe('state', function() {
    var view = 'app/listview/listview.html';

    beforeEach(function() {
      module('app.listview', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /listview ', function() {
      expect($state.href('listview', {})).to.equal('/listview');
    });

    it('should map /listview route to listview View template', function() {
      expect($state.get('listview').templateUrl).to.equal(view);
    });

    it('of listview should work with $state.go', function() {
      $state.go('listview');
       expect($state.is('listview'));
    });
  });
});
