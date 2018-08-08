(function() {
  'use strict';

  angular
    .module('app.partnerlogout')
    .factory('partnerLogoutService', partnerLogoutService);

  partnerLogoutService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function partnerLogoutService($http, $q, exception, logger) {
    var service = {
      getSuccess: getSuccess,
      changeMobile:changeMobile,
      resendPassword:resendPassword,
      sendPassword:sendPassword,
      friendRequestData:friendRequestData,
    };

    return service;

     function getLogoutStatus(){
       return $http({
            method: 'POST',
//            url: '/api/partner_home/request',
            url: 'api/partner/logout',
            headers:{'Content-Type':'application/json'}
            });
     }



   function friendRequestData(data){
       return $http({
            method: 'POST',
//            url: '/api/partner_home/request',
            url: '/api/partner/partner_home/register',
            headers:{'Content-Type':'application/json'},
            data:data
            });
     }


   function sendPassword(data){
       return $http({
            method: 'POST',
            url: '/api/dashboard/profile_state',
            headers:{'Content-Type':'application/json'},
            data:data
            });
     }


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
