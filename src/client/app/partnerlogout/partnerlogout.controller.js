(function() {
  'use strict';

  angular
  .module('app.partnerlogout')
//  .controller('CaterersController', CaterersController);
  .controller('PartnerLogoutController', PartnerLogoutController);

  PartnerLogoutController.$inject = ['logger','$rootScope','$cookies','$state'];
  /* @ngInject */
  function PartnerLogoutController(logger,$rootScope,$cookies,$state) {
    var vm = this;
    vm.title = 'Partner';
    window.scrollTo(0,0);
    vm.loginWindow = loginWindow;
    vm.logoutWindowFlag = true;

    function loginWindow(){
      $cookies.put("isLoggedIn", false);
      $state.go('partnerlogin');
      }
//    vm.next_flow = {
//            partner: 'partner',
//            partnerlogout: 'astro_details',
//            partnerlogin: 'partnerdashboard',
//            partnerdetails: 'partnerdetails',
//            partnerdashboard: 'partnerdashboard'
//        };
//    vm.back_flow = {
//            upload_photo: 'family_details',
//            family_details: 'astro_details',
//            astro_details: 'Personal_details',
//            Personal_details: 'basic_detail'
//        };

  }


})();
