(function() {
  'use strict';

  angular
    .module('app.general')
    .factory('generalService', generalService);

  generalService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function generalService($http, $q, exception, logger) {
    var service = {
     getSearchResult :getSearchResult,
     getIntegerResult:getIntegerResult,
     getLanguageSearchResult:getLanguageSearchResult
    };
   
     return service;
     function getSearchResult (data,query) {
      var results = query ? data.filter( createFilterFor(query) ) : data,
          deferred;
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery ="";
      if(query!= undefined)
       lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (angular.lowercase(item).indexOf(lowercaseQuery) !== -1);
      };

    }
    
    function getIntegerResult (data,query) {
      var results = query!= null ? data.filter( createFilterForInteger(query) ) : data,
          deferred;
      return results;
    }
     function createFilterForInteger(query) {
      return function filterFn(item) {
        return ( angular.lowercase(item+"").indexOf(query) !== -1);
      };

    }

    function getLanguageSearchResult (data,query) {
      var results = query ? data.filter( createFilterForLanguage(query) ) : data, deferred;
      return results;
    }
     function createFilterForLanguage(query) {
       var lowercaseQuery ="";
      if(query!= undefined)
       lowercaseQuery = angular.lowercase(query);

      return function filterFn(item) {
        return ( angular.lowercase(item.value).indexOf(lowercaseQuery) !== -1);
      };

    }
   


  
  }
})();