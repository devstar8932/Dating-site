(function() {
  'use strict';

  angular
    .module('app.events')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'events',
        config: {
          url: '/events',
           views: {
                    '': { 
                         templateUrl: 'app/events/events.html',
                         controller: 'EventsController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'} 
                     },
          title: 'events'
        }
      }
    ];
  }
})();
