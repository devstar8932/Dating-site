/* jshint -W117, -W030 */
describe('events routes', function() {
  describe('state', function() {
    var view = 'app/events/events.html';

    beforeEach(function() {
      module('app.events', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /events ', function() {
      expect($state.href('events', {})).to.equal('/events');
    });

    it('should map /events route to events View template', function() {
      expect($state.get('events').templateUrl).to.equal(view);
    });

    it('of events should work with $state.go', function() {
      $state.go('events');
      $rootScope.$apply();
      expect($state.is('events'));
    });
  });
});
