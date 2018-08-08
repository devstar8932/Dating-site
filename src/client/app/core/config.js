(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-top-center';
  }

  var config = {
    appErrorPrefix: '[lagnachibolni Error] ',
    appTitle: 'lagnachibolni'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider','$httpProvider','$urlRouterProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider ,$httpProvider ,$urlRouterProvider) {

    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(false);
    }
    $urlRouterProvider.otherwise('/home');
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
  }

  core.config(interceptorConfig);

  interceptorConfig.$inject = ['$httpProvider'];
  /* @ngInject */
  function interceptorConfig($httpProvider) {


  $httpProvider.interceptors.push(httpInterceptor);

  function httpInterceptor($q, $rootScope ,$cookies ,$location) {
    return {
      request : function(config) {
        // if(config.method !="GET" )
//         document.getElementById('loader').style.display = 'Block';
        return config || $q.when(config)

      },
      response : function(response) {
      //  document.getElementById('loader').style.display = 'None';
        return response || $q.when(response);
      },
      responseError : function(response) {
        // document.getElementById('loader').style.display = 'None';
         if (response.status == 403) {
              toastr.options.preventDuplicates =true;
              toastr.options.positionClass = "toast-top-center";
              toastr.error("Please login to proceed further.",{timeOut:5000});
              //window.location.href="/login";
              $cookies.remove("isLoggedIn");
              $cookies.remove("changePasswordFlag");
              $cookies.remove("User");
              $cookies.remove("registrationStep");
              $cookies.remove("registrationStepEnable");
              $cookies.remove("isNotNowEmail");
              $cookies.put("redirectTo",$location.url());
              $location.path('/login');
          }
        return $q.reject(response);
      }
    };
  }
  }

  core.run(appStart);

  appStart.$inject = ['$rootScope','$state','$cookies','$timeout' ,'searchService','$location','gettextCatalog','listviewservice'];
  /* @ngInject */
  function appStart( $rootScope,$state,$cookies ,$timeout ,searchService,$location,gettextCatalog,listviewservice) {
      if ($cookies.get('languaseUsed') === 'Marathi') {
        gettextCatalog.setCurrentLanguage('mr');
        $rootScope.languaseUsed = "Marathi" ;
      } else {
        gettextCatalog.setCurrentLanguage('en');
        $rootScope.languaseUsed = "English" ;
      }
      $rootScope.casteParam ="Marathi";
      $rootScope.cityParam = "Pune";
      $rootScope.loaderFun = function (){
        document.getElementById('loader').style.display='Block';
        setTimeout(function () {
        document.getElementById('loader').style.display='none';
        },3000);
      }
      var state = $state ;
      $timeout(function(){
        if ($cookies.get('payment-gateway') === 'true') {
          $state.go("payment");
        } else if(state.current.name =='login' || state.current.name == 'home'){

          if($cookies.get('isLoggedIn')==='true' ){
            $state.go("dashboard");
          }else if(state.current.name=='registration_success'){
            if($cookies.get('isLoggedIn')!='true'){
              $state.go("login");
            }else{
	          $state.go("dashboard");
	        }
          }else{
            $rootScope.isLoggedIn = false;
          }
        }else if(state.current.name =='profile' || state.current.name == 'inbox' ||state.current.name =='outbox' || state.current.name == 'dashboard' ||state.current.name=='account'){
              if($cookies.get('isLoggedIn') !='true' ){
                 $state.go("login");
              }
        }else if(state.current.name == 'viewprofile') {
           if($cookies.get('isLoggedIn') !='true' ){
                 $state.go("login");
                 $cookies.put('redirectedURl',"viewprofile");
                 $cookies.put('viewProfileID',state.params.profile_id);
              }
        }
      },100);

      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
        document.getElementById('spinner2').style.display = 'Block';
        if(toState.name == 'login' || toState.name == 'home'){
          $rootScope.isFullFooter = true;
        }else{
          $rootScope.isFullFooter = false;
        }
        if(toState.name !='search' && toState.name != 'viewprofile'){
          searchService.clearLocalStorage();
        }
        if(toState.name !='listview' && toState.name != 'viewprofile'){
          listviewservice.clearLocalStorage();
        }

        var isToSearch = toState.name == 'account';
        if($cookies.get("User")!=null){
          var user = JSON.parse($cookies.get("User"));
        }
        if($cookies.get("changePasswordFlag") == "true" && !isToSearch){
            $cookies.remove("changePasswordFlag");
            if($cookies.get("User")!=null){

              if( user.profile_complete == 0){
                //event.preventDefault();
                $state.go("registration",{fromLogin :1});
              }
            }
            document.getElementById('spinner2').style.display = 'None';
          }
        var isToRegister = toState.name == 'registration';
        if(user!=null && user.profile_complete == 0 && !isToRegister){
                //event.preventDefault();
          if(toState.name =='profile' || toState.name == 'inbox' || toState.name =='outbox' || toState.name == 'dashboard' ||toState.name=='account') {
            $location.url('registration/1');
          }

        }

      });
      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
          if (toState.resolve) {
               $timeout(function(){
                  document.getElementById('spinner2').style.display = 'None';
               },500);
         };
      });
  }

})();
