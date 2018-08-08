(function() {
  'use strict';

  angular
    .module('app.logout')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'logout',
        config: {
          url: '/logout',
           views: {
                    '': { 
                         templateUrl: 'app/logout/logout.html',
                         controller: 'LogoutController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } 
                     },
          title: 'logout'
        }
      }
    ];
  }
})();
