(function() {
  'use strict';

  angular
    .module('app.account')
    .factory('accountService', accountService);

  accountService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function accountService($http, $q, exception, logger) {
    var service = {
      deleteAccount: deleteAccount,
      changePassword :changePassword,
      getNotificationSetting:getNotificationSetting,
      setNotificationSetting:setNotificationSetting,
      sendConfirmEmail:sendConfirmEmail
    };

    return service;

    function deleteAccount(data) {
      return $http({
            method: 'POST',
            url: '/api/accounts/delete_account',
            headers:{'Content-Type':'application/json'},
            data:data});
    
    }
    function changePassword(data) {
      return $http({
            method: 'POST',
            url: '/api/accounts/change_password',
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
    function getNotificationSetting(userID) {
      return $http({
            method: 'GET',
            url: ' api/notification_settings',
            headers:{'Content-Type':'application/json'}
          });
    
    }
     function setNotificationSetting(data ,userID) {
      return $http({
            method: 'POST',
            url: ' api/notification_settings',
            headers:{'Content-Type':'application/json'},
            data:data});
    
    }
  }
})();