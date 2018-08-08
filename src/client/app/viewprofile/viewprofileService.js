(function() {
  'use strict';

  angular
    .module('app.viewprofile')
    .factory('viewProfileService', viewProfileService);

  viewProfileService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function viewProfileService($http, $q, exception, logger) {
    var service = {
      viewProfile: viewProfile,
      show_interest:show_interest,
      contact_details:contact_details,
      get_Profile_Flag:get_Profile_Flag,
      save_Flag_Profile:save_Flag_Profile,
      update_Profile_Flag:update_Profile_Flag,
      delete_Flag_Profile:delete_Flag_Profile,
      sendPhotoRequest:sendPhotoRequest
    };

    return service;

    function viewProfile(profile_id) {
      return $http({
            method: 'GET',
            url: ' /api/profiles/'+profile_id,
            headers:{'Content-Type':'application/json'}
            });

    }
    function sendPhotoRequest(profile_id) {
      return $http({
            method: 'POST',
            url: '/api/connections/request_photo',
            headers:{'Content-Type':'application/json'},
            data:profile_id
            });

    }
    function show_interest(data) {
      return $http({
            method: 'POST',
            url: ' /api/connections/connect',
            headers:{'Content-Type':'application/json'},
            data:data
            });

    }
    function contact_details(data) {
      return $http({
            method: 'POST',
            url: ' /api/connections/connect_using_credits',
            headers:{'Content-Type':'application/json'},
            data:data
            });

    }
    function get_Profile_Flag(profile_id) {
      return $http({
            method: 'GET',
            url: '/api/profiles/'+ profile_id +'/flag',
            //url:'api/profile_id/flag',
            headers:{'Content-Type':'application/json'}
            });
    }
    function save_Flag_Profile(profile_id,data) {
      return $http({
            method: 'POST',
            url: '/api/profiles/'+profile_id+'/flag',
            headers:{'Content-Type':'application/json'},
            data:data
            });
    }
    function update_Profile_Flag(profile_id,data) {
      return $http({
            method: 'PATCH',
            url: '/api/profiles/'+ profile_id +'/flag',
           //  url: '/api/profile_id/flag',
            headers:{'Content-Type':'application/json'},
            data:data
            });
    }
    function delete_Flag_Profile(profile_id) {
      return $http({
            method: 'DELETE',
            url: '/api/profiles/'+ profile_id +'/flag',
           // url: '/api/profile_id/flag',
            headers:{'Content-Type':'application/json'}
            });
    }

  }
})();
