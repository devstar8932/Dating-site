(function() {
  'use strict';

  angular
    .module('app.registration')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'registration',
        config: {
          url: '/registration/:fromLogin',
           views: {
                    '': { 
                         templateUrl: 'app/registration/registration.html',
                         controller: 'RegistrationController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' },
                      'sidebar':{templateUrl: 'app/layout/sidebar.html'}  
                     },
          params:{fromLogin:null},           
          title: 'Registration'
        }
      },
      {
        state: 'registration_success',
        config: {
          url: '/registration_success/:toDash',
           views: {
                    '': { 
                         templateUrl: 'app/registration/registration_success.html',
                         controller: 'RegistrationController',
                         controllerAs: 'vm'
                       },
                      'header':{templateUrl: 'app/layout/ht-top-nav.html'} ,
                      'footer':{templateUrl: 'app/layout/footer.html' } 
                     },
          params:{toDash:null},             
          title: 'Registration_success'
        }
      }
    ];
  }
})();
