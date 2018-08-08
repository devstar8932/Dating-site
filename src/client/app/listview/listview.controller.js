(function() {
  'use strict';

  angular
  .module('app.listview')
  .controller('ListViewController', ListViewController);
  ListViewController.$inject = ['$stateParams','logger','$rootScope','$cookies','$location', '$anchorScroll','listviewservice','moment' ,'dataset'];
  /* @ngInject */
  function ListViewController($stateParams,logger,$rootScope,$cookies,$location, $anchorScroll,listviewservice ,moment ,dataset) {
    var vm=this;
    var url="";
    vm.displayname='';
    vm.profileListData = [] ;
    vm.match_message = false;
    vm.perfect_matches=perfect_matches;
    vm.profile_visits=profile_visits;
    vm.connected=connected;
    vm.connect_requests=connect_requests;
    vm.getNextData=getNextData;
    vm.isNextCall = true;

    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
    }

    function perfect_matches(){
      listviewservice.perfect_matches().then(function(response){
        vm.profileListData = response.data.results;
        vm.displayname = "Perfect match list";
        url = response.data.next;
        vm.isNextCall =false;
        storePageData();
        toastr.options.closeButton = true;
//        toastr.success("Getting Interested Profiles",{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }

    function profile_visits(){
      listviewservice.profile_visits().then(function(response){
        vm.profileListData =response.data;
        url=response.data.next;
        vm.displayname="Visited list";
        vm.isNextCall =false;
        storePageData();
        toastr.options.closeButton = true;
//        toastr.success("Getting Interested Profiles",{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }
    function connect_requests(){
      listviewservice.connect_requests().then(function(response){
        vm.profileListData =response.data;
        vm.displayname="Interest received list";
        url=response.data.next ;
        vm.isNextCall =false;
        storePageData();
        toastr.options.closeButton = true;
//        toastr.success("Getting Interested Profiles",{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }

    function connected(){
      listviewservice.connected().then(function(response){
        vm.profileListData =response.data;
        url=response.data.next;
        vm.displayname="Connected list";
        vm.isNextCall =false;
        storePageData();
        toastr.options.closeButton = true;
//        toastr.success("Getting Interested Profiles",{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }

    function photo_upload_requests(){
      listviewservice.photo_upload_requests().then(function(response){
        vm.profileListData = response.data;
        vm.displayname="Photo request list";
        url=response.data.next;
        vm.isNextCall =false;
        storePageData();
        toastr.options.closeButton = true;
//        toastr.success("Getting Photo request Profiles",{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }

    function getNextData(){
      if(url !=null && !vm.isNextCall)
      {
        vm.isNextCall=true;
        document.getElementById('spinner2').style.display = 'Block';
        listviewservice.getNextData(url).then(function(response){
          vm.profileListData = vm.profileListData.concat(response.data.results);
          url=response.data.next;
          vm.isNextCall = false;
          storePageData();
          document.getElementById('spinner2').style.display = 'None';
        });
      }
      else{
      }
    }

    function storePageData () {
      listviewservice.setProfileList(vm.profileListData);
      listviewservice.setListPageTitle(vm.displayname);
      listviewservice.setListNext(url);
    }
     vm.isNextCall = true;
    function init(){
      if($stateParams.typeview=='perfect-match-list'){
        perfect_matches();
      }else if($stateParams.typeview=='visited-list'){
        profile_visits();
      }else if($stateParams.typeview=='connected-list'){
        connected();
      }else if($stateParams.typeview=='interest-received-list'){
        connect_requests();
      }else if($stateParams.typeview=='photo-request-list'){
        photo_upload_requests();
      }
    }

    if( listviewservice.getLocalStorage().profileList.length > 0 ) {
      var data = listviewservice.getLocalStorage();
      vm.profileListData = data.profileList;
      url = data.next;
      vm.displayname =  data.listPageTitle;;
      setTimeout(function () {
        vm.isNextCall = false;
        $location.hash($rootScope.profileNo);
        $anchorScroll();
        $location.hash("");
        setTimeout(function() {
          window.scrollTo(window.pageXOffset, window.pageYOffset - 70);
        }, 500);
      }, 510);
      return ;
    } else {
      window.scrollTo(0,0);
      init();
    }
  }
})();
