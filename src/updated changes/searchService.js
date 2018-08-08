(function() {
  'use strict';

  angular
    .module('app.search')
    .factory('searchService', searchService);

  searchService.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function searchService($http, $q, exception, logger) {

    var localStorage ={
        profileList :[],
        searchData :{},
        next : null,
        searchPageTab : 0,
        totalSearchCount : 0
    };
    var service = {
      search: search,
      searchesByProfileId:searchesByProfileId,
      createSearch:createSearch,
      UpdateSavedSearch:UpdateSavedSearch,
      retrievesSearch:retrievesSearch,
      deleteSavedSearches:deleteSavedSearches,
      searchNextData:searchNextData,
      setProfileList:setProfileList,
      setSearchData:setSearchData,
      setSearchNext:setSearchNext,
      setSearchPageTab :setSearchPageTab,
      getLocalStorage :getLocalStorage,
      clearLocalStorage :clearLocalStorage,
      setTotalSearchCount : setTotalSearchCount
    };

    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
    return service;
    //get search 
    function search(data) {
      return $http({
            method: 'POST',
            url: '/api/search',
            headers:{'Content-Type':'application/json'},
            data:data});
    
    }

    function searchNextData(url,data) {
      return $http({
            method: 'POST',
            url: url,
            headers:{'Content-Type':'application/json'},
            data :data
            });
    }

    //get search with profile id 
    function searchesByProfileId(profile_id) {
      return $http({
            method: 'GET',
            url: '/api/profiles/'+profile_id,
            headers:{'Content-Type':'application/json'}
           });
    
    }

     //Create Saved Search
    function createSearch(data) {
      return $http({
            method: 'POST',
            url: '/api/saved_searches/',
            headers:{'Content-Type':'application/json'},
            data:data});
    
    }
    //Update Saved Search
    function UpdateSavedSearch(data) {
      return $http({
            method: 'PUT',
            url: '/api/saved_searches/'+data.id+'/',
            headers:{'Content-Type':'application/json'},
            data:data
            });
    
    }

    //delete Saved Searches by id
    function deleteSavedSearches(id) {
      return $http({
            method: 'DELETE',
            url: '/api/saved_searches/'+id+'/',
            headers:{'Content-Type':'application/json'}
           });
    
    }
    //Retrieve List Saved Searches
    function retrievesSearch() {
      return $http({
            method: 'GET',
            url: '/api/saved_searches/',
            headers:{'Content-Type':'application/json'}
           });
    
    }

    function setProfileList(list) {
      localStorage.profileList = list;
    
    }
    
    function setSearchData(data) {
      localStorage.searchData = data;
    }
    
    function setSearchNext(next) {
      localStorage.next = next;
    }
    
    function setSearchPageTab(index) {
      localStorage.searchPageTab = index;
    }
    
    function setTotalSearchCount(count) {
      console.log(count)
      localStorage.totalSearchCount = count;
    }

    function clearLocalStorage(){
      localStorage ={
        profileList :[],
        searchData :{},
        next : null,
        searchPageTab : 0,
        totalSearchCount : 0
      };
    }
  
    function getLocalStorage() {
      return localStorage;
    }
  }
})();
