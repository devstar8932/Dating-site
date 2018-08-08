(function() {
  'use strict';

  angular
    .module('app.contactUs')
    .factory('contactUsService', contactUsService);

  contactUsService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function contactUsService($http, $q, exception, logger) {
    var service = {
      sendMessage: sendMessage
    };

    return service;

    function sendMessage(data) {
      return $http({
            method: 'POST',
            url: '/api/customer_connect/contact_us',
            headers:{'Content-Type':'application/json'},
            data:data});
    
    }
  }
})();