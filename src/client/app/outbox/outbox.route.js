(function() {
  'use strict';

  angular
    .module('app.outbox')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'outbox',
        config: {
          url: '/outbox',
           views: {
                    '': { 
                         templateUrl: 'app/outbox/outbox.html',
                         controller: 'OutboxController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'}  
                     },
          title: 'Outbox'
        }
      }
    ];
  }
})();
