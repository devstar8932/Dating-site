(function() {
  'use strict';

  angular
    .module('app.outbox')
    .factory('outboxService', outboxService);

  outboxService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function outboxService($http, $q, exception, logger) {
    var service = {
      connect_requests:connect_requests,
      accepted_requests:accepted_requests,
      rejected_requests:rejected_requests,
      photo_upload_requests: photo_upload_requests,
      update_accepted_requests_count: update_accepted_requests_count,
      update_rejected_requests_count: update_rejected_requests_count
    
    };

    return service;

    function connect_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/outbox/connect_requests',
            headers:{'Content-Type':'application/json'}
            });
    
    }
     function accepted_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/outbox/accepted_requests',
            headers:{'Content-Type':'application/json'}
           });
    
    }
     function rejected_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/outbox/rejected_requests',
            headers:{'Content-Type':'application/json'}
                    });
    
    }
     function update_accepted_requests_count() {
      return $http({
            method: 'POST',
            url: '/api/connections/outbox/accepted_requests',
            headers:{'Content-Type':'application/json'}
           });

    }
     function update_rejected_requests_count() {
      return $http({
            method: 'POST',
            url: '/api/connections/outbox/rejected_requests',
            headers:{'Content-Type':'application/json'}
                    });

    }
     function photo_upload_requests() {
      return $http({
            method: 'GET',
            url: '/api/connections/outbox/photo_upload_requests',
            headers:{'Content-Type':'application/json'}
            });
    
    }
  
  }
})();