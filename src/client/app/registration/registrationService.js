(function() {
  'use strict';

  angular
    .module('app.registration')
    .factory('registrationService', profileService);

  profileService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function profileService($http, $q, exception, logger) {
    var service = {
      getSuccess: getSuccess,
      changeMobile:changeMobile,
      resendPassword:resendPassword
    };

    return service;
 
   function getSuccess() {
     return $http({
            method: 'GET',
            url: '/api/dashboard/profile_state',
            headers:{'Content-Type':'application/json'},
           });
    
    }

     function changeMobile(data) {
     return $http({
            method: 'POST',
            url: '/api/accounts/change_mobile',
            headers:{'Content-Type':'application/json'},
            data:data
           });
    
    }
    function resendPassword() {
     return $http({
            method: 'POST',
            url: '/api/accounts/resend_password',
            headers:{'Content-Type':'application/json'}
           });
    
    }
  }
})();