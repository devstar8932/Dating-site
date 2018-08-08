(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger','$cookies','$state','gettextCatalog'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger ,$cookies,
  $state,gettextCatalog) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.isBusy = true;
    $rootScope.showSplash = true;
    vm.languageChange = languageChange;
    vm.languaseselects = [{
      'id': 'mr',
      'value': 'Marathi'
    }, {
      'id': 'hi',
      'value': 'Hindi'
    }, {
      'id': 'en',
      'value': 'English'
    }];
    vm.languageUsed = $rootScope.languaseUsed;
    vm.openLeftMenu= openLeftMenu;
    vm.closeLeftMenuMobile = closeLeftMenuMobile;
    vm.goTo = goTo;
    vm.user ={};
    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
    }

     vm.isFullFooter = false ;
    if ($cookies.get('isLoggedIn')==='true') {
      vm.isFullFooter = true ;
    }

    vm.navline = {
      title: config.appTitle,
      text: 'Created by John Papa',
      link: 'http://twitter.com/john_papa'
    };

    function languageChange(id,value) {
      if (id != null) {
       /* $translate.use(id);*/
       gettextCatalog.setCurrentLanguage(id);
        $rootScope.languaseUsed =value;
        $cookies.put('languaseUsed' , value);
      }
      $rootScope.$emit("languageChanged");
    }

    // activate();
    //
    // function activate() {
    //  // logger.success(config.appTitle + ' loaded!', null);
    //   hideSplash();
    // }
    //
    // function hideSplash() {
    //   //Force a 1 second delay so we can see the splash.
    //   $timeout(function() {
    //     $rootScope.showSplash = false;
    //   }, 1000);
    // }

    function openLeftMenu(){
      $rootScope.$emit("sidebar");
    }
    function closeLeftMenuMobile(){
      $rootScope.$emit("sidebarClose")
    }

    function goTo(){
      if ($cookies.get('isLoggedIn')=== 'true') {
        $state.go("dashboard");
      }else{
        $state.go("home");
      }
    }

    vm.goToTop = function(){
       window.scrollTo(0,0);
    }

    $(window).scroll(function(event){
      var st = $(this).scrollTop();
      if(st >65){
         $('#header-Content').removeClass("header-up").addClass("header-down");
      }else{
          $('#header-Content').removeClass("header-down").addClass("header-up");
      }
    });

  }
})();
