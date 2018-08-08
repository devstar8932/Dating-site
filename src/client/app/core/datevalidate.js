(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('datevalidater',date);
  /* @ngInject */
  function date() {
  	return {
       restrice: 'A',
       require: 'ngModel',
       scope: {
           datevalidater : "=",
           maxDate :"="
       },
       link: function(scope, element, attrs, ctrl) {
           angular.element(element).bind('blur', function() {
               var value = this.value;
               if(value!=null &&  (moment(value, 'dd/MM/yyyy').isValid() ||moment(value, 'dd-MM-yyyy').isValid() ) ){
                   // Valid input
                    var today = new Date();
                    var numbers = value.match(/\d+/g); 
                    var birthDate = new Date(numbers[2], numbers[1] - 1, numbers[0]);
                    var age = today.getFullYear() - birthDate.getFullYear();
                    var m = today.getMonth() - birthDate.getMonth();
                    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                      age--;
                    }
                    ctrl.$setValidity('maleField', true); 
                    ctrl.$setValidity('femaleField', true);       
                    ctrl.$setValidity('maxDate', true); 
                   if(scope.datevalidater =="Male" || scope.datevalidater == "male")
                    {
                      if(age < 21 || age > 50){
                        console.log("valid date" ,scope.datevalidater);
                          ctrl.$setValidity('maleField', false); 
                      }
                    }else if(scope.datevalidater =="Female" || scope.datevalidater == "female") {
                      if(age < 18 || age > 50){
                        ctrl.$setValidity('femaleField', false); 
                      } 
                    }
                    if(scope.maxDate !=null){
                      var tempDate =angular.copy(scope.maxDate);
                      var listNumber = tempDate.match(/\d+/g);
                      var maxDate = new Date(listNumber[2], listNumber[1] - 1, listNumber[0]);
                      if((birthDate.getTime() > maxDate.getTime()) && scope.maxDate != null && moment(scope.maxDate, 'dd/MM/yyyy').isValid() ){
                        ctrl.$setValidity('maxDate', false);  
                      }
                    }
                    ctrl.$setValidity('dateField', true);

               } else {
                   // Invalid input  
                    ctrl.$setValidity('dateField', false); 
                   console.log("invalid date");
                   angular.element(this).next().next().css('display','block');
                   /* 
                       Looks like at this point ctrl is not available,
                       so I can't user the following method to display the error node:
                       ctrl.$setValidity('currencyField', false); 
                   */                    
               }
           });              
       }            
   }
    
  }
})();
