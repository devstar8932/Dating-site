(function() {
  'use strict';

  angular
  .module('app.login')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$q', 'loginService', 'logger',
  '$state','$rootScope','$cookies', '$analytics','$scope','$location'];
  /* @ngInject */
  function LoginController($q, loginService, logger,$state,
  $rootScope,$cookies, $analytics,$scope,$location) {
    var vm = this;
    vm.title = 'Login';
    vm.user={remember_me:false};
    vm.isInvalidUserName=false;
    vm.login = true;
    vm.forgotPassword = false;
    vm.forgotUsername = false;
    vm.loginUser=loginUser;
    vm.requestToPassword=requestToPassword;
    vm.requestToUsername=requestToUsername;
    vm.checkLoginState=checkLoginState;
    vm.loginWindow =loginWindow;
    toastr.options.positionClass = "toast-top-center";

    vm.showPassfield = false;
    vm.showPass =false;
   // window.onSignIn = onSignIn;
    vm.logoutWindowFlag = true ;
    var bodyElement = angular.element( document.querySelector( 'body' ) );
    // bodyElement.removeClass('sidemenu-active');

    if($cookies.get("logoutWindowFlag") == 'true'){

       $cookies.remove("logoutWindowFlag");
       vm.logoutWindowFlag = false ;

    }


    function loginUser (loginForm){
      if(loginForm.$valid)
    {
     vm.user.method ="email";
     document.getElementById('spinner2').style.display = 'Block';
     loginService.login(vm.user).then(function(response) {
      var data = response.data;
      if(data.status== 'okay')
      {
        $rootScope.isLoggedIn = true;
        $cookies.put("isLoggedIn", true);
        $cookies.put("User", JSON.stringify(data.user));
        toastr.options.positionClass="toast-top-center";
//        toastr.success(data.message,{timeOut: 5000});


        if(data.user.profile_complete == 0){
          $state.go("registration",{fromLogin :1});
        }else if(data.user.first_login == true)
        {
          $cookies.put("changePasswordFlag", true);
          $state.go('account');
        }else if($cookies.get('redirectedURl') != null && $cookies.get('viewProfileID') != null){
          $state.go($cookies.get('redirectedURl') ,{"profile_id" : $cookies.get('viewProfileID')});
          $cookies.remove('viewProfileID');
          $cookies.remove('redirectedURl')
        }else if($cookies.get('redirectTo')){
          $location.url($cookies.get('redirectTo'));
          $cookies.remove('redirectTo');
        }else{
          $state.go('dashboard');
        }
      // Update Analytics
      $analytics.setUsername(data.user.profile_id);
     }else{
      vm.isInvalidUserName=true;
      toastr.options.closeButton = true;
//      toastr.options.positionClass = "toast-top-center";
//      toastr.error(response.message,{timeOut:5000});

    }
    document.getElementById('spinner2').style.display = 'None';
  }).catch(function(error) {

     vm.isInvalidUserName=true;
      toastr.options.closeButton = true;
      toastr.options.positionClass = "toast-top-center";
      toastr.error(error.data.message,{timeOut:5000});
      document.getElementById('spinner2').style.display = 'None';
  });

}else{
  angular.element('input.ng-invalid-required').focus();
  }
}

function requestToUsername(forgotUsername,value){
  if(forgotUsername.$valid){
    var data1 ={
          id_type : "mobile_number",
          id: value.replace("+91", ""),
      }
       document.getElementById('spinner2').style.display = 'Block';
      loginService.forgotUsername(data1).then(function(response) {
      var data = response.data;
      if(data.status == 'okay')
        {
          toastr.success(data.message,{timeOut: 5000});
       }else{
       toastr.options.positionClass = "toast-top-center";
       toastr.error(response.data.message,{timeOut: 5000});
      }
       document.getElementById('spinner2').style.display = 'None';
    }).catch(function(error) {
      toastr.error(error.message , {timeOut: 5000});
      document.getElementById('spinner2').style.display = 'None';
    });
 }
}

function requestToPassword(forgotPassword,value){
  if(forgotPassword.$valid){
    var id_type;
    var expression = /^[1-9][0-9]{9}$/
    var regex = new RegExp(expression);
    if(value.match(regex)){
        id_type = "mobile_number";
    }else{
      id_type = "email";
    }
    var data1={
      id_type : id_type,
      id : value
    }
    document.getElementById('spinner2').style.display = 'Block';
    loginService.forgotPassword(data1).then(function(response) {
    var data = response.data;
    if(data.status== 'okay')
      {
         vm.mobileNumber=null;
         $scope.formvalid.$setUntouched();
         $scope.formvalid.$setPristine();
         toastr.options.positionClass="toast-top-center";
         toastr.success(data.message,{timeOut: 5000});
     }else{
       toastr.options.positionClass = "toast-top-center";
       toastr.error(response.message,{timeOut: 5000});
   }
    document.getElementById('spinner2').style.display = 'None';
  }).catch(function(error) {
      if (typeof error.message === 'object' && error.message.id != null) {

       toastr.options.positionClass = "toast-top-center";
       toastr.error(error.message.id[0] , {timeOut: 5000});
     }else{
         toastr.error(error.data.message , {timeOut: 5000});
     }
      document.getElementById('spinner2').style.display = 'None';
  });
  }
}

function loginWindow(){
  vm.logoutWindowFlag = true ;
}

//Facebook Integration
 // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
         FB.login();
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    FB.api('/me', function(response) {
      console.log('Successful login for: ' ,response);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';

        $state.go('profile');
    });
  }

  //google Integration
 /* gapi.load('auth2', function() {//load in the auth2 api's, without it gapi.auth2 will be undefined
      gapi.auth2.init(
              {
                  client_id: '797468016697-m3ut285eic3rdgfib2i3g8u1vh5g552j.apps.googleusercontent.com'
              }
      );
      var GoogleAuth  = gapi.auth2.getAuthInstance();//get's a GoogleAuth instance with your client-id, needs to be called after gapi.auth2.init
      vm.onLogInButtonClick=function(){

          GoogleAuth.signIn().then(function(response){
              console.log(response);
               var  GoogleUser = GoogleAuth.currentUser.get();
               var profile =GoogleUser.getBasicProfile();
               console.log("profile",profile);
     }); }
  });
 function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
   }*/

  window.scrollTo(0,0);

}
})();
