(function() {
  'use strict';

  angular
    .module('app.payment')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'payment',
        config: {
          url: '/payment',
           views: {
                    '': { 
                         templateUrl: 'app/payment/payment.html',
                         controller: 'PaymentController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html' }  
                     },
          title: 'Payment'
        }
      }
    ];
  }
})();
