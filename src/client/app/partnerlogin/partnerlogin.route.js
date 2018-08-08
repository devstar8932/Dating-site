(function() {
  'use strict';

  angular
    .module('app.partnerlogin')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'partnerlogin',
        config: {
          url: '/partnerlogin',
           views: {
                    '': {
                         templateUrl: 'app/partnerlogin/partner_login.html',
                         controller: 'PartnerLoginController',
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
