(function() {
  'use strict';

  angular
    .module('app.partnerchangepassword')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'partnerchangepassword',
        config: {
          url: '/partnerchangepassword',
           views: {
                    '': {
                         templateUrl: 'app/partnerchangepassword/partnerChangePassword.html',
                         controller: 'PartnerChangePasswordController',
                         controllerAs: 'vm'
                       },

                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}
                     },
          title: 'PartnerChangePassword'
        }


      }

    ];
  }
})();

