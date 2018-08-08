(function() {
  'use strict';

  angular
  .module('app.dashboard')
  .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['logger','$rootScope','$cookies',
  'dashboardService','inboxService','$state'];
  /* @ngInject */
  function DashboardController(logger,$rootScope,$cookies,dashboardService,
  inboxService,$state) {
    var vm = this;
    vm.title = 'Dashboard';
    vm.user = {};
    vm.dash_data={};
    vm.dashboard={};
    vm.completePercentage = 0;
    vm.email = { isComplete:true, value:null};
    vm.photo = { isComplete:true, value:null};
    vm.basic = { isComplete:true, value:null};
    vm.astro = { isComplete:true, value:null};
    vm.family = { isComplete:true, value:null};
    vm.personal = { isComplete:true, value:null};

    vm.changeview = changeview;
    vm.goTOInboxView = goTOInboxView;
    vm.dashboarddata = dashboarddata;
    vm.changeState = changeState;
    vm.sendConfirmEmail = sendConfirmEmail;
    vm.saveEmail = saveEmail;
    vm.checkEmail = checkEmail;
    vm.cancel =cancel ;
//    vm.isValidEmail = false;
    vm.isButtonState = true;
    vm.dash_data.welcome_gift = false;

    var myDate = new Date();
    var hrs = myDate.getHours();

    vm.greet;

    if (hrs < 12)
        vm.greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        vm.greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        vm.greet = 'Good Evening';

    if($cookies.get("User") != null){
      vm.user = JSON.parse($cookies.get("User"));
      if(vm.user.birth_date!=undefined){
      var numbers = vm.user.birth_date.match(/\d+/g);
      vm.user.birth_date = new Date(numbers[0], numbers[1] - 1, numbers[2]);}
      vm.email_address = vm.user.email_address;

    }


    function checkEmail(){
      var patt = new RegExp("^[a-zA-Z0-9._+-]+@[a-zA-Z]+\.[A-Za-z]{2,4}$");
      if(patt.test(vm.email_address)){
        vm.isButtonState = false;
        }
      else{
        vm.isButtonState = true;
        }
      }




    function dashboarddata(){
      dashboardService.dashboard().then(function(response){
        vm.dashboard = response.data.dashboard ;

        vm.dash_data = response.data;
        document.getElementById('spinner2').style.display = 'Block';
        angular.forEach(vm.dash_data.profile_state.incomplete_sections,function(item){
          if(item.section =="email"){
            vm.email.isComplete=false;
            vm.email.value=item.weightage;
          }else if(item.section =="photo"){
            vm.photo.isComplete=false;
            vm.photo.value=item.weightage;
          }else if(item.section =="basic"){
            vm.basic.isComplete=false;
            vm.basic.value=item.weightage;
          }else if(item.section =="astro"){
            vm.astro.isComplete=false;
            vm.astro.value=item.weightage;
          }else if(item.section =="family"){
            vm.family.isComplete=false;
            vm.family.value=item.weightage;
          }else if(item.section =="personal"){
            vm.personal.isComplete=false;
            vm.personal.value=item.weightage;
          }
        });
        if(vm.email.isComplete && vm.photo.isComplete &&vm.basic.isComplete &&vm.personal.isComplete &&vm.family.isComplete &&vm.astro.isComplete )
            vm.sectionCompleted =true;


        var patt = new RegExp("^[a-zA-Z0-9._+-]+@[a-zA-Z]+\.[A-Za-z]{2,4}$");
        if(patt.test(vm.email_address)){

          vm.isButtonState = false;
        }
        if( vm.email.isComplete==false && ($cookies.get("isNotNowEmail") == null || $cookies.get("isNotNowEmail") == false)) {
            $("#confirmEmail").modal('show');
        }
        toastr.options.closeButton = true;
        //toastr.success(response.data.message,{timeOut: 5000});
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        document.getElementById('spinner2').style.display = 'None';
        console.log(error);
      });
    }

    function changeState(){
      $state.go('confirm_email')
      }

    function saveEmail(email_address1)
    {
    var data = {
        email: email_address1
        }
        document.getElementById('spinner2').style.display = 'Block';
      dashboardService.saveEmail(data).then(function(response){
          if( response.data.status == "okay"){
            vm.user.email_address=email_address1;
            $cookies.put("User",JSON.stringify(vm.user));
            toastr.options.closeButton = true;
            toastr.success(response.data.message,{timeOut: 5000});
            }
            document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
            document.getElementById('spinner2').style.display = 'None';
            vm.email_address=vm.user.email_address;
            toastr.options.closeButton = true;
//            toastr.success(error.data.message,{timeOut: 5000});
            toastr.error(error.message.email,'Error');

//            logger.info("This Field is Undefined");
        });
    }

    function cancel() {
      $cookies.put("isNotNowEmail" ,true)
    }




    function sendConfirmEmail(email_address1)
    {
    var data = {
        email: email_address1
        }
        document.getElementById('spinner2').style.display = 'Block';
      dashboardService.sendConfirmEmail(data).then(function(response){
          if( response.data.status == "okay"){
            vm.user.email_address=email_address1;
            $cookies.put("User",JSON.stringify(vm.user));
            toastr.options.closeButton = true;
            toastr.success(response.data.message,{timeOut: 5000});
            }
          else{
             toastr.error(response.data.message);
            }
           document.getElementById('spinner2').style.display = 'None';
        }).catch(function(error){
            document.getElementById('spinner2').style.display = 'None';
            vm.email_address=vm.user.email_address;
            toastr.options.closeButton = true;
//            toastr.success(error.data.message,{timeOut: 5000});
            toastr.error("Error while sending mail, please contact us.",'Error');
//            logger.info("This Field is Undefined");

        });
    }


    function changeview(value)
    {

      $state.go('listview',({'typeview':value}))
    }
    function goTOInboxView(value,stage)
    {

      if(value == 'interest-received-list' && vm.dash_data.dashboard
      .received_requests_new > 0){
      inboxService.update_connect_request_count().then(function(response){
        }).catch(function(error){
          console.log(error);
        });
      }
      else if(value == 'photo-request-list' && vm.dash_data.dashboard
      .photo_requests_new > 0){
        inboxService.update_photo_upload_requests_count().then(function(response){
        }).catch(function(error){
          console.log(error);
        });
      }
      $cookies.put("selectTab" ,stage);
      $state.go('inbox')
    }

    function activate() {
      //logger.info('Activated Dashboard View');
//      var target = document.getElementById('confirmEmail');

    }

    activate();
    window.scrollTo(0,0);
  }
})();
