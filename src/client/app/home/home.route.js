(function() {
  'use strict';

  angular
    .module('app.home')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'home',
        config: {
          url: '/home/:otherState',
           views: {
                    '': { 
                         templateUrl: 'app/home/home.html',
                         controller: 'HomeController',
                         controllerAs: 'vm'
                       },
                      'footer':{templateUrl: 'app/layout/footer.html'},
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'} 
                     }, 
            params: {
                 otherState:{
                      value:'',
                      squash:true
                     }
                         
            },                 
          title: 'home'
        }
      }
    ];
  }
})();
