(function() {
  'use strict';

  angular
  .module('app.account')
  .controller('AccountController', AccountController);

  AccountController.$inject = ['logger','$rootScope','$cookies','$location', '$anchorScroll','accountService','$state','$scope'];
  /* @ngInject */
  function AccountController(logger,$rootScope,$cookies,$location, $anchorScroll,accountService ,$state,$scope) {
    var vm = this;
    vm.title = 'AccountService';
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
    vm.setNotificationSetting = setNotificationSetting;
    vm.sendConfirmEmail=sendConfirmEmail;
    vm.passwordmatch=false;

    vm.changeTab =changeTab;

    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
      var numbers =vm.user.birth_date.match(/\d+/g);
      vm.user.birth_date = new Date(numbers[0], numbers[1] - 1, numbers[2]);
      vm.email_address=vm.user.email_address;
    }

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

    function changePassword(form){
      if(form.$valid){
        var data ={
          current_password: vm.passwordObj.currentPassword,
          new_password:vm.passwordObj.newPassword,
          confirm_new_password:vm.passwordObj.confirmPassword
        }
        document.getElementById('spinner2').style.display = 'Block';
        accountService.changePassword(data).then(function(response){
          if(response.data.status =="okay"){
            vm.changePasswordFlag =false;
            if($cookies.get("changePasswordFlag") == "true" ){
              $cookies.remove("changePasswordFlag");
              if(vm.user.profile_complete == 1 && isFirstTimeFlag)
              {
                $state.go('dashboard');
              }else{
                $state.go('registration',{fromLogin :1});
              }
            }
            vm.passwordObj ={};
            $scope.passwordChangeForm.$setPristine();
            $scope.passwordChangeForm.$setUntouched();
            toastr.success(response.data.message,{timeOut: 5000});
          }else{
            toastr.error(response.data.message,{timeOut: 5000});
            vm.oldPassError=response.data.message;
            vm.oldPassFlag=true;
          }
          document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
          document.getElementById('spinner2').style.display = 'None';
          var error_string;
            if (typeof error.data.message === 'object' && error.data.message != null) {
                for (var key in error.data.message) {
                   error_string = error.data.message[key];
                   toastr.options.positionClass="toast-top-center";
                   toastr.error(error_string,{timeOut: 5000});
                 }
                error_string = null;
                vm.oldPassError=error_string;
                vm.oldPassFlag=true;
            }else{
                error_string = error.data.message;

            }
            if(error_string!=null)
              toastr.error(error_string,{timeOut: 5000});

          console.log(error);

        });
      }
    }

    function deleteMyAccount(deleteForm){
      if(deleteForm.$valid){
        var data ={};
        if(vm.deleteAccount.delete_reason !="other"){
          data.delete_reason= vm.deleteAccount.delete_reason;
        }else{
          data.delete_reason= "Other";
          data.delete_comment = vm.deleteAccount.delete_comment;
        }
        document.getElementById('spinner2').style.display = 'Block';
        accountService.deleteAccount(data).then(function(response){
          toastr.options.closeButton = true;
          toastr.options.positionClass="toast-top-center";
          toastr.success(response.data.message,{timeOut: 5000});
          $cookies.remove("isLoggedIn");
          $cookies.remove("changePasswordFlag");
          $cookies.remove("User");
          $cookies.remove("registrationStep");
          $cookies.remove("registrationStepEnable");
          $rootScope.isLoggedIn = false;
          $state.go("login");
          document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
              document.getElementById('spinner2').style.display = 'None';
             if(error.data.message.delete_comment!=null && error.data.message.delete_comment.length>0){
              toastr.options.closeButton = true;
              toastr.options.positionClass="toast-top-center";
              toastr.error(error.data.message.delete_comment[0],{timeOut:5000});
             }

        });
      }
    }

    function sendConfirmEmail(email_address1)
    {
    var data = {
        email: email_address1
        }
        document.getElementById('spinner2').style.display = 'Block';
        accountService.sendConfirmEmail(data).then(function(response){
          if( response.data.status == "okay"){
            vm.user.email_address=email_address1;
            $cookies.put("User",JSON.stringify(vm.user));
            toastr.options.closeButton = true;
            toastr.success(response.data.message,{timeOut: 5000});
            }
            document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
            document.getElementById('spinner2').style.display = 'None';
            vm.email_address=vm.user.email_address;
            toastr.options.closeButton = true;
            toastr.error(error.data.message,{timeOut: 5000});

        });
    }

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

      function getNotificationSetting(){
        document.getElementById('spinner2').style.display = 'Block';
        accountService.getNotificationSetting(vm.user.profile_id).then(function(response){

          if( response.data.status == "okay"){
            vm.notification = response.data.data;
            toastr.options.closeButton = true;
            //toastr.success(response.data.message,{timeOut: 5000});
          }
          document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
          document.getElementById('spinner2').style.display = 'None';
            //toastr.success(error.data.message,{timeOut: 5000});
        });
      }

      function setNotificationSetting(){

        var data =  {
          "user": vm.user.profile_id,
          "visits": vm.notification.visits,
          "connect_requests": vm.notification.connect_requests,
          "sms": vm.notification.sms,
          "email": vm.notification.email,
          "push": true,
        }
        document.getElementById('spinner2').style.display = 'Block';
        accountService.setNotificationSetting( data ,vm.user.profile_id).then(function(response){

          if( response.data.status == "okay"){
            toastr.options.closeButton = true;
            toastr.success(response.data.message,{timeOut: 5000});

          }
          document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
          document.getElementById('spinner2').style.display = 'None';
          toastr.error(error.data.message,{timeOut: 5000});

        });
      }
      getNotificationSetting();

      function activate() {
      //logger.info('Activated Account View');
    }

      function changeTab(tab){
        if(vm.changePasswordFlag){
          $cookies.remove("changePasswordFlag");
          if(vm.user.profile_complete == 1 && isFirstTimeFlag)
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
