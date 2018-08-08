(function() {
  'use strict';

  angular
    .module('app.payment')
    .controller('PaymentController', PaymentController);

  PaymentController.$inject = ['logger','$rootScope','$cookies','$state','paymentService','$mdDialog','$filter','$scope','generalService']
  /* @ngInject */
  function PaymentController(logger,$rootScope,$cookies,$state,paymentService,$mdDialog ,$filter,$scope,generalService) {
    var vm = this;
    vm.title = 'Payment';
    vm.transaction ={};
    vm.plansList = [];

    vm.getTransactions =getTransactions;
    vm.selectedIndex = 0;
    vm.buyNow = buynow;
    vm.getPaymentPrice=getPaymentPrice;
    vm.saveTransaction=saveTransaction;
    vm.showModel =showModel;
    vm.todayDate =$filter('date')(new Date(), "dd/MM/yyyy");
    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
      if(vm.user.birth_date != null){
        var numbers =vm.user.birth_date.match(/\d+/g);
        vm.user.birth_date = new Date(numbers[0], numbers[1] - 1, numbers[2]);
      }
     vm.transaction.profile_id = vm.user.profile_id;
    }

    vm.isLoggedInUser = false ;
    vm.payment_gateway = false;
    if ($cookies.get('isLoggedIn')==='true') {
       vm.isLoggedInUser = true ;
        if ($cookies.get('payment-gateway') === 'true') {
           vm.payment_gateway = true;
           $cookies.remove('payment-gateway') ;
           getTransactions();
        }
    }
        function buynow(plan) {
//            vm.Contact.transaction_date = $filter('date')(vm.Contact.transaction_date, "dd-MM-yyyy")
//            vm.Contact.payment_made = 100;
            var my_plan = {'plan': plan.id};
            if ($cookies.get('isLoggedIn')==='true') {
              $cookies.put('payment-gateway', true);
            }
            return paymentService.buynow(my_plan).then(function (data) {
                vm.status = data;
                logger.info('Response'+data);
            });
        }

    function getTransactions(){
      document.getElementById('spinner2').style.display = 'Block';
      paymentService.getTransactions().then(function(response){
           vm.transactionList = response.data.list;
           if( vm.transactionList.length > 0 && vm.payment_gateway  ){
             vm.selectedIndex = 2 ;
             vm.lastPayment = vm.transactionList[0] ;
           }
           vm.transactionList_count = vm.transactionList.length;
           document.getElementById('spinner2').style.display = 'None';
      }).catch(function (error) {
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }

   function getPaymentPrice(data,text)
   {
    return generalService.getIntegerResult(data,text);
   }

     function saveTransaction(myForm){
      if(myForm.$valid)
      {
      var numbers = vm.transaction.transaction_date.match(/\d+/g);
      var dateString =  $filter('date')(new Date(numbers[2], numbers[1] - 1,
         numbers[0]), "dd-MM-yyyy") ;
      var data ={
         profile_id : vm.transaction.profile_id,
         transaction_date: dateString  ,
         bank_name: vm.transaction.bank_name,
         plan : vm.transaction.payment_made.id,
         payment_made : vm.transaction.payment_made.actual_price,
         credits_granted: 0,
         interests_granted: 15,
         transaction_number: vm.transaction.transaction_number?vm.transaction
         .transaction_number:''

      }
      document.getElementById('spinner2').style.display = 'Block';
      paymentService.saveTransaction(data).then(function(response){
          if(response.data.status=== "okay"){
             $("#savePayment").modal('toggle');
              vm.transaction ={};
              $scope.myForm.$setUntouched();
              $scope.myForm.$setPristine();
              if(vm.user !=null)
              vm.transaction.profile_id = vm.user.profile_id;
              toastr.options.closeButton = true;
              toastr.success(response.data.message,{timeOut: 5000});
           }else{
              toastr.options.closeButton = true;
              toastr.error(response.data.message,{timeOut: 5000});
           }
           document.getElementById('spinner2').style.display = 'None';
      }).catch(function (error) {
        document.getElementById('spinner2').style.display = 'None';
        console.log(error);
      });
      }
    }


    function showModel(ev){
      $mdDialog.show({
        //controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
       // fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };

    function getPaymentPlans(){
       document.getElementById('spinner2').style.display = 'Block';
       paymentService.getPaymentPlans().then(function(response){
           if(response.data.status=== "okay"){
              vm.plansList = response.data.plan_details;
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-top-center';
              //toastr.success("Successfully given Payment Plans",{timeOut: 5000});
           }else{
              toastr.options.closeButton = true;
              toastr.error("Error",{timeOut: 5000});
           }
           document.getElementById('spinner2').style.display = 'None';
      }).catch(function (error) {
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }

    function activate() {
      //logger.info('Activated payment View');
    }
     activate();
     getPaymentPlans();
     window.scrollTo(0,0);
  }
})();
