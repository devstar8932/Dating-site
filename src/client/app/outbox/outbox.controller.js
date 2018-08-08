(function() {
  'use strict';

  angular
    .module('app.outbox')
    .controller('OutboxController', OutboxController);

  OutboxController.$inject = ['logger','$rootScope','$cookies','$location', '$anchorScroll','outboxService','moment' ,'dataset'];
  /* @ngInject */
  function OutboxController(logger,$rootScope,$cookies,$location, $anchorScroll,outboxService ,moment ,dataset) {
    var vm = this;
    vm.title = 'Outbox';
     
    activate();

    function activate() {
      //logger.info('Activated Outbox View');
    }

    vm.takeHeight = takeHeight;
    vm.isSelected =isSelected;
    vm.selectTab=selectTab;
   
    vm.selectedIndex = 0;
    vm.profileListData =[];
    console.log('here' ,vm.selectedIndex)
    function isSelected(tab) {
      console.log('here' ,tab ,vm.selectedIndex)
      return tab == vm.selectedIndex;

    }

    function  selectTab(tab) {
      vm.selectedIndex = tab;
    }
 
    function connect_requests(){
      outboxService.connect_requests().then(function(response){
        vm.connectList =response.data;
       //toastr.success("Getting Interested Profiles",{timeOut: 5000});
     }).catch(function(error){
              console.log(error);
     });
    }

    function accepted_requests(){
        outboxService.accepted_requests().then(function(response){
           vm.acceptedList =response.data;
           toastr.options.closeButton = true;
           //toastr.success("Getting accepted Profiles",{timeOut: 5000});
         }).catch(function(error){
                  console.log(error);
         });
    }
    function rejected_requests(){
      outboxService.rejected_requests().then(function(response){
         vm.rejectedList =response.data;
           toastr.options.closeButton = true;
           //toastr.success("Getting rejected Profiles",{timeOut: 5000});
         }).catch(function(error){
                  console.log(error);
         });
    }
    function photo_upload_requests(){
         outboxService.photo_upload_requests().then(function(response){
           vm.photo_uploadList =response.data;
           toastr.options.closeButton = true;
           //toastr.success("Getting Photo request Profiles",{timeOut: 5000});
         }).catch(function(error){
                  console.log(error);
         });
    }

    function takeHeight(val){
      return dataset.get_height_to_display(val);
    }

    connect_requests();
    rejected_requests();
    accepted_requests();
    photo_upload_requests();
    window.scrollTo(0,0);
   
   
  }
})();
