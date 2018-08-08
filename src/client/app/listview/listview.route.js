(function() {
  'use strict';

  angular
    .module('app.listview')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'listview',
        config: {
          url: '/listview/:typeview',
           views: {
                    '': { 
                         templateUrl: 'app/listview/listview.html',
                         controller: 'ListViewController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'}  
                     },
          params:{typeview:null},
          title: 'ListView'
        }
      }
    ];
  }
})();
