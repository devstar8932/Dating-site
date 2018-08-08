(function() {
  'use strict';

  angular
    .module('app.profile')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'profile',
        config: {
          url: '/profile',
           views: {
                    '': { 
                         templateUrl: 'app/profile/profile.html',
                         controller: 'ProfileController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'} 
                     },
          title: 'Profile'
        }
      },{
        state: 'uploadimages',
        config: {
          url: '/uploadimages',
           views: {
                    '': { 
                         templateUrl: 'app/profile/profilepicupload.html',
                         controller: 'ProfileController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'} 
                     },
          title: 'Profile'
        }
      }
    ];
  }
})();
