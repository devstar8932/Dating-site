(function() {
  'use strict';

  angular
  .module('app.home')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$q', 'homeService', 'paymentService', 'logger', '$state', '$filter', 'generalService', 'dataset', '$rootScope', '$timeout','$scope','$cookies','$stateParams','gettextCatalog','$location'];
  /* @ngInject */
  function HomeController($q, homeService, paymentService, logger, $state, $filter, generalService, dataset, $rootScope, $timeout,$scope,$cookies,$stateParams,gettextCatalog,$location) {
    var vm = this;
    vm.news = {
      title: 'lagnachibolni',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    $('[data-toggle="popover"]').popover();
    vm.messageCount = 0;
    vm.search ={};
    vm.search.gender="Male";
    vm.people = [];
    vm.title = 'Dashboard';
    vm.bdayvalidFlag = false;
    vm.login = login;
    vm.selectedCardId = 1;
    vm.plansList = [];
    vm.selectedMatId ='mat1';
    vm.user = {
      "gender": "Female"
    };
    vm.isUserNamePresent = false;

    //functions
    vm.languageChange = languageChange;
    vm.goToPayment=goToPayment;
    vm.selectThis = selectThis;
    vm.selectThisMat = selectThisMat;
    vm.submit = submit;
    vm.isvalideDate = isvalideDate;
    vm.checkUsername = checkUsername;
    vm.swipeMat = swipeMat;
    vm.swipe = swipe;
    vm.goToSearch=goToSearch;
    vm.openLeftMenu = openLeftMenu;
    vm.ageLimit =18;
    vm.ageError = "";
    vm.isInvalidAgeFlag=false;
    vm.isInvalidAgeFlag2=false;
    vm.checkValidAge1 = checkValidAge1;
    vm.checkValidAge2 = checkValidAge2;

    vm.search.gender="Male";
    vm.casts = dataset.caste();
    vm.ageList = dataset.age();

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
    vm.bannerSlides = [{
      text1: 'We help you ',
      text2: 'find your ',
      textStrong: 'life partner',
      id: 0
    }/*, {
      text1: 'Lorem Ipsu ',
      text2: 'dolor sit ',
      textStrong: 'amet consec',
      id: 1
    },
    {
      text1: 'Nisi elit ki ',
      text2: 'sint dolo ',
      textStrong: 'culpa qui',
      id: 2
    }*/];

    vm.welComeText =false;
    vm.casteParam = "";
    vm.cityParam = "";
    if($stateParams.otherState !=null && $stateParams.otherState.length >10 ){
      var str = angular.copy($stateParams.otherState) ;
      if(str.indexOf("-matrimony-site-free-registration-") !=-1){
        vm.welComeText = true;
        vm.casteParam = str.split("-matrimony-site-free-registration-")[0];
        vm.cityParam = str.split("-matrimony-site-free-registration-")[1];
      }
    }
    function languageChange(id,value) {
      if (id != null) {
       /* $translate.use(id);*/
       gettextCatalog.setCurrentLanguage(id);
        $rootScope.languaseUsed = value;
        $cookies.put('languaseUsed' , value);
      }
      vm.casts = dataset.caste();
      $rootScope.$emit("languageChanged");
    }

    function selectThis(val) {
      vm.selectedCardId = val;
    }

    function selectThisMat(val) {
      vm.selectedMatId = val;
    }

    function swipeMat(matId) {
      vm.selectedMatId = matId;
    };

    function swipe(Id) {
      vm.selectedCardId = Id;
    };


    function checkValidAge1()
    {
      console.log("Gender",vm.search.gender);
      if (vm.search.gender == "Female") {
        vm.ageLimit = 21;
      }else{
        vm.ageLimit = 18;
      }

      if(vm.search.age1 < vm.ageLimit )
      {
        vm.ageError = "Age must be greater than "+ vm.ageLimit +".";
        vm.isInvalidAgeFlag=true;
      }else{
        vm.isInvalidAgeFlag=false;
      }
      if (vm.search.age2 != undefined) {
        if(vm.search.age2 < vm.search.age1){
          vm.ageError = "Age must be less than "+ vm.search.age2 +".";
          vm.isInvalidAgeFlag=true;
        }
      }
    }
    function checkValidAge2()
    {
      if (vm.search.gender == "Female") {
        vm.ageLimit = 21;
      }else{
        vm.ageLimit = 18;
      }
      if(vm.search.age2 < vm.search.age1){
        vm.isInvalidAgeFlag2=true;
      }else{
        vm.isInvalidAgeFlag2=false;
      }

    }

    function submit(registerForm) {
      if (registerForm.$valid) {
        var numbers = vm.user.bday.match(/\d+/g);
        var birthdate = numbers[2]+"-"+numbers[1]+"-"+numbers[0];
        var data = {
          emailid: vm.user.emailid,
          firstname: vm.user.firstname,
          lastname: vm.user.lastname,
          gender: vm.user.gender,
          phone_mobile: vm.user.phone_mobile,
          bday: birthdate,
          cast: vm.user.cast
        }
        document.getElementById('spinner2').style.display = 'Block';
        homeService.registerUser(data).then(function(response) {
          if (response.status == "okay") {
            data.profile_id = response.profile_id;
            if(response.profile_id!=undefined){
              data.id = parseInt(response.profile_id.replace("LB",""));}
              $cookies.put("User",JSON.stringify(data));
              toastr.options.closeButton = true;
              toastr.success(response.message, {
                timeOut: 5000
              });
              $state.go('registration', {
                fromLogin: 1
              });
            }
            document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error) {
          console.log(error);
        });
      }
    }

    function login() {
      $state.go('login');
    }

    function goToPayment(){
    if ($cookies.get('isLoggedIn')==='true') {
       $state.go("payment");
    }else{
      toastr.options.positionClass = "toast-top-center";
      toastr.error("Please login to proceed further.",{timeOut:5000});
      $cookies.put("redirectTo",'/payment');
      $location.path('/login');
      //$state.go("login");
    }
    }

    function isvalideDate() {
      var m = moment(vm.user.bday, 'DD/MM/YYYY');
      if (vm.user.bday != null && m.isValid()) {
        var today = new Date();
        var str = $filter('date')(vm.user.bday, "yyyy/MM/dd")
        var birthDate = new Date(str);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (vm.user.gender === "Male") {
          if (age >= 21 && age <= 50) {
            vm.bdayvalidFlag = false;
          } else {
            vm.bdayvalidFlag = true;
          }
        } else {
          if (age >= 18 && age <= 50) {
            vm.bdayvalidFlag = false;
          } else {
            vm.bdayvalidFlag = true;
          }
        }
      }
    }

    function  goToSearch(){
      $cookies.put("searchData",JSON.stringify(vm.search));
      if ($cookies.get('isLoggedIn')==='true') {
        $state.go('search');
      }else{
        toastr.options.positionClass = "toast-top-center";
        toastr.error("Please login to proceed further.",{timeOut:5000});
        $cookies.put("redirectTo",'/search');
        $location.path('/login');
        //$state.go("login");
      }

    }

    function checkUsername() {
      if (vm.user.emailid != undefined) {
        var data = {
          "user_id": vm.user.emailid
        }
        homeService.checkUsername(data).then(function(response) {
          if (response.status == "okay") {
            vm.isUserNamePresent = false;
          } else {
            vm.isUserNamePresent = true;
          }
        }).catch(function(error) {
          console.log(error);
        });
      }
    }

  //Payment Plans taken
  function getPaymentPlans() {
    paymentService.getPaymentPlans().then(function(response) {

      if (response.data.status === "okay") {
        vm.plansList = response.data.plan_details;
//        if (vm.plansList.length > 3) {
//          vm.plansList.splice(3);
//        }
        toastr.options.closeButton = true;
        // toastr.success("Successfully given Payment Plans", {
        //   timeOut: 5000
        // });
      } else {
        toastr.options.closeButton = true;
        toastr.success("error", {
          timeOut: 5000
        });
      }
      scrollReveal();
    }).catch(function(error) {
      console.log(error);
    });
  }

  getPaymentPlans();

  function scrollReveal() {
    $timeout(function() {
      window.sr = ScrollReveal({ mobile: false });

      sr.reveal('.sr-perfect-match', {
        duration: 600,
        scale: 0.5,
        distance: '0px'
      }, 100);
      sr.reveal('.sr-best-matrimonial-1', {
        duration: 600,
        scale: 0.5,
        distance: '500px',
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 200,
          left: 0
        }
      }, 100);
      sr.reveal('.sr-best-matrimonial-2', {
        duration: 600,
        scale: 0.5,
        distance: '500px',
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 200,
          left: 0
        }
      }, 100);
      sr.reveal('.sr-price-item', {
        duration: 600,
        scale: 0.5,
        distance: '500px',
        origin: 'right',
        viewOffset: {
          top: 0,
          right: 0,
          bottom: 200,
          left: 0
        }
      }, 100);
      sr.reveal('.sr-match-slide', {
        duration: 600,
        scale: 0.5,
        distance: '0px'
      }, 100);

    }, 100);
  }

  $('#header').affix({
    offset: {
      top: 800
    }
  });

  function openLeftMenu() {
    $rootScope.$emit("sidebar");
  }
  vm.filterOnGenderForAge1 = filterOnGenderForAge1;
  vm.filterOnGenderForAge2 = filterOnGenderForAge2;
  function filterOnGenderForAge1(item){
    if(vm.search.gender =="Male"){
      return item >= 20  ;
    }else{
      return item >= 18  ;
    }
  }
  function filterOnGenderForAge2(item){
    if(vm.search.gender =="Male"){
      return item >= 21  ;
    }else{
      return item >= 19  ;
    }
  }
  window.scrollTo(0,0);

}
})();
