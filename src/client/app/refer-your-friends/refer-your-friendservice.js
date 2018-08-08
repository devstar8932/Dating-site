(function() {
  'use strict';

  angular
    .module('app.referfriends')
    .factory('referFriendsService', referFriendsService);

  referFriendsService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function referFriendsService($http, $q, exception, logger) {
    var service = {
      sendReference: sendReference
    };

    return service;

    function sendReference(data) {
      return $http({
            method: 'POST',
            url: 'api/references/',
            headers:{'Content-Type':'application/json'},
            data:data
            });
    
    }
  }
})();