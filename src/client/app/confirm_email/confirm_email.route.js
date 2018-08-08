(function() {
  'use strict';

  angular
    .module('app.confirm_email')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
   routerHelper.configureStates(getStates());

  }

  function getStates() {
    return [
      {
        state: 'confirm_email',
        config: {
          url: '/confirm_email',
           views: {
                    '': {
                         templateUrl: 'app/confirm_email/confirm_email.html',
                         controller: 'ConfirmEmailController',
                         controllerAs: 'vm'
                       },

                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}
                     },
          title: 'confirm_email'
        }


      }

    ];
  }
})();

