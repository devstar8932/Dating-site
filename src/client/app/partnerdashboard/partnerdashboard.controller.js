(function() {
  'use strict';

  angular
  .module('app.partnerdashboard')
//  .controller('CaterersController', CaterersController);
  .controller('PartnerDashboardController', PartnerDashboardController);

  PartnerDashboardController.$inject = ['logger','$rootScope','$cookies'];
  /* @ngInject */
  function PartnerDashboardController(logger,$rootScope,$cookies) {
    var vm = this;
    vm.title = 'Partner';

     activate();
     function activate() {
//        vm.partnerId = $cookies.get("partnerName");
        vm.partnerLink = "http://localhost:8000/home/?pid="+$cookies.get("partnerName");
//        vm.partnerId = $cookies.get("partnerName");
        }

    window.scrollTo(0,0);
//    vm.next_flow = {
//            partner: 'Personal_details',
//            partnerlogout: 'astro_details',
//            partnerlogin: 'family_details',
//            partnerdetails: 'upload_photo',
//            partnerdashboard: 'register_thanks'
//        };
  }


})();
