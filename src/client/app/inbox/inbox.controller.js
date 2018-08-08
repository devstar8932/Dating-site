(function() {
  'use strict';

  angular
  .module('app.inbox')
  .controller('InboxController', InboxController);

  InboxController.$inject = ['logger','$rootScope','$cookies','$location', '$anchorScroll','inboxService','moment' ,'dataset'];
  /* @ngInject */
  function InboxController(logger,$rootScope,$cookies,$location, $anchorScroll,inboxService ,moment ,dataset) {
    var vm = this;
    vm.title = 'Inbox';

    vm.takeHeight = takeHeight;
    vm.isSelected =isSelected;
    vm.selectTab=selectTab;
    vm.update_connect_requests_count= update_connect_requests_count;
    vm.update_photo_upload_requests_count= update_photo_upload_requests_count;
    vm.selectedIndex =0;
    vm.profileListData =[];

    function isSelected(tab) {
      return tab == vm.selectedIndex;

    }

    function  selectTab(tab) {
      vm.selectedIndex = tab;

    }

    if($cookies.get("selectTab") != null){
      vm.selectedIndex = parseInt($cookies.get("selectTab"));
      $cookies.remove("selectTab");
      vm.isSelected1 = parseInt($cookies.get("selectTab"));
    }

    function connect_requests(){
      document.getElementById('spinner2').style.display = 'Block';
      inboxService.connect_requests().then(function(response){
        vm.connectList =response.data;

        toastr.options.closeButton = true;
        //toastr.success("Getting Interested Profiles",{timeOut: 5000});
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }
    function update_connect_requests_count(){
      inboxService.update_connect_request_count().then(function(response){
      }).catch(function(error){
        console.log(error);
      });
    }
    function update_photo_upload_requests_count(){
      inboxService.update_photo_upload_requests_count().then(function(response){
      }).catch(function(error){
        console.log(error);
      });
    }
    function accepted_requests(){
      document.getElementById('spinner2').style.display = 'Block';
      inboxService.accepted_requests().then(function(response){
        vm.acceptedList =response.data;
        toastr.options.closeButton = true;
        //toastr.success("Getting accepted Profiles",{timeOut: 5000});
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }
    function rejected_requests(){
      document.getElementById('spinner2').style.display = 'Block';
      inboxService.rejected_requests().then(function(response){
        vm.rejectedList =response.data;
        toastr.options.closeButton = true;
        //toastr.success("Getting rejected Profiles",{timeOut: 5000});
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }
    function photo_upload_requests(){
      inboxService.photo_upload_requests().then(function(response){
        document.getElementById('spinner2').style.display = 'Block';
        vm.photo_uploadList =response.data;
        toastr.options.closeButton = true;
        //toastr.success("Getting Photo request Profiles",{timeOut: 5000});
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }

    function takeHeight(val){
      return dataset.get_height_to_display(val);
    }

    function activate() {
      //logger.info('Activated Inbox View');
    }

    activate();
    connect_requests();
    rejected_requests();
    accepted_requests();
    photo_upload_requests();
    window.scrollTo(0,0);
  }
})();
