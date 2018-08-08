(function() {
  'use strict';

  angular
    .module('app.inbox')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'inbox',
        config: {
          url: '/inbox',
           views: {
                    '': { 
                         templateUrl: 'app/inbox/inbox.html',
                         controller: 'InboxController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'}  
                     },
          title: 'Inbox'
        }
      }
    ];
  }
})();
