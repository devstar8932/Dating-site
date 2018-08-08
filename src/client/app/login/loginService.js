(function() {
  'use strict';

  angular
    .module('app.login')
    .factory('loginService', loginService);

  loginService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function loginService($http, $q, exception, logger) {
    var service = {
      login: login,
      forgotUsername: forgotUsername,
      forgotPassword:forgotPassword,
      logout:logout,
      partnerLogout:partnerLogout
    };

    return service;

    function getMessageCount() { return $q.when(72); }

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
            url: 'api/accounts/logout',
            headers:{'Content-Type':'application/json'}
          });
    }

     function partnerLogout() {
      return $http({
            method: 'POST',
            url: 'api/partner/logout',
            headers:{'Content-Type':'application/json'},
            });
    }

  }
})();
