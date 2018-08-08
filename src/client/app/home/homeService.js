(function() {
  'use strict';

  angular
    .module('app.login')
    .factory('homeService', homeService);

  homeService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function homeService($http, $q, exception, logger) {
    var service = {
      registerUser: registerUser,
      getMessageCount: getMessageCount,
      checkUsername:checkUsername
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function registerUser(user) {

    	var req = {
			 method: 'POST',
			 url: '/api/accounts/register',
			 headers:{'Content-Type':'application/json'},
             data:user};

      return $http(req)
        .then(success)
        .catch(fail);
    
      function success(response) {
      
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }


    function checkUsername(user) {

      var req = {
       method: 'GET',
       url: '/api/accounts/check_username?user_id=' +user.user_id,
       headers:{'Content-Type':'application/json'}
     };

      return $http(req)
        .then(success)
        .catch(fail);
    
      function success(response) {
      
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
  }
})();