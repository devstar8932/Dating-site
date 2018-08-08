(function() {
  'use strict';

  angular
      .module('app.partnerdetails')
      .controller('PartnerDetailsController', PartnerDetailsController);

  PartnerDetailsController.$inject = ['$scope','$state','logger','$rootScope','$cookies','$location', '$anchorScroll','partnerdetailsService','dataset','$filter','$timeout','$mdDialog'];
  /* @ngInject */
  function PartnerDetailsController($scope,$state,logger,$rootScope,$cookies,$location, $anchorScroll,partnerdetailsService,dataset ,$filter, $timeout ,$mdDialog) {
    var vm = this;
    vm.title = 'PartnerDetails';
    vm.changeContent = changeContent;
    window.scrollTo(0,0);
//    vm.next_flow = {
//            partner: 'Personal_details',
//            partnerlogout: 'astro_details',
//            partnerlogin: 'family_details',
//            partnerdetails: 'upload_photo',
//            partnerdashboard: 'register_thanks'
//        };

//    vm.changepassword = changepassword;

//    if($cookies.get("User")!=null){
//      vm.user = JSON.parse($cookies.get("User"));
//    }else{
//      $state.go("login");
//    }


    activate();

        function activate() {
        angular.element(document).ready(function() {
        $('textarea, input').change(function(){
          // changeContent(this.name,this.value)
         })
       });
      partnerdetailsService.getProfile().then(function(response){
        vm.user = angular.copy(response.data);
        vm.user.account_name = vm.user.account_name
        vm.user.email_address = vm.user.email
        vm.user.bank_name = vm.user.bank_name
        vm.user.bank_ifsc = vm.user.bank_ifsc
        vm.user.account_number = vm.user.account_number


//        if(vm.user.height!=null){
//        vm.user.height=parseInt(vm.user.height);}
//        if(vm.user.income!=null){
//          vm.user.income = parseInt(vm.user.income);
//        }
	      $cookies.put("User",JSON.stringify(vm.user));
//        var numbers = vm.user.birth_date.match(/\d+/g);
//        vm.user.birth_date = $filter('date')(new Date(numbers[0], numbers[1] - 1, numbers[2]), "dd/MM/yyyy");
      }).catch(function(error){
        console.log(error);
      });

    }

    $scope.changeContent1 = function( key , value){
     changeContent(key,value);
   }

       function changeContent(key,value){
      var str;
      if (value !=undefined && value != "" ) {
        if (isNaN(value)) {
          str = '{"'+ key + '" : "' + value.trim() +'"}';
        }else{
          str = '{"'+ key + '" : "' + value +'"}';
        }
        var data=JSON.parse(str);
          partnerdetailsService.updateProfile(data).then(function(response){
          if(response.status === "okay"){
            //toastr.success(response.message,{timeOut: 5000});
            $cookies.put("User",JSON.stringify(vm.user));
            logger.info(response.message);

          }else{

          }

        }).catch(function(error){
          console.log(error);
        });
      }
    }




//  function changePassword(newPassword,confirmPassword){
//    if(newPassword != confirmPassword){
//      //message("please enter correct confirm password")
//      }
//    else{
////       var data ={
//////          current_password: vm.passwordObj.currentPassword,
////          new_password:vm.credentials.newPassword,
////          confirm_new_password:vm.credentials.confirmPassword
////        }
////        partnerdetailsService.changePassword(data).then(function(response){
////          if(response.data.status =="okay"){
////             $state.go('partnerdetails');
////             }
////        });
//
//      }
////     }

//  function changepassword(newPassword,confirmPassword){
//    if(newPassword != confirmPassword){
//      }
//    else{
//         var data ={
////          current_password: vm.passwordObj.currentPassword,
//          new_password:newPassword,
//          confirm_new_password:confirmPassword
//        }}}
  }


})();





