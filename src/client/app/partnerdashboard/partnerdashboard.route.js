(function() {
  'use strict';

  angular
    .module('app.partnerdashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'partnerdashboard',
        config: {
          url: '/partnerdashboard',
           views: {
                    '': {
                         templateUrl: 'app/partnerdashboard/partner_dashboard.html',
                         controller: 'PartnerDashboardController',
                         controllerAs: 'vm'
                       },

                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}
                     },
          title: 'Partner'
        }


      }

    ];
  }
})();

