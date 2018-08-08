(function() {
  'use strict';
  angular
  .module('app.core')
  .directive('uiSelectLabel',uiSelectLabel);

  /* @ngInject */
  function uiSelectLabel() {
    return {
      link: function(scope, element, attrs) {
        setTimeout(function() {
          if(element.children().hasClass("ng-not-empty")){
            element.addClass("md-input-has-placeholder"); 
          }else{
            setTimeout(function() {
              element.removeClass("md-input-has-placeholder");
            },100);
          }
        },100);
        element.bind('click propertychange keydown', function() {
          if(element.children().hasClass("ng-not-empty")){
            element.addClass("md-input-has-placeholder"); 
          }else{
            element.removeClass("md-input-has-placeholder");
          }
        });
        angular.element(element).bind('focusout', function() {
          if(element.children().hasClass("ng-not-empty")){
            element.addClass("md-input-has-placeholder"); 
          }else{
            element.removeClass("md-input-has-placeholder");
          }
        });   
      },
    }
  }
})();
