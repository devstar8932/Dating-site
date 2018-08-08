(function() {
  'use strict';

  angular
  .module('app.partner')
  .controller('PartnerController',PartnerController);

  PartnerController.$inject = ['logger','$rootScope','$cookies','$location','partnerService','$anchorScroll','$state'];
  /* @ngInject */
  function PartnerController(logger,$rootScope,$cookies,$location, partnerService, $anchorScroll ,$state) {
    var vm = this;
    vm.title = 'partner';
    vm.check = check;
    vm.sendReferFriendRequest = sendReferFriendRequest;
//    var service = {
//      check: check;
//    };
//
//    return service;
   activate();
   function activate() {}



//   function activate() {
//      //logger.info('Activated ContactUs View');
//    }
//

//function sendReferFriendRequest(){
//  console.log("previous count value",vm.count)
//  vm.count=parseInt(vm.count)+1;
//  if(vm.count>=3){
//    $cookies.put("count",vm.count);
//    vm.resendPassLimit=true;
//  }
//  partnerService.sendPassword(vm.referFriend).then(function(response){
//    toastr.options.closeButton = true;
//    toastr.success(response.message,{timeOut: 5000});
//  }).catch(function(error){
//    toastr.error(error.message , {timeOut: 5000});
//  });
//}

//function sendReferFriendRequest(referForm){
//  if(referForm.$valid){
//    partnerService.friendRequest(vm.referFriend).then(function (data){
//           if(data.status == 'okay'){
////             $rootScope.isLoggedIn = true;
////             $cookies.put("isLoggedIn", true);
////             $state.go('partnerdashboard');
//               console.log("Registered Successfully !!!!");
//             }
//
//         })
//        }
//      }

    function sendReferFriendRequest(loginForm){
      if(loginForm.$valid){
//        partnerloginService.getLoginStatus(vm.user).then(function (data){
//           $state.go('partnerdashboard');
//           })
//         vm.user.method ="contact";
         partnerService.friendRequestData(vm.referFriend).then(function (data){
           if(data.status == 'okay'){
//             $rootScope.isLoggedIn = true;
//             $cookies.put("isLoggedIn", true);
//             $state.go('partnerdashboard');
               console.log("Registered Successfully !!!!");
               logger.info('Registered Successfully !!!!!');
             }

         })
      }
    }




   function check(homeForm){
      if(myForm.$valid){
        $state.go('partnerdetails');}

    }

    window.scrollTo(0,0);
   }
})();
