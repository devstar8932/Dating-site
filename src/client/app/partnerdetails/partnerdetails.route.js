(function() {
  'use strict';

  angular
    .module('app.partnerdetails')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'partnerdetails',
        config: {
          url: '/partnerdetails',
           views: {
                    '': {
                         templateUrl: 'app/partnerdetails/partner_details.html',
                         controller: 'PartnerDetailsController',
                         controllerAs: 'vm'
                       },

                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}
                     },
          title: 'PartnerDetails'
        }


      }

    ];
  }
})();
