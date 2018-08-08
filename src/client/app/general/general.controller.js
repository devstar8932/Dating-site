(function() {
  'use strict';

  angular
    .module('app.general')
    .controller('GeneralController', GeneralController);

  GeneralController.$inject = ['logger','$rootScope','$cookies','$location', '$anchorScroll','generalService'];
  /* @ngInject */
  function GeneralController(logger,$rootScope,$cookies,$location, $anchorScroll,generalService) {
    var vm = this;
    vm.title = 'FAQ';
    vm.user ={};
    if($cookies.get("User")!=null){ 
      vm.user = JSON.parse($cookies.get("User"));
      var numbers =vm.user.birth_date.match(/\d+/g);
      vm.user.birth_date = new Date(numbers[0], numbers[1] - 1, numbers[2]);
    }
    activate();

    function activate() {
      //logger.info('Activated faq View');
    }

      
  }
})();
