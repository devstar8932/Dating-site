(function() {
  'use strict';

  angular
    .module('app.partnerlogin')
    .factory('partnerloginService', partnerloginService);

  partnerloginService.$inject = ['$http', '$q', '$cookies', 'exception', 'logger'];
  /* @ngInject */
  function partnerloginService($http, $q, $cookies, exception, logger) {
    var service = {
      getLoginStatus: getLoginStatus,
//      forgotUsername: forgotUsername,
      forgotPassword:forgotPassword,
//      logout:logout
    };
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';

    return service;

//    function getMessageCount() { return $q.when(72); }

//    function getLoginStatus() {
//      return $http({
//            method: 'GET',
//            url: '/api/partnerLogin/login',
//            headers:{'Content-Type':'application/json'}
//            });
//
//    }

    function forgotPassword(data) {
      return $http({
            method: 'POST',
            url: '/api/partner/forgot_password',
            headers:{'Content-Type':'application/json'},
            data:data});
    }


     function getLoginStatus(data) {
      return $http({
            method: 'POST',
            url: '/api/partner/login',
            headers:{'Content-Type':'application/json'},
            data:data});
    }

//           function getLoginStatus(user) {
//            if ($cookies['csrftoken']) {
//                $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
//            }
//            return $http.post('/api/partner/login', user)
//                .then(success)
//                .catch(fail);
//
//            function success(response) {
//                return response.data;
//            }
//
//            function fail(error) {
//                var msg = 'query for people failed. ' + error.data;
//                logger.error(msg);
//                return $q.reject(msg);
//            }
//        }




  }
})();
