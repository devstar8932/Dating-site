(function() {
  'use strict';

  angular
    .module('app.account')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'account',
        config: {
          url: '/account',
           views: {
                    '': { 
                         templateUrl: 'app/account/account.html',
                         controller: 'AccountController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'} 
                     },
          title: 'Account'
        }
      }
    ];
  }
})();
