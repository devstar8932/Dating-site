(function() {
'use strict';

angular
.module('app.aboutUs')
.controller('AboutUsController', AboutUsController);

AboutUsController.$inject = ['logger','$rootScope','$cookies','$location','$state'];
/* @ngInject */
function AboutUsController(logger,$rootScope,$cookies,$location,$state) {
var vm = this;
vm.title = 'About Us';



function activate() {
//logger.info('Activated Account View');
}

activate();

window.scrollTo(0,0);  

}
})();
