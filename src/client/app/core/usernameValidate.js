(function() {
  'use strict';

  angular
  .module('app.core')
  .directive('username',username);

  var EMAIL_REGEXP=/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
  var PHONE_REGEXP = /^(\+91)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
  var value_REGEXP = /^[A-Za-z]+[A-Za-z0-9_]*$/;

  /* @ngInject */
  function username() {
    return {
      restrice: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        angular.element(element).bind('keyup paste', function() {
          var value = this.value;
          if(this.value.length > 0 )
            if(value.indexOf("@")!== -1 ){
              if (EMAIL_REGEXP.test(value)) {
                ctrl.$setValidity('phoneValid', true);
                ctrl.$setValidity('emailValid', true);
                ctrl.$setValidity('usernameValid', true);
              }else{
                ctrl.$setValidity('emailValid', false);
              }
            }else if( value.indexOf("+")=== 0 || !isNaN(value.substring(0,1))){
              console.log("mobile number")
              if (PHONE_REGEXP.test(value)) {
                ctrl.$setValidity('phoneValid', true);
                ctrl.$setValidity('emailValid', true);
                ctrl.$setValidity('usernameValid', true);
              }else{
                ctrl.$setValidity('phoneValid', false);
              }
            }else if(value_REGEXP.test(value)){
              ctrl.$setValidity('phoneValid', true);
              ctrl.$setValidity('emailValid', true);
              ctrl.$setValidity('usernameValid', true);
            }else {
              ctrl.$setValidity('usernameValid', false);
            }
          });
      }
    }
  }
})();
