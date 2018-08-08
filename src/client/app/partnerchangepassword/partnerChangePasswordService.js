(function() {
  'use strict';

  angular
    .module('app.partnerchangepassword')
    .factory('partnerChangePasswordService', partnerChangePasswordService);

  partnerChangePasswordService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function partnerChangePasswordService($http, $q, exception, logger) {
    var service = {
      login: login,
      forgotUsername: forgotUsername,
      forgotPassword:forgotPassword,
      logout:logout,
      getaccountsetting:getaccountsetting,
      deleteAccount:deleteAccount,
      changeEmail:changeEmail
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function changeEmail(data) {
      return $http({
            method: 'POST',
            url: 'api/partner/change_email',
            headers:{'Content-Type':'application/json'},
            data:data
            });

    }


    function deleteAccount() {
      return $http({
            method: 'POST',
            url: '/api/partner/delete_account',
            headers:{'Content-Type':'application/json'}
            });

    }


    function getaccountsetting(data){
            return $http({
            method: 'POST',
            url: '/api/partner/change_password',
            headers:{'Content-Type':'application/json'},
            data:data
            });
          }

    function login(user) {
      return $http({
            method: 'POST',
            url: '/api/accounts/login/email',
            headers:{'Content-Type':'application/json'},
            data:user});

    }
    //Forgot Username
    function forgotUsername(data) {
      return $http({
            method: 'POST',
            url: '/api/accounts/forgot_username',
            headers:{'Content-Type':'application/json'},
            data:data});

    }

     //Forgot Password
    function forgotPassword(data) {
      return $http({
            method: 'POST',
            url: '/api/accounts/forgot_password',
            headers:{'Content-Type':'application/json'},
            data:data});
    }

      //logout account
    function logout() {
      return $http({
            method: 'POST',
            url: '/api/accounts/logout',
            headers:{'Content-Type':'application/json'}
          });
    }

  }
})();
