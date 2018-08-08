(function() {
  'use strict';

  angular
    .module('app.referfriends')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'refer-your-friends',
        config: {
          url: '/refer-your-friends',
           views: {
                    '': { 
                         templateUrl: 'app/refer-your-friends/refer-your-friends.html',
                         controller: 'ReferFriendsController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html' }  
                     },
          title: 'ReferFriends'
        }
      }
    ];
  }
})();
