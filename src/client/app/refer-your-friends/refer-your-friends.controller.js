(function() {
  'use strict';

  angular
    .module('app.referfriends')
    .controller('ReferFriendsController', ReferFriendsController);

  ReferFriendsController.$inject = ['logger','$rootScope','$cookies','referFriendsService','$filter','$scope'];
  /* @ngInject */
  function ReferFriendsController(logger,$rootScope,$cookies,referFriendsService ,$filter,$scope) {
    var vm = this;
    vm.title = 'ReferFriends';
    vm.refResponseObject={};
    vm.referFriend ={};
    vm.user={};
    vm.hideFields=false;
    vm.hideForm=true;
    vm.hideReferForm=false;
    vm.referFriend.references =[
               {
                reference_name : "",
                reference_mobile : null
               }];
    vm.emptyListFlag =false;
    if($cookies.get('isLoggedIn')){
      vm.hideFields=true;
    }
    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
    }
    vm.deleteReference =deleteReference;
    vm.showForm=showForm;
    vm.addReference =addReference;
    vm.sendReferFriendRequest =sendReferFriendRequest;
    function activate() {
      //logger.info('Activated Refer Your Friends View');
    }
     activate();


    function deleteReference(val){
      if(vm.referFriend.references.length > 0 ){
         vm.referFriend.references.pop();
      }
    }

    function showForm()
    {
      vm.hideReferForm=false;
      vm.hideForm=true;
      vm.referFriend.references=[];
    }

    function addReference(val){
      var reference={};
      reference.reference_name;
      reference.reference_mobile;
      vm.referFriend.references.push(reference);
    }
    vm.showerror=showerror;
    function showerror()
    {
       toastr.success("You have already empty object,Please Fill/Use this first.",{timeOut:5000})
    }


    function sendReferFriendRequest(form){
      if(form.$valid &&vm.referFriend.references.length >0){
        vm.hideReferForm=true;
         var data ={};
         if(vm.hideFields){
          data.user_name=vm.user.firstname;
          data.user_mobile =vm.user.phone_mobile;
         }else{
          data.user_name= vm.referFriend.user_name;
          data.user_mobile =vm.referFriend.user_mobile;
          }
          data.references =[];
          for(var i=0 ; i < vm.referFriend.references.length ; i++){
             var reference ={
                reference_name :  vm.referFriend.references[i].reference_name ,
                reference_mobile :  vm.referFriend.references[i].reference_mobile.replace("+91", "")
               }
                data.references.push(reference)
              }
        referFriendsService.sendReference(data).then(function(response){
            var error_string;
            if (typeof response.data.message === 'object' && response.data.message != null) {
                for (var key in response.data.message) {
                  var temp = response.data.message[key];
                  if (typeof temp === 'object' && temp != null) {
                    angular.forEach(temp,function(value,key1){
                        if (typeof temp[key1] === 'object' && temp[key1] != null) {
                          var str =  '"reference_name" '  + temp[key1].reference_name[0];
                          toastr.options.positionClass="toast-top-center";
                          toastr.error(str,{timeOut: 5000});
                        }else{
                           console.log("Error",temp[key1]);
                        }
                    })
                  }else{
                    console.log("Error",temp);
                  }
                 }

            }else{
              toastr.success(response.data.message,{timeOut: 5000});
            }
            if(response.data.status =="okay"){
              vm.hideForm=false;
              vm.refResponseObject=response.data;
              vm.referFriend.references = [];
            }
        }).catch(function(error){
          var error_string;
            if (typeof error.message === 'object' && error.message != null) {
                for (var key in error.message) {
                   error_string = '"'+ key +'" - '+ error.message[key];
                   toastr.options.positionClass="toast-top-center";
                   toastr.error(error_string,{timeOut: 5000});
                 }
            }else{
              toastr.error(error.message,{timeOut: 5000});
            }
        });
       }

       if(vm.referFriend.references.length <=0){
           vm.emptyListFlag =true;
       }
    }
                window.scrollTo(0,0);
  }
})();
