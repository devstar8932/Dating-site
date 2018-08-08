(function() {
  'use strict';

  angular
  .module('app.partnerchangepassword')
  .controller('PartnerChangePasswordController', PartnerChangePasswordController);

  PartnerChangePasswordController.$inject = ['logger','$rootScope','$cookies','$location', '$anchorScroll','$state','$scope','partnerChangePasswordService'];
  /* @ngInject */
  function PartnerChangePasswordController(logger,$rootScope,$cookies,$location, $anchorScroll,$state,$scope,partnerChangePasswordService) {
    var vm = this;
    vm.title = 'PartnerChangePassword';
    vm.user ={};
    vm.showPassfield = false;
    vm.showPass =false;
    vm.oldPassError=''
    vm.oldPassFlag=false;
    vm.deleteMyAccount =deleteMyAccount;
    vm.deleteAccount ={};
    vm.deleteAccount.delete_reason ="Lagachi bolni helped me in finding life partner. Partner Id";
    vm.changePassword = changePassword;
    vm.isSameOldAndNewPass = isSameOldAndNewPass;
//    vm.setNotificationSetting = setNotificationSetting;
//    vm.sendConfirmEmail=sendConfirmEmail;
    vm.passwordmatch=false;

    vm.changeTab =changeTab;
    vm.changeEmail = changeEmail;

//    if($cookies.get("User")!=null){
//      vm.user = JSON.parse($cookies.get("User"));
//      var numbers =vm.user.birth_date.match(/\d+/g);
//      vm.user.birth_date = new Date(numbers[0], numbers[1] - 1, numbers[2]);
//      vm.email_address=vm.user.email_address;
//    }

    activate();
    toastr.options.closeButton = true;
    vm.changePasswordFlag =false;
    var isFirstTimeFlag = false;
    if( $cookies.get("changePasswordFlag") == "true" ){
      vm.selectedIndex = 1 ;
      vm.changePasswordFlag = true;
      isFirstTimeFlag = true;
    }else{
      isFirstTimeFlag = false;
      vm.selectedIndex = 0 ;
    }

    function isSameOldAndNewPass(){
      if(vm.passwordObj.currentPassword!=undefined && vm.passwordObj.newPassword !=undefined ){
        if(vm.passwordObj.currentPassword === vm.passwordObj.newPassword){
          vm.passwordmatch= true;
        }else{
          vm.passwordmatch= false;
        }
      }
    }



    function changeEmail(){
      var data = {'email' : vm.contact.email}

      partnerChangePasswordService.changeEmail(data).then(function (data) {
                if (data.data['status'] == 'okay'){
//                    logger.info('Response'+data);
                    logger.info('Email Changed Successfully !!!!!');
                }
//                else {
//                    vm.Error = true;
//                    vm.Error_success = false;
//                    vm.error1 = data.message;
//                    vm.pwd =  vm.pwd1 ='';
//                    vm.user = null;
//                }
            }).catch(function(error){
              toastr.options.closeButton = true;
              toastr.options.positionClass="toast-top-center";
              toastr.error(error.data.message,{timeOut:5000});
        });
      }


        function changePassword(form) {
            if(form.$valid){
                var data ={
                current_password: vm.passwordObj.current_password,
                new_password:vm.passwordObj.new_password,
                confirm_new_password:vm.passwordObj.confirm_new_password
               }

                partnerChangePasswordService.getaccountsetting(data).then(function (data) {
                if (!data.code){
                    vm.Error_success = true;
                    vm.Error = false;
                    vm.error = data.message;
                    vm.user = null;
                    vm.pwd =  vm.pwd1 ='';
//                    logger.info('Response'+data);
                    logger.info('Password Changed Successfully !!!!!');
                } else {
                    vm.Error = true;
                    vm.Error_success = false;
                    vm.error1 = data.message;
                    vm.pwd =  vm.pwd1 ='';
                    vm.user = null;
                }
            });
           }

        }



      function deleteMyAccount(deleteForm){
//      if(deleteForm.$valid){
//        var data ={};
//        if(vm.deleteAccount.delete_reason !="other"){
//          data.delete_reason= vm.deleteAccount.delete_reason;
//        }else{
//          data.delete_reason= "Other";
//          data.delete_comment = vm.deleteAccount.delete_comment;
//        }
        partnerChangePasswordService.deleteAccount().then(function(response){
          toastr.options.closeButton = true;
          toastr.options.positionClass="toast-top-center";
          toastr.success(response.data.message,{timeOut: 5000});
          $cookies.remove("isLoggedIn");
          $cookies.remove("changePasswordFlag");
          $cookies.remove("User");
          $cookies.remove("registrationStep");
          $cookies.remove("registrationStepEnable");
          $rootScope.isLoggedIn = false;
          $state.go("partnerlogin");
        }).catch(function(error){
             if(error.data.message.delete_comment!=null && error.data.message.delete_comment.length>0){
              toastr.options.closeButton = true;
              toastr.options.positionClass="toast-top-center";
              toastr.error(error.data.message.delete_comment[0],{timeOut:5000});
             }
        });
//      }
    }

//    function changePassword(form){
//      if(form.$valid){
//        var data ={
//          current_password: vm.passwordObj.currentPassword,
//          new_password:vm.passwordObj.newPassword,
//          confirm_new_password:vm.passwordObj.confirmPassword
//        }
//        accountService.changePassword(data).then(function(response){
//          if(response.data.status =="okay"){
//            vm.changePasswordFlag =false;
//            if($cookies.get("changePasswordFlag") == "true" ){
//              $cookies.remove("changePasswordFlag");
//              if(vm.user.profile_complete == 1 && isFirstTimeFlag)
//              {
//                $state.go('dashboard');
//              }else{
//                $state.go('registration',{fromLogin :1});
//              }
//            }
//            vm.passwordObj ={};
//            $scope.passwordChangeForm.$setPristine();
//            $scope.passwordChangeForm.$setUntouched();
//            toastr.success(response.data.message,{timeOut: 5000});
//          }else{
//            toastr.error(response.data.message,{timeOut: 5000});
//            vm.oldPassError=response.data.message;
//            vm.oldPassFlag=true;
//          }
//        }).catch(function(error){
//          var error_string;
//            if (typeof error.data.message === 'object' && error.data.message != null) {
//                for (var key in error.data.message) {
//                   error_string = error.data.message[key];
//                   toastr.options.positionClass="toast-top-center";
//                   toastr.error(error_string,{timeOut: 5000});
//                 }
//                error_string = null;
//                vm.oldPassError=error_string;
//                vm.oldPassFlag=true;
//            }else{
//                error_string = error.data.message;
//
//            }
//            if(error_string!=null)
//              toastr.error(error_string,{timeOut: 5000});
//
//          console.log(error);
//        });
//      }
//    }

//    function deleteMyAccount(deleteForm){
//      if(deleteForm.$valid){
//        var data ={};
//        if(vm.deleteAccount.delete_reason !="other"){
//          data.delete_reason= vm.deleteAccount.delete_reason;
//        }else{
//          data.delete_reason= "Other";
//          data.delete_comment = vm.deleteAccount.delete_comment;
//        }
//        accountService.deleteAccount(data).then(function(response){
//          toastr.options.closeButton = true;
//          toastr.options.positionClass="toast-top-center";
//          toastr.success(response.data.message,{timeOut: 5000});
//          $cookies.remove("isLoggedIn");
//          $cookies.remove("changePasswordFlag");
//          $cookies.remove("User");
//          $cookies.remove("registrationStep");
//          $cookies.remove("registrationStepEnable");
//          $rootScope.isLoggedIn = false;
//          $state.go("login");
//        }).catch(function(error){
//             if(error.data.message.delete_comment!=null && error.data.message.delete_comment.length>0){
//              toastr.options.closeButton = true;
//              toastr.options.positionClass="toast-top-center";
//              toastr.error(error.data.message.delete_comment[0],{timeOut:5000});
//             }
//        });
//      }
//    }

//    function sendConfirmEmail(email_address1)
//    {
//    var data = {
//        email: email_address1
//        }
//      accountService.sendConfirmEmail(data).then(function(response){
//          if( response.data.status == "okay"){
//            vm.user.email_address=email_address1;
//            $cookies.put("User",JSON.stringify(vm.user));
//            toastr.options.closeButton = true;
//            toastr.success(response.data.message,{timeOut: 5000});
//            }
//        }).catch(function(error){
//            vm.email_address=vm.user.email_address;
//            toastr.options.closeButton = true;
//            toastr.success(error.data.message,{timeOut: 5000});
//        });
//    }

    vm.equalPass =equalPass;
    vm.isSamePassword =false;
    function equalPass(){
      if(vm.passwordObj.confirmPassword!=undefined)
        if(vm.passwordObj.newPassword != vm.passwordObj.confirmPassword){
          vm.isSamePassword =true;
        }else{
          vm.isSamePassword =false;
        }
      }

//      function getNotificationSetting(){
//
//        accountService.getNotificationSetting(vm.user.profile_id).then(function(response){
//
//          if( response.data.status == "okay"){
//            vm.notification = response.data.data;
//            toastr.options.closeButton = true;
//            //toastr.success(response.data.message,{timeOut: 5000});
//          }
//        }).catch(function(error){
//            //toastr.success(error.data.message,{timeOut: 5000});
//        });
//      }

//      function setNotificationSetting(){
//
//        var data =  {
//          "user": vm.user.profile_id,
//          "visits": vm.notification.visits,
//          "connect_requests": vm.notification.connect_requests,
//          "sms": vm.notification.sms,
//          "email": vm.notification.email,
//          "push": true,
//        }
//        accountService.setNotificationSetting( data ,vm.user.profile_id).then(function(response){
//
//          if( response.status == "okay"){
//            vm.notification = response.data;
//            toastr.options.closeButton = true;
//            toastr.success(response.data.message,{timeOut: 5000});
//          }
//        }).catch(function(error){
//          toastr.success(error.data.message,{timeOut: 5000});
//        });
//      }
//      getNotificationSetting();

      function activate() {
      //logger.info('Activated Account View');
    }

      function changeTab(tab){
        if(vm.changePasswordFlag){
          $cookies.remove("changePasswordFlag");
//          if(vm.user.profile_complete == 1 && isFirstTimeFlag)
          if(isFirstTimeFlag)
          {
            vm.selectedIndex = tab;
          }else{
            $state.go('registration',{fromLogin :1});
          }
        }else{
          vm.selectedIndex = tab;
        }
      }
      window.scrollTo(0,0);

    }
  })();
