(function() {
  'use strict';

  angular
    .module('app.aboutUs')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'aboutUs',
        config: {
          url: '/aboutUs',
           views: {
                    '': {
                         templateUrl: 'app/aboutUs/aboutUs.html',
                         controller: 'AboutUsController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } ,
                       'sidebar':{templateUrl: 'app/layout/sidebar.html'}
                     },
          title: 'AboutUs'
        }
      }
    ];
  }
})();
