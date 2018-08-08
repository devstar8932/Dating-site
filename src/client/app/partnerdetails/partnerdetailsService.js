(function() {
  'use strict';

  angular
    .module('app.partnerdetails')
    .factory('partnerdetailsService', partnerdetailsService);

  partnerdetailsService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function partnerdetailsService($http, $q, exception, logger) {
    var service = {
      updateProfile: updateProfile,
      getProfile: getProfile,
      getSiblingDetails:getSiblingDetails,
      createSiblingDetails:createSiblingDetails,
      updateSiblingDetails:updateSiblingDetails,
      deleteSiblingDetails:deleteSiblingDetails,
      updateMobile:updateMobile,
      confirmMobile:confirmMobile
    };

    return service;

    function updateProfile(data) {
      return $http({
            method: 'POST',
            url: '/api/partner/bank_accounts',
            headers:{'Content-Type':'application/json'},
            data:data
            });

    }

    function getProfile() {
      return $http({
            method: 'GET',
            url: '/api/partner/bank_accounts',
            headers:{'Content-Type':'application/json'},
            });

    }

    //List Sibling_details
   function getSiblingDetails(userId) {
      return $http({
            method: 'GET',
            url: '/api/siblings/',

            headers:{'Content-Type':'application/json'}
            });

    }

     //Create Sibling_details
   function createSiblingDetails(data) {
      return $http({
            method: 'POST',
            url: '/api/siblings/',

            headers:{'Content-Type':'application/json'},
            data:data
            });

    }
      //Update Sibling_details
   function updateSiblingDetails(data) {
      return $http({
            method: 'PUT',
            url: ' /api/siblings/'+ data.id+'/',

            headers:{'Content-Type':'application/json'},
            data:data
            });

    }

      //Delete Sibling_details
   function deleteSiblingDetails(data) {
      return $http({
            method: 'DELETE',
            url: '/api/siblings/'+ data.id+'/',
            headers:{'Content-Type':'application/json'}
            });

    }

   function updateMobile(data) {
     return $http({
            method: 'POST',
            url: '/api/accounts/update_mobile',
            headers:{'Content-Type':'application/json'},
            data:data
           });

    }
    function confirmMobile(data) {
     return $http({
            method: 'POST',
            url: '/api/accounts/confirm_mobile_update',
            headers:{'Content-Type':'application/json'},
            data:data
           });

    }
  }
})();
