(function() {
  'use strict';

  angular
    .module('app.logout')
    .controller('LogoutController', LogoutController);

  LogoutController.$inject = ['logger','$rootScope','$cookies'];
  /* @ngInject */
  function LogoutController(logger,$rootScope,$cookies) {
    var vm = this;
    vm.title = 'Logout';
     
   
  
  }
})();
