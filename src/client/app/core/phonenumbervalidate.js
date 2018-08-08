(function() {
  'use strict';
  angular
  .module('app.core')
  .directive('phone',phone);
  var PHONE_REGEXP = /^(\+91)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
  /* @ngInject */
  function phone() {
    return {
      restrice: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ctrl) {
        angular.element(element).bind({
          keydown: function(e) {
            if (e.shiftKey === true ) {
              if (e.which == 9) {
                return true;
              }
              if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 45) {
                return true;
              }
              return false;
            }
            if(e.ctrlKey===true){
              if(e.keyCode == 86 || e.keyCode == 88 || e.keyCode == 67 || e.keyCode == 65){
                return true
              }
            }
            if (e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 45) {
              return true;
          }
          if (e.which > 57) {
            return false;
          }
          if (e.which==32) {
            return false;
          }
          if (this.value.length <= 9) {
            return true;
          }else{
            return false;
          }
          return true;
        }
      });
      angular.element(element).bind('change propertychange keyup paste focus', function() {
        var value = this.value;
        if (value.indexOf('+91') === 0) {
          this.value.replace("+91",'');
        }
        if (this.value.length > 10) {
          this.value =this.value.substring(0, 10);
        } 

        if(PHONE_REGEXP.test(value)) {
          // Valid input
          ctrl.$setValidity('phoneField', true); 
          angular.element(this).next().next().css('display','none');  
        }else{
          // Invalid input  
          ctrl.$setValidity('phoneField', false); 
          angular.element(this).next().next().css('display','block');
        }
      });     
      angular.element(element).bind('focus', function() {
        if(element.parent().children('span').length == 0) {
          var newSpan = $("<span ></span>");
          element.before(newSpan);
        }
        element.parent().find("span").addClass("country-code");
        element.parent().find("input").addClass("country-code-input")
      });
      angular.element(element).bind('focusout', function() {
        if(!PHONE_REGEXP.test(this.value)){
          element.parent().find("span").removeClass("country-code");
          element.parent().find("input").removeClass("country-code-input")
        }
      });          
    }            
  }
}
})();
