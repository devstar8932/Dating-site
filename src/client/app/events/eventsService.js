(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('eventsService', eventsService);

  eventsService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function eventsService($http, $q, exception, logger) {
    var service = {
    };
    return service;
  }
})();