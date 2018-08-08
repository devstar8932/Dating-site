(function() {
  'use strict';

  angular
    .module('app.caterers')
    .factory('caterersService', caterersService);

  caterersService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function caterersService($http, $q, exception, logger) {

    var service = {
      getweddinghall: getweddinghall,
      getweddinghalldetails: getweddinghalldetails,
    };

    return service;

    function getweddinghall() {
      return $http({
            method: 'GET',
            url: 'api/wedding_planner/halls/',
            headers:{'Content-Type':'application/json'}
            });

    }

     function getweddinghalldetails(hall_id) {
      return $http({
            method: 'GET',
            url: 'api/wedding_planner/halls/'+hall_id+'/',
            headers:{'Content-Type':'application/json'}
            });

    }
  }
})();