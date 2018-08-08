(function() {
  'use strict';

  angular
    .module('app.partnerlogout')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'partnerlogout',
        config: {
          url: '/partnerlogout',
           views: {
                    '': {
                         templateUrl: 'app/partnerlogout/partner_logout.html',
                         controller: 'PartnerLogoutController',
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
