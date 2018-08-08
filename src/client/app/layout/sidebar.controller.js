(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$state', 'routerHelper', '$mdSidenav',
  '$scope', '$cookies', '$rootScope', 'loginService', '$analytics', 'deviceDetector','partnerloginService'];
  /* @ngInject */
  function SidebarController($state, routerHelper, $mdSidenav, $scope,
  $cookies, $rootScope, loginService, $analytics, deviceDetector,partnerloginService) {
    var vm = this;
    var states = routerHelper.getStates();
    vm.isCurrent = isCurrent;
    vm.changeMenu = changeMenu;
    vm.openLeftMenu = openLeftMenu;
    vm.logOut = logOut;
    vm.partnerLogOut = partnerLogOut;
    var state = $state;
    vm.selectedMenu = state.current.name;
    vm.isLoggedInUser1 = true;
    vm.isParentLoggedInUser = false;
    vm.isLoggedInUser = false;
//    vm.decide = true;
//    vm.hide = hide;
    if((vm.selectedMenu === 'partner' || vm.selectedMenu === 'partnerlogin') && $cookies.get('isLoggedIn') === 'true'){
//      vm.decide = false;
//      vm.partnerDetailsShow = true;
      vm.isParentLoggedInUser = true;
      vm.isLoggedInUser1 = false;
      vm.isLoggedInUser = false;
      }
     else if((vm.selectedMenu === 'partner' || vm.selectedMenu === 'partnerlogin')){
      vm.decide = false;
      vm.partnerDetailsShow = true;
      }
     else if(vm.selectedMenu === 'partnerlogin' || vm.selectedMenu === 'partnerdashboard' || vm.selectedMenu === 'partnerlogout' || vm.selectedMenu === 'partnerdetails' || vm.selectedMenu === 'partnerchangepassword'){
      vm.isParentLoggedInUser = true;
      vm.isLoggedInUser1 = true;
      }
     else if($cookies.get('isLoggedIn') === 'true'){
      vm.isLoggedInUser = true;
      vm.isLoggedInUser1 = false;
      }
     else{
      vm.decide = true;
      vm.partnerDetailsShow = false;
//      m.isLoggedInUser1 = true;
      }

//    vm.isParentLoggedInUser = false;
//    vm.isLoggedInUser = false;
//    vm.isLoggedInUser1 = true;

    vm.isSmallView = false;
    if ($cookies.get('isLoggedIn') === 'true') {
        if(vm.selectedMenu == 'dashboard'){
          vm.isLoggedInUser = true;
          vm.isLoggedInUser1 = false;
          }
        else if(vm.selectedMenu == 'partnerdashboard'){
          vm.isParentLoggedInUser = true;
          vm.isLoggedInUser1 = false;
          }

    }

    if ($cookies.get('isLoggedIn') === 'false'){
          vm.isParentLoggedInUser = false;
          vm.isLoggedInUser1 = true;
          vm.isLoggedInUser = false;
          vm.decide = false;
          vm.partnerDetailsShow = true;
          }




    if (state.current.name === 'home') {
      vm.isSmallView = true;
      vm.decide = true;
    }




    activate();

    function activate() {
      getNavRoutes();
    }

    function getNavRoutes() {
      vm.navRoutes = states.filter(function(r) {
        return r.settings && r.settings.nav;
      }).sort(function(r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
    }

    function isCurrent(route) {
      if (!route.title || !$state.current || !$state.current.title) {
        return '';
      }
      var menuName = route.title;
      return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }


    if ($cookies.get("isSidenavOpen") != null && state.current.name != 'home') {
      vm.isSidenavOpen = $cookies.get("isSidenavOpen") == "true" ? true : false;
      var bodyElement = angular.element(document.querySelector('body'));
      vm.isSidenavOpen ? bodyElement.addClass('sidemenu-active') : bodyElement.removeClass('sidemenu-active');


    } else {
      vm.isSidenavOpen = false;
    }
    $rootScope.$on("sidebar", function() {
      if (vm.isSidenavOpen) {
        vm.isSidenavOpen = false;
        $cookies.put("isSidenavOpen", vm.isSidenavOpen);
      } else {
        vm.isSidenavOpen = true;
        $cookies.put("isSidenavOpen", vm.isSidenavOpen);
      }
      $mdSidenav('left').toggle();
      var bodyElement = angular.element(document.querySelector('body'));
      vm.isSidenavOpen ? bodyElement.addClass('sidemenu-active') : bodyElement.removeClass('sidemenu-active');

    });

    $rootScope.$on("sidebarClose", function() {
      var detectMobile = function() {
        if (window.innerWidth <= 800 && window.innerHeight <= 800) {
          return true;
        } else {
          return false;
        }
      };
      if (detectMobile() == true && vm.isSidenavOpen == true) {
        vm.isSidenavOpen = false;
        $cookies.put("isSidenavOpen", vm.isSidenavOpen);
        $mdSidenav('left').toggle();
      }
    });

    function openLeftMenu() {

      $rootScope.$emit("sidebar");
    }


    function changeMenu(id) {
      vm.selectedMenu = id;
//      vm.hide = "true";
       if (deviceDetector.isMobile()) {
          $rootScope.$emit("sidebar");
        }
    }

    function logOut() {

      loginService.logout().then(function(response) {
        var data = response.data;
        if (data.status == 'okay') {
          $cookies.remove("isLoggedIn");
          $cookies.remove("changePasswordFlag");
          $cookies.remove("User");
          $cookies.remove("registrationStep");
          $cookies.remove("registrationStepEnable");
          $cookies.remove("isNotNowEmail");
          $rootScope.isLoggedIn = false;
//          toastr.success(data.message, {
//            timeOut: 5000
//          });
          $state.go("login");
          $cookies.put("logoutWindowFlag", true);

          // Update Analytics
          clear_identity();
        } else {
          toastr.error(data.message, {
            timeOut: 5000
          });
        }
      }).catch(function(error) {
        console.log(error);

      });


    }


    function partnerLogOut() {
      var data = "";
      loginService.partnerLogout().then(function(response) {
        var data = response.data;
        if (data.status == 'okay') {
//          vm.isParentLoggedInUser = false;
//          vm.isLoggedInUser1 = true;
//          vm.isLoggedInUser = false;
//          vm.decide = false;
//          vm.partnerDetailsShow = true;

          $cookies.put("isLoggedIn", false);
          $cookies.remove("changePasswordFlag");
          $cookies.remove("User");
          $cookies.remove("registrationStep");
          $cookies.remove("registrationStepEnable");
//          $cookies.remove("isLoggedIn");
//          $cookies.remove("changePasswordFlag");
//          $cookies.remove("User");
//          $cookies.remove("registrationStep");
//          $cookies.remove("registrationStepEnable");
          $rootScope.isLoggedIn = false;
          toastr.success(data.message, {
            timeOut: 5000
          });



          $state.go("partnerlogout");
          $cookies.put("logoutWindowFlag", true);

          // Update Analytics
          clear_identity();
        } else {
          toastr.error(data.message, {
            timeOut: 5000
          });
        }
      }).catch(function(error) {
        console.log(error);

      });


    }

        function clear_identity() {
            // User Identity management
            // Identify if its shared computer, only then reset id
            // Currently we assume if its not mobile, it shared device
            // Using: https://github.com/srfrnk/ng-device-detector
            // https://web.wurfl.io/: needs license :(
            // TODO (megha.n.bodke@gmail.com)
            // We want to be better at predicting shared device.
            if (!deviceDetector.isMobile()) {
                // For mixpixel, guid
                // Below xforms to 1792901843.0 distinct id :(
                // And do not unset GA uid.
                // $window.ga('set', 'userId', ''); works for GA
                // $analytics.setUsername('');
                var uuid = guid();
                // Lets be consistent and use same random id across all
                // analytics platforms i.e. GA and mixpixel
                $analytics.setUsername(uuid);
            }
        }

        function guid() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }
          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
  }
})();
