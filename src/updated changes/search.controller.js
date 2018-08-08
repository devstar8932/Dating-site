(function() {
  'use strict';

  angular
    .module('app.search')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['logger','$rootScope','$state','$cookies','searchService','dataset','moment','inboxService','generalService','$anchorScroll' ,'$location' ];
  /* @ngInject */
  function SearchController(logger,$rootScope,$state,$cookies,searchService,dataset,moment,inboxService,generalService ,$anchorScroll,$location) {
    var vm = this;
    vm.title = 'Search';
    vm.search = {
    };

    vm.search.id = null;
    vm.search.edu_level = [];
    vm.search.caste = [];
    vm.searchResultProfile =[];
    vm.isinvalidageflag = false;
    vm.unablescroll = true;
    vm.totalSearchCount = 0;
    vm.isformChange = false;
    vm.isLoggedInUser = false ;
    var URLTONEXT="";
    vm.ageLimit =18;
    vm.ageError = "";
    vm.isInvalidAgeFlag = false;
    vm.isInvalidAgeFlag2 = false;
    vm.isInvalidAgeFlag3 = false;
    vm.selectedIndex = 0;

    //functions used
    vm.searchNextData = searchNextData;
    vm.saveSearch = saveSearch;
    vm.reset = reset;
    vm.searchData = searchData;
    vm.searchesByProfileId = searchesByProfileId;
    vm.retrievesSearch = retrievesSearch;
    vm.searchByData = searchByData;
    vm.edit = edit;
    vm.deleteSearch = deleteSearch;
    vm.init = init;
    vm.checkValidAge1 = checkValidAge1;
    vm.checkValidAge2 = checkValidAge2;
    vm.selectTab = selectTab;

    //from dataset
    function init() {
      vm.maritalstatus = dataset.marital_status();
      vm.cities = dataset.Cities();
      vm.castes = dataset.caste();
      vm.ages = dataset.age();
      vm.height = dataset.height();
      vm.heightnew=dataset.height();
      vm.weights = dataset.weight();
      vm.education_field = dataset.education_field();
      vm.education_level = dataset.education_level();
      vm.education = dataset.education_field();
      vm.incomeList = dataset.income();
    }

    if($cookies.get("User")!=null) {
      vm.user = JSON.parse($cookies.get("User"));
    }

    function checkLogedIn() {
      if ($cookies.get('isLoggedIn')==='true') {
        if (vm.user.gender == "Male") {
          vm.ageLimit = 18;
        } else if (vm.user.gender == "Female") {
          vm.ageLimit = 21;
        }
        vm.isLoggedInUser = true ;
      } else {
        vm.ageLimit = 18;
      }
    }
    checkLogedIn();
    if ($cookies.get("searchData")!=null) {
      var data = JSON.parse( $cookies.get("searchData") );
      console.log('data',data);
      vm.search.age1 = data.age1
      vm.search.age2 = data.age2;
      vm.search.looking_for = data.gender;
      vm.search.caste= [ data.cast];
      vm.searchData();
    } else {
      vm.search.mangal = 'No',
      vm.search.physical_disablity = 'No',
      vm.search.inter_caste_marriage = 'No'
    }

    $cookies.remove("searchData");

    function checkValidAge1() {
      if (vm.search.age1 < vm.ageLimit ) {
        vm.ageError = "Age must be greater than "+ vm.ageLimit +".";
        vm.isInvalidAgeFlag=true;
      } else {
        vm.isInvalidAgeFlag=false;
      }
      if (vm.search.age2 != undefined) {
        if (vm.search.age2 < vm.search.age1) {
          vm.ageError = "Age must be less than "+ vm.search.age2 +".";
          vm.isInvalidAgeFlag=true;
        }
      }
    }

    function checkValidAge2() {
      if (vm.search.age2 < vm.search.age1) {
        vm.isInvalidAgeFlag2=true;
      } else {
        vm.isInvalidAgeFlag2=false;
      }
    }

    function selectTab(index) {
      vm.selectedIndex = index ;
      if (vm.selectedIndex ==1) {
        vm.unablescroll = false;
      } else {
        vm.unablescroll = true;
      }
      searchService.setSearchPageTab(index);
    }
    function saveSearch(){

        var searchData = setData(vm.search);

        if (searchData.id != -1) {
            searchService.UpdateSavedSearch(searchData).then(function(response){
               toastr.options.closeButton = true;
               toastr.success(response.data.message,{timeOut: 5000});
             }).catch(function(error){
                      toastr.error(error.data.message,{timeOut:5000});
             });
        }else{
            searchService.createSearch(searchData).then(function(response){
               toastr.options.closeButton = true;
               toastr.success(response.data.message,{timeOut: 5000});
             }).catch(function(error){
                      toastr.error(error.data.message,{timeOut:5000});
             });
         }

    }

    function reset() {
      var search = vm.search;
      vm.search = {
        'mangal' :'No',
        'physical_disablity' : 'No',
        'inter_caste_marriage' : 'No' };
      vm.search.edu_level=[];
      vm.searchTextHeight1="";
      vm.searchTextHeight2="";
      vm.searchTextIncome1="";
      vm.searchTextIncome2="";
      vm.searchtextage1="";
      vm.searchtextage2="";
    }

    function retrievesSearch() {
      searchService.retrievesSearch().then(function(response) {
        vm.savedSearchList =response.data.list;
        vm.savedSearchList_count = vm.savedSearchList.length;
      }).catch(function(error) {
        toastr.error(error.data.message,{timeOut:5000});
      });
    }

    function searchByData(data) {
      var searchData = setData(data);
      searchService.search(searchData).then(function(response){
        vm.selectedIndex =1;
        vm.searchResultProfile = response.data.data.results;
        vm.totalSearchCount = response.data.count;
        URLTONEXT = response.data.data.next;
        toastr.options.closeButton = true;
        toastr.success(response.data.message,{timeOut: 5000});
        searchService.setProfileList(vm.searchResultProfile);
        searchService.setTotalSearchCount(response.data.count);
        searchService.setSearchData(searchData);
        searchService.setSearchNext(URLTONEXT);
      }).catch(function(error){
        toastr.error(error.data.message,{timeOut:5000});
      });
    }
    function edit(data) {
      vm.search = data ;
      vm.selectedIndex = 0;
    }

    function deleteSearch(id ,index) {
      vm.savedSearchList.splice(index,1);
      searchService.deleteSavedSearches(id).then(function(response) {
        toastr.options.closeButton = true;
        toastr.success(response.data.message,{timeOut: 5000});
      }).catch(function(error) {
        toastr.error(error.data.message,{timeOut:5000});
      });
    }

    function searchesByProfileId(profile_id) {
      searchService.searchesByProfileId(profile_id).then(function(response) {
        toastr.options.closeButton = true;
        if (response.data.status =="okay") {
          $state.go('viewprofile',{"profile_id" : response.data.user_profile.profile_id});
          toastr.success(response.data.message,{timeOut: 5000});
        } else {
          toastr.success(response.data.message,{timeOut: 5000});
        }
      }).catch(function(error){
        toastr.error(error.data.message,{timeOut:5000});
      });
    }

    function searchData() {
      var searchData = setData(vm.search);
  //    if(searchData.mangal == undefined){
  //      searchData.mangal = null
  //      }
  //    if(searchData.physical_disablity== undefined){
  //      searchData.physical_disablity = null
  //      }
      vm.unablescroll= true;
      document.getElementById('spinner2').style.display = 'Block';
      searchService.search(searchData).then(function(response){
        vm.selectedIndex = 1 ;
        window.scrollTo(0,0);
        vm.searchResultProfile = response.data.data.results;
        vm.totalSearchCount = response.data.count;
        URLTONEXT = response.data.data.next;
        toastr.options.closeButton = true;
        vm.unablescroll= false;
        searchService.setProfileList(vm.searchResultProfile);
        searchService.setTotalSearchCount(response.data.count);
        searchService.setSearchData(vm.search);
        searchService.setSearchNext(URLTONEXT);
        document.getElementById('spinner2').style.display = 'None';
        toastr.success(response.data.message,{timeOut: 5000});
      }).catch(function(error) {
        if(error.data && error.data.detail){
          toastr.options.positionClass = "toast-top-center";
          toastr.error("Please login to proceed further.",{timeOut:5000});
        } else  {
          toastr.error(error.data.message,{timeOut:5000});
        }
        document.getElementById('spinner2').style.display = 'None';
      });
    }

    function searchNextData() {
     if(URLTONEXT != null && vm.totalSearchCount > vm.searchResultProfile.length && !vm.unablescroll)
     {
       vm.unablescroll= true;
       var searchData = setData(vm.search);
       document.getElementById('spinner2').style.display = 'Block';
       searchService.searchNextData(URLTONEXT,searchData).then(function(response){
         vm.searchResultProfile =vm.searchResultProfile.concat(response.data.data.results);
         URLTONEXT = response.data.data.next;
         vm.unablescroll=false;
         searchService.setProfileList(vm.searchResultProfile);
         searchService.setTotalSearchCount(response.data.count);
         searchService.setSearchData(vm.search);
         searchService.setSearchNext(URLTONEXT);
         document.getElementById('spinner2').style.display = 'None';
       }).catch(function(error) {
        if(error.data && error.data.detail){
          toastr.options.positionClass = "toast-top-center";
          toastr.error("Please login to proceed further.",{timeOut:5000});
        } else  {
          toastr.error(error.data.message,{timeOut:5000});
        }
        document.getElementById('spinner2').style.display = 'None';
      });
     }
   }

    function setData(search){
      var searchData ={
        "id": search.id != null ? search.id : -1 ,
        "search_name": (search.search_name !=null)?search.search_name : "default" ,
        "looking_for": search.looking_for !=null ? search.looking_for :null,
        "marital_status":(search.marital_status) ? search.marital_status :[],
        "age1": (search.age1!=null?search.age1:null),
        "age2": (search.age2!=null?search.age2:null),
        "height1":(search.height1!=null?search.height1:null),
        "height2":(search.height2!=null ?search.height2:null),
        "edu_level":(search.edu_level!=null?search.edu_level:[]),
        "edu_field":(search.edu_field!=null?search.edu_field:[]),
        "current_place_residence":(search.current_place_residence!=null?search.current_place_residence:[]),
        "income1":(search.income1!=null?search.income1:null),
        "income2":(search.income2!=null?search.income2:null),
        "caste": (search.caste!=null?search.caste:[]),
        "mangal": (search.mangal!=null?search.mangal:null),
        "physical_disablity": (search.physical_disablity!=null?search.physical_disablity:null),
        "inter_caste_marriage": (search.inter_caste_marriage!=null?search.inter_caste_marriage:null)
      }
      return searchData;
    }

    if ($cookies.get('isLoggedIn')==='true') {
        vm.isLoggedInUser = true ;
    }

    function activate() {
      //logger.info('Activated Search View');
      var searchData = setData (vm.search);
      searchService.search(searchData).then(function(response ) {
        vm.selectedIndex = 1;
        vm.searchResultProfile = response.data.data.results;
        vm.totalSearchCount = response.data.count;
        URLTONEXT = response.data.data.next;
        toastr.options.closeButton = true;
        toastr.success(response.data.message,{timeOut: 5000});
        searchService.setProfileList(vm.searchResultProfile);
        searchService.setTotalSearchCount(response.data.count);
        searchService.setSearchData(searchData);
        searchService.setSearchNext(URLTONEXT);
      }).catch(function(error){
        toastr.error(error.data.message,{timeOut:5000});
      });
    }

    //activate () ;

    if( searchService.getLocalStorage().profileList.length > 0 ) {
      vm.dash_data ={};
      var data = searchService.getLocalStorage();
      console.log('data',data);
      vm.searchResultProfile = data.profileList;
      URLTONEXT = data.next;
      vm.search = data.searchData;
      vm.selectedIndex =  data.searchPageTab;
      vm.totalSearchCount =  data.totalSearchCount;;
      setTimeout(function () {
        $location.hash($rootScope.profileNo);
        $anchorScroll();
        $location.hash("");
        setTimeout(function() {
          window.scrollTo(window.pageXOffset, window.pageYOffset - 70);
        }, 100);
      }, 110);
      return ;
    } else {
      window.scrollTo(0,0);
    }
  }
})();
