

(function() {
  'use strict';

  angular
    .module('app.components', [
    'app.core',
    'app.widgets'
  ])
    .factory('profileViewService', profileViewService);

  profileViewService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function profileViewService($http, $q, exception, logger) {
    var service = {
			accept: accept,
			reject:reject
		};

    return service;

		function accept(data) {
			return $http({
				method: 'POST',
				url: '/api/connections/accept',
				headers:{'Content-Type':'application/json'},
				data:data
			});

		}
		function reject(data) {
			return $http({
				method: 'POST',
				url: '/api/connections/reject',
				headers:{'Content-Type':'application/json'},
				data:data
			});

		}
  
  }
})();