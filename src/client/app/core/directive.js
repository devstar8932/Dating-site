(function() {
  'use strict';
  angular
  .module('app.core')
  .directive('focus',focus);
  function focus($timeout) {
  	console.log("inside directive")
		return {
			scope : {
				trigger : '@focus'
			},
			link : function(scope, element) {
				scope.$watch('trigger', function(value) {
					if (value === "true") {
						$timeout(function() {
							element[0].focus();
						});
					}
				});
			}
		};
	}
  })();


(function(){
	angular
  .module('app.core')
  .directive('open',open)
  .directive('inputmask', function() {
       return {
           require: "ngModel",
           link: function (scope, elem, attr, ctrl) {
               $(elem).inputmask();
              // console.log("inputmask");
           }
       };
   });
  function open($timeout){
  	console.log("Under ui select open directive")
   return {
    require: 'uiSelect',
    restrict: 'A',
    link: function($scope, el, attrs, uiSelect) {
      var autoopen = true;
      angular.element(uiSelect.focusser).on('focus', function() {
        if (autoopen) {
          uiSelect.activate();
        }
      });

      // Disable the auto open when this select element has been activated.
      $scope.$on('uis:activate', function() {
        autoopen = false;
      });

      // Re-enable the auto open after the select element has been closed
      $scope.$on('uis:close', function() {
        autoopen = false;
        $timeout(function() {
          autoopen =true;
        }, 250);
      });
    }
  };
}
})();
