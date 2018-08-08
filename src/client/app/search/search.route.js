(function() {
  'use strict';

  angular
    .module('app.search')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'search',
        config: {
          url: '/search',
           views: {
                    '': { 
                         templateUrl: 'app/search/search.html',
                         controller: 'SearchController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'} 
                     },
          title: 'Search'
        }
      }
    ];
  }
})();
