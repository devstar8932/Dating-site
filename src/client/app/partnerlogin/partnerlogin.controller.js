(function() {
  'use strict';

  angular
  .module('app.partnerlogin',[])
  .controller('PartnerLoginController', PartnerLoginController);

  PartnerLoginController.$inject = ['$state','logger', '$filter','$rootScope','$cookies','partnerloginService'];
  /* @ngInject */
  function PartnerLoginController($state,logger, $filter,$rootScope,$cookies,partnerloginService) {
    var vm = this;
    vm.title = 'Partner';
    vm.logoutWindowFlag =true;
    vm.login = true;

//        vm.getweddinghall =getweddinghall;
    vm.user={remember_me:false};
    vm.loginCheck = loginCheck;
    vm.loginWindow = loginWindow;
    vm.loginUser = loginUser;
    vm.requestToPassword = requestToPassword;

        activate();
       function activate() {}

    function loginCheck(){

        $state.go('partnerdashboard');
     }

     function loginWindow(){
      vm.logoutWindowFlag = false;
      }

     function loginUser(loginForm){
      if(loginForm.$valid){
//        partnerloginService.getLoginStatus(vm.user).then(function (data){
//           $state.go('partnerdashboard');
//           })
         vm.user.method ="contact";
         partnerloginService.getLoginStatus(vm.user).then(function (data){
           if(data.data['status'] == 'okay'){
             $rootScope.isLoggedIn = true;
             $cookies.put("isLoggedIn", true);
             $state.go('partnerdashboard');
             $cookies.put("partnerName", data.data['name']);
             }
         }).catch(function(error){
//            vm.email_address=vm.user.email_address;
            toastr.options.closeButton = true;
//            toastr.success(error.data.message,{timeOut: 5000});
            toastr.error(error,'Error');
//            error.Object.data.mess
//            logger.info("This Field is Undefined");
        });
    }
   }



  function requestToPassword(forgotPassword,value){
  if(forgotPassword.$valid){
    var id_type;
    var expression = /^[1-9][0-9]{9}$/
    var regex = new RegExp(expression);
    if(value.match(regex)){
        id_type = "mobile_number";
    }else{
      id_type = "email";
    }
    var data1={
      id_type : id_type,
      id : value
    }
    partnerloginService.forgotPassword(data1).then(function(response) {
    var data = response.data;
    if(data.status== 'okay')
      {
         vm.mobileNumber=null;
         $scope.formvalid.$setUntouched();
         $scope.formvalid.$setPristine();
         toastr.options.positionClass="toast-top-center";
         toastr.success(data.message,{timeOut: 5000});
     }else{
       toastr.options.positionClass = "toast-top-center";
       toastr.error(data.message,{timeOut: 5000});
   }
  }).catch(function(error) {
      if (typeof error.message === 'object' && error.message.id != null) {

       toastr.options.positionClass = "toast-top-center";
       toastr.error(error.message.id[0] , {timeOut: 5000});
     }else{
         toastr.error(error.message , {timeOut: 5000});
     }
  });
  }
}

        window.scrollTo(0,0);
//    function getweddinghall(){
//      weddinghallService.getweddinghall().then(function(response){
//                 vm.selected_details = false;
//                 vm.non_selected_details = true;
//                 vm.weddingHall = true;
//                 vm.searchHall = true;
//                 vm.detail = false;
//                // vm.detail = true;
//                vm.status = response;
//                if (!vm.status.code) {
//                    vm.halls = response['halls'];
//                    vm.search_result = vm.halls;
//                    vm.hall_details = response['hall_details'];
//                    return vm.halls;
//                } else {
//                    // TODO (megha.n.bodke@gmail.com)
//                    // Error handling
//                    return vm.status;
//                }
//        if(response.status =="okay"){
//          toastr.success(response.message,{timeOut: 5000});
//        }
//      }).catch(function(error){
//        console.log(error);
//      });
    }



})();
