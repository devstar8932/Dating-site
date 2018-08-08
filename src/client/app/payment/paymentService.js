(function() {
  'use strict';

  angular
    .module('app.payment')
    .factory('paymentService', paymentService);

  paymentService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function paymentService($http, $q, exception, logger) {
    var service = {
      getTransactions: getTransactions,
      saveTransaction:saveTransaction,
      getPaymentPlans:getPaymentPlans,
      buynow:buynow
    };

    return service;

    function getTransactions() {
      return $http({
            method: 'GET',
            url: 'api/payment/transactions/',
            headers:{'Content-Type':'application/json'}
            });

    }

     function saveTransaction(data) {
      return $http({
            method: 'POST',
            url: 'api/payment/transactions/',
            headers:{'Content-Type':'application/json'},
            data:data
            });

    }
    function getPaymentPlans() {
      return $http({
            method: 'GET',
            url: 'api/payment/plans',
            headers:{'Content-Type':'application/json'}

            });

    }
    function buynow(data) {

        return $http.post('api/payment/ccpayment', data)
            .then(success)
            .catch(fail);

        function success(response) {
            return response.data;
        }

        function fail(error) {
            var msg = 'query for contact Credits failed. ' + error.data.description;
            logger.error(msg);
            return $q.reject(msg);
        }
    }
  }
})();
