(function() {
  'use strict';

  angular
    .module('app.inbox')
    .factory('inboxService', inboxService);

  inboxService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function inboxService($http, $q, exception, logger) {
    var service = {
      connect_requests:connect_requests,
      accepted_requests:accepted_requests,
      rejected_requests:rejected_requests,
      photo_upload_requests: photo_upload_requests,
      update_connect_request_count: update_connect_request_count,
      update_photo_upload_requests_count: update_photo_upload_requests_count
    
    };

    return service;

    function connect_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/inbox/connect_requests',
            headers:{'Content-Type':'application/json'}
            });
    
    }
    function update_connect_request_count() {
      return $http({
            method: 'POST',
            url: '/api/connections/inbox/connect_requests',
            headers:{'Content-Type':'application/json'}
            });

    }
     function accepted_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/inbox/accepted_requests',
            headers:{'Content-Type':'application/json'}
           });
    
    }
     function rejected_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/inbox/rejected_requests',
            headers:{'Content-Type':'application/json'}
                    });
    
    }
     function photo_upload_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/inbox/photo_upload_requests',
            headers:{'Content-Type':'application/json'}
            });
    
    }

     function update_photo_upload_requests_count() {
      return $http({
            method: 'POST',
            url: '/api/connections/inbox/photo_upload_requests',
            headers:{'Content-Type':'application/json'}
            });

    }
  }
})();