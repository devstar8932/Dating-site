(function() {
  'use strict';

  angular
    .module('app.partner')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'partner',
        config: {
          url: '/partner',
           views: {
                    '': {
                         templateUrl: 'app/partner/partner_home.html',
                         controller: 'PartnerController',
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

