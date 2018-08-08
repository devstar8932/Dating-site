(function() {
  'use strict';

  angular
    .module('app.weddinghall')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'weddinghall',
        config: {
          url: '/wedding_planer',
           views: {
                    '': { 
                         templateUrl: 'app/weddinghall/weddinghall.html',
                         controller: 'WeddingHallController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}  
                     },
          title: 'WeddingHall'
        }
      }

    ];
  }
})();
