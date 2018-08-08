(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('FooterController', FooterController);

  FooterController.$inject = ['$state','$rootScope','$scope','dataset'];
  /* @ngInject */
  function FooterController($state,$rootScope,$scope,dataset) {

      var vm = this;

      vm.cities = dataset.Cities();
      vm.casts = dataset.caste();
      $rootScope.$on('languageChanged',function(event){
          vm.cities = dataset.Cities();
          vm.casts = dataset.caste();
      });

      vm.redirectTOCaste = function(value){
          $('#casteModal').modal('hide');
         $('body').removeClass('modal-open');
          $("body").removeAttr("style");
        $('.modal-backdrop').remove();
        $rootScope.casteParam = value;
        var goTO = value +"-matrimony-site-free-registration-"+ $rootScope.cityParam ; 
        $state.go("home", { otherState : goTO } );        
      }
      vm.redirectTOCity = function(value){
        $('#casteModal').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $("body").removeAttr("style");
        $rootScope.cityParam = value ;
        var goTO = $rootScope.casteParam +"-matrimony-site-free-registration-"+ value ; 
        $state.go("home", { otherState : goTO })        
      }
  }
})();
