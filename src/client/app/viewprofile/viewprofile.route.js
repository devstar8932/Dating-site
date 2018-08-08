(function() {
  'use strict';

  angular
    .module('app.viewprofile')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'viewprofile',
        config: {
          url: '/viewprofile/:profile_id',
           views: {
                    '': { 
                         templateUrl: 'app/viewprofile/viewprofile.html',
                         controller: 'ViewProfileController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html' }  
                     },
          params:{profile_id :null},           
          title: 'ViewProfile'
        }
      }
    ];
  }
})();
