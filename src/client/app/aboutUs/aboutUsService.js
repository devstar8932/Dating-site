(function() {
  'use strict';

  angular
    .module('app.aboutUs')
    .factory('aboutUsService', aboutUsService);

  aboutUsService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function aboutUsService($http, $q, exception, logger) {
    var service = {
    };
    return service;
  }
})();