(function() {
  'use strict';

  angular
  .module('app.contactUs')
  .controller('ContactUsController', ContactUsController);

  ContactUsController.$inject = ['logger','$rootScope','$cookies','$location', '$anchorScroll','contactUsService'];
  /* @ngInject */
  function ContactUsController(logger,$rootScope,$cookies,$location, $anchorScroll,contactUsService) {
    var vm = this;
    vm.title = 'ContactUs';
    vm.user ={};
    vm.contact={};
    vm.subject='';
    vm.message='';
    vm.error_msg=null;
    vm.setReadOnly=false;
    vm.sendMessage =sendMessage;
    vm.bindToContactPage=bindToContactPage;
    vm.mobileFlag = false;
    vm.desktopflag = false;
    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
     }
    activate();

    function isMobile(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //return true;
        console.log("mobile Browser");
        vm.mobileFlag = true;
        vm.desktopflag = false;
        }else{
          console.log("desctop Browser");
          vm.mobileFlag = false;
          vm.desktopflag = true;
        }
    }
    isMobile();

    function activate() {
      //logger.info('Activated ContactUs View');
    }

    bindToContactPage();
    function bindToContactPage()
    {
      if($cookies.get("isLoggedIn")){
        vm.setReadOnly=true;
//        vm.contact.subject=vm.user.firstname;
        vm.contact.mobile_number=vm.user.phone_mobile;
        vm.contact.email=vm.user.email_address;
      }
    }
    function sendMessage(myForm){
      if(myForm.$valid){
      var data ={
        subject :vm.contact.subject,
        message : vm.contact.message,
        email : vm.contact.email,
        mobile_number:vm.contact.mobile_number
      }
      vm.error_msg = null;
      document.getElementById('spinner2').style.display = 'Block';
      contactUsService.sendMessage(data).then(function(response){
        vm.error_msg = null;
        vm.error_sub = null;

        if(!vm.setReadOnly){
        vm.contact={};
        myForm.$setPristine();
        myForm.$setUntouched();
        }else{
           vm.contact.message=null;
           myForm.$setUntouched();
           myForm.$setPristine();
        }
        toastr.options.closeButton = true;
        var error_string;
        if (typeof response.data.message === 'object' && response.data.message != null) {
            for (var key in response.data.message) {
               error_string = '"'+ key +'" - '+ response.data.message[key];
              if(key =='message'){
                vm.error_msg = response.data.message[key];
              }
              if(key =='subject'){
                vm.error_sub = response.data.message[key];
              }
               toastr.options.positionClass="toast-top-center";
               toastr.error(error_string,{timeOut: 5000});
             }
        }else{
          vm.error_msg = null;
          toastr.options.positionClass="toast-top-center";
          toastr.success(response.data.message,{timeOut: 5000});
        }
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        var error_string;
        document.getElementById('spinner2').style.display = 'None';
        if (typeof error.data.message === 'object' && error.data.message != null) {
            for (var key in error.data.message) {
               error_string = '"'+ key +'" - '+ error.data.message[key];
               if(key =='message'){
                vm.error_msg = error.data.message[key];
              }
              if(key =='subject'){
                vm.error_sub = error.data.message[key];
              }
               toastr.options.positionClass="toast-top-center";
               toastr.error(error_string,{timeOut: 5000});
             }
        }else{
          toastr.options.positionClass="toast-top-center";
          toastr.error(error.data.message,{timeOut: 5000});
        }

      });
    }
  }
  window.scrollTo(0,0);
  }
})();
