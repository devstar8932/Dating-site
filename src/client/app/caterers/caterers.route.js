(function() {
  'use strict';

  angular
    .module('app.caterers')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'caterers',
        config: {
          url: '/caterers',
           views: {
                    '': { 
                         templateUrl: 'app/caterers/caterers.html',
                         controller: 'CaterersController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}   
                     },
          title: 'Caterers'
        }
      }
    ];
  }
})();
