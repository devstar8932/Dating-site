(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .factory('dashboardService', dashboardService );

  dashboardService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dashboardService($http, $q, exception, logger) {
    var service = {
      dashboard:dashboard,
      incompleteSection:incompleteSection,
      sendConfirmEmail:sendConfirmEmail,
      saveEmail:saveEmail
    };

    return service;

     function  saveEmail(data){
       return $http({
            method: 'POST',
            url: '/api/accounts/save_email',
            headers:{'Content-Type':'application/json'},
            data:data});
    }



     function  sendConfirmEmail(data){
       return $http({
            method: 'POST',
            url: '/api/accounts/resend_confirmation_email',
            headers:{'Content-Type':'application/json'},
            data:data});
    }

     function dashboard() {
      return $http({
            method: 'GET',
            url: '/api/dashboard',
            headers:{'Content-Type':'application/json'},
           });

    }

    function incompleteSection() {
      return $http({
            method: 'GET',
            url: ' /api/dashboard/profile_state',
            headers:{'Content-Type':'application/json'},
           });

    }

  }
})();
