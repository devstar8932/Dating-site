(function() {
  'use strict';

  angular
  .module('app.listview')
  .factory('listviewservice', listviewservice);
  listviewservice.$inject = ['$http', '$q', 'exception', 'logger'];
  function listviewservice($http, $q, exception, logger){
    var localStorage = {
      profileList :[],
      next : null,
      listPageTitle : null
    };
    var service={
      perfect_matches:perfect_matches,
      profile_visits:profile_visits,
      connected:connected,
      connect_requests:connect_requests,
      photo_upload_requests:photo_upload_requests,
      getNextData:getNextData,
      setListNext :setListNext,
      setListPageTitle : setListPageTitle,
      setProfileList : setProfileList,
      getLocalStorage :getLocalStorage,
      clearLocalStorage: clearLocalStorage
    };
    return service;

    function perfect_matches() {
      return $http({
        method: 'GET',
        url: '/api/profiles/perfect_matches',
        headers:{'Content-Type':'application/json'}
      }); 
    } 

    function profile_visits() {
      return $http({
        method: 'GET',
        url: '/api/profiles/profile_visits',
        headers:{'Content-Type':'application/json'}
      }); 
    } 

    function getNextData(url) {
      return $http({
        method: 'GET',
        url:url,
        headers:{'Content-Type':'application/json'}
      });  
    }

    function connected() {
      return $http({
        method: 'GET',
        url: '/api/profiles/connected',
        headers:{'Content-Type':'application/json'}
      }); 
    }

    function connect_requests() {
      return $http({
        method: 'GET',
        url: '/api/connections/inbox/connect_requests',
        headers:{'Content-Type':'application/json'}
      });

    }

    function photo_upload_requests() {
      return $http({
        method: 'GET',
        url: '/api/connections/inbox/photo_upload_requests',
        headers:{'Content-Type':'application/json'}
      });
    }

    function setListNext(next) {
      localStorage.next = next;
    }

    function setListPageTitle(title) {
      localStorage.listPageTitle = title;
    }

    function setProfileList(list) {
      localStorage.profileList = list;
    }

    function clearLocalStorage(){
      localStorage ={
        profileList :[],
        next : null,
        listPageTitle : ''
      };
    }

    function getLocalStorage() {
      return localStorage;
    }

  }

})();