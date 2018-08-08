(function() {
  'use strict';

  angular
  .module('app.viewprofile')
  .controller('ViewProfileController', ViewProfileController);

  ViewProfileController.$inject = ['logger','$rootScope','$stateParams',
  '$state','$scope','$cookies','$location', '$anchorScroll','viewProfileService',
  'profileService','dataset','profileViewService','$mdDialog'];
  /* @ngInject */
  function ViewProfileController(logger,$rootScope,$stateParams,$state,$scope,
  $cookies,$location, $anchorScroll,viewProfileService ,profileService,
  dataset,profileViewService,$mdDialog) {
    var vm = this;
    vm.title = 'ViewProfile';
    vm.sisterList =[];
    vm.brotherList =[];
    vm.contactflag=true;
    vm.interestflag=true;
    vm.acceptflag=false;
    vm.showmessage=false;
    vm.rejectflag=false;
    vm.hideAddress=true;
    vm.reportStatus=null;
    vm.flagObject={};
    vm.spam_flag=false;
    vm.flagObject.isPresent =false;
    vm.flagObject.message ='';
    vm.save_Flag_Profile=save_Flag_Profile;
    vm.delete_Flag_Profile=delete_Flag_Profile;
    vm.sendPhotoRequest=sendPhotoRequest;

    function getProfileInfo(){
      var id =  $stateParams.profile_id;
      document.getElementById('spinner2').style.display = 'Block';
       viewProfileService.viewProfile(id).then(function(response){
        vm.profile =response.data.user_profile;
        vm.credits_remaining = response.data.credits_remaining;
        vm.interests_remaining = response.data.interests_remaining;
        if(b_date!=null){
        var b_date = vm.profile.birth_date;
        var numbers =b_date.match(/\d+/g);
        vm.profile.birth_date = numbers[2]+'/'+numbers[1]+'/'+numbers[0];
        }
        toastr.options.closeButton = true;
        toastr.options.positionClass="toast-top-center";
//        toastr.success(response.data.message,{timeOut: 5000});
        vm.profile.height = dataset.get_height_to_display(vm.profile.height);
        vm.profile.income = dataset.get_income_to_display(vm.profile.income);
        var conn_stage =response.data.connection_stage;
        if(conn_stage==0){
            vm.contactflag=true;
            vm.interestflag=true;
        }else if(conn_stage==1){
            vm.contactflag=true;
            vm.interestflag=false;
            vm.showmessage=true;
            vm.message=response.data.connection_stage_message;
        }else if(conn_stage==2 ){
            vm.hideAddress=false;
            vm.contactflag=false;
            vm.interestflag=false;
        }else if(conn_stage==3){
            vm.showmessage=true;
            vm.contactflag=false;
            vm.message=response.data.connection_stage_message;
            vm.interestflag=false;
        }else if(conn_stage==11){
             vm.showmessage=true;
             vm.acceptflag=true;
             vm.rejectflag=true;
             vm.contactflag=false;
             vm.interestflag=false;
        }
        else if(conn_stage==33){
              vm.showmessage=true;
              vm.acceptflag=true;
              vm.rejectflag=false;
              vm.contactflag=false;
              vm.interestflag=false;
              vm.message=response.data.connection_stage_message;
        }
        else if(conn_stage==4){
              vm.showmessage=true;
              vm.message=response.data.connection_stage_message;
        }
        vm.sibling = response.data.siblings;
        angular.forEach(vm.sibling,function(object){
            if(object.gender =="male"){
              vm.brotherList.push(object);
            }else{
              vm.sisterList.push(object);
            }

        });
        document.getElementById('spinner2').style.display = 'None';
      }).catch(function(error){
        console.log(error);
        document.getElementById('spinner2').style.display = 'None';
      });
    }

    function setFlagStatus(flag_status)
    {
          vm.flagObject.isPresent =true;
          vm.spam_flag = true;
          if(flag_status==10){
            vm.flagObject.message="Fake User";
           }else if(flag_status==20){
           vm.flagObject.message="Bad Photo";
           }else if(flag_status==30){
            vm.flagObject.message="Aleady Married";
           }else if(flag_status==40){
            vm.flagObject.message="Wrong Contact Details";
           }else{
            vm.flagObject.isPresent = false;
            vm.flagObject.message = '';
            vm.spam_flag = false;
           }
    }

    function sendPhotoRequest()
    {
      var id=$stateParams.profile_id;
      var data = { profile_id : id}
      viewProfileService.sendPhotoRequest(data).then(function(response){
      toastr.options.closeButton = true;
      toastr.options.positionClass="toast-top-center";
      toastr.success(response.message,{timeOut:5000});
      }).catch(function(error){
      toastr.options.closeButton = true;
      toastr.options.positionClass="toast-top-center";
      toastr.error(error.message,{timeOut:5000});
      })
    }

    function get_Profile_Flag()
    {
       var id =  $stateParams.profile_id;
       viewProfileService.get_Profile_Flag(id).then(function(response){
            vm.flag_status=response.data.flag_status;
            setFlagStatus(vm.flag_status);
            vm.reportStatus=vm.flag_status;
            vm.flagObject.isPresent =true;

       }).catch(function(error){

       });
    }
    get_Profile_Flag();

    function save_Flag_Profile(value){
       var data={
              "flag_status":value
            }
      if(value!=undefined && vm.spam_flag){
            viewProfileService.update_Profile_Flag($stateParams.profile_id,data).then(function(response){
              setFlagStatus(value);
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-top-center';
              toastr.success(response.data.message,{timeOut:5000});
            }).catch(function(error){
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-top-center';
              toastr.error(error.data.message,{timeOut:5000});
            });
      }else{
        viewProfileService.save_Flag_Profile($stateParams.profile_id,data).then(function(response){
             toastr.options.closeButton = true;
             toastr.options.positionClass = 'toast-top-center';
            toastr.success(response.data.message,{timeOut:5000});
            setFlagStatus(value);
            }).catch(function(error){
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-top-center';
              toastr.error(error.data.message,{timeOut:5000});
            });
      }
    }

    function delete_Flag_Profile(){
      viewProfileService.delete_Flag_Profile($stateParams.profile_id).then(function(response){
        vm.reportStatus=null;
        setFlagStatus(null);
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-top-center';
        toastr.success(response.data.message,{timeOut:5000});
      }).catch(function(error){
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-top-center';
        toastr.error(error.data.message,{timeOut:5000});
      })
    }

    vm.hideAddress = true ;
    vm.show_interest=show_interest;
    vm.contact_details=contact_details;
    vm.goBack =goBack ;
    function goBack(){
      window.history.back();
    }
    function show_interest(profile_id){
    /*  check remaining show interests of loggedin user,
         if he don't have it then show popup to buy it.
        if he has it then send request to server - show response according to
         the response from server.    */
       if(vm.interests_remaining > 0)
       {
        if(vm.profile!=null){
          var data={
            profile_id : profile_id
          }
          angular.element(document.getElementById('show_interest'))[0].disabled = true;
          viewProfileService.show_interest(data).then(function(response){
            if(response.data.code == 0){
              vm.showmessage=true;
              vm.message=response.data.message;
              vm.interestflag=false;
            }
            else
            {
//              angular.element(document.getElementById('show_interest'))[0].disabled = false;
              vm.showmessage=true;
              vm.message=response.data.message;
              return(0);
            }
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-top-center';
            toastr.success(response.data.message,{timeOut: 5000});
          }).catch(function(error){
            angular.element(document.getElementById('show_interest'))[0].disabled = false;
            toastr.options.closeButton = true;
            toastr.options.positionClass = 'toast-top-center';
            toastr.error(error.data.message,{timeOut:5000});
          });
        }
      }else{
            // toastr.options.closeButton = true;
            // toastr.options.positionClass="toast-top-center";
            // toastr.info("Buy Show interests to send interest to profiles. <a href=\"/payment\" class=\"btn btn-primary\">BUY NOW</a>",{timeOut: 10000});
            var confirm = $mdDialog.confirm()
            .title('Buy Show interests to send interest to profiles.')
            .ariaLabel('Lucky day')
            .ok('BUY NOW')
            .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
              console.log("as",$state.current.name);
              $state.go('payment');

            }, function() {

            });
            }
    }

    vm.accepted=accepted;

    function accepted(profile_id){
      var data ={
        profile_id : profile_id
      }
      profileViewService.accept(data).then(function(response){
        if(response.data.code == 0){
            vm.acceptflag=false;
            vm.rejectflag=false;
            vm.showmessage=false;
            angular.merge(vm.profile, response.data);
            vm.hideAddress = false ;
          }
          else
          {
                vm.showmessage=true;
                vm.message=response.data.message;
                return(0);
          }

        vm.classtextflag=false;
        vm.textToShow='Accepted';
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-top-center';
        toastr.success(response.data.message,{timeOut: 5000});
      }).catch(function(error){
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-top-center';
        toastr.success(error.data.message,{timeOut: 5000});
      });
    }

    vm.rejected=rejected;

    function rejected(profile_id){
      var data ={
        profile_id : profile_id
      }
      profileViewService.reject(data).then(function(response){
        vm.showmessage=true;
        vm.message=response.data.message;
        if(response.data.code == 0){
            vm.rejectflag=false;

          }
          else
          {
                return(0);
          }

        vm.textToShow='Rejected';
        vm.classtextflag=false;
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-top-center';
        toastr.success(response.data.message,{timeOut: 5000});
      }).catch(function(error){
        toastr.error(error.data.message,{timeOut:5000});
      });
    }

    function contact_details(profile_id){
/*     check remaining credits of loggedin user,
      if credits are 0 then show popup to buy the credits,
      if he has credits then send a call to server - show response according to
         the response from server.
*/
        if(vm.credits_remaining>0)      {
          if(vm.profile!=null){
            var data={
              profile_id : profile_id
            }
            angular.element(document.getElementById('contact_credit_btn'))[0].disabled = true;
            viewProfileService.contact_details(data).then(function(response){
              if(response.data.code == 0){
                vm.interestflag=false;
                vm.contactflag=false;
                vm.showmessage=false;
                vm.message ='';
                angular.merge(vm.profile, response.data);
              }else
              {
                angular.element(document.getElementById('contact_credit_btn'))[0].disabled = false;
                vm.showmessage=true;
                vm.message=response.data.message;
              }
              vm.hideAddress = false ;
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-top-center';
              toastr.success(response.data.message,{timeOut: 5000});
            }).catch(function(error){
              angular.element(document.getElementById('contact_credit_btn'))[0].disabled = false;
              toastr.options.closeButton = true;
              toastr.options.positionClass = 'toast-top-center';
              toastr.error(error.data.message,{timeOut:5000});
            });
          }
         }else{
          // toastr.options.closeButton = true;
          // toastr.options.positionClass="toast-top-center";
          // toastr.info("Buy Contact credits to view contact details. <a href=\"/payment\" class=\"btn btn-primary\">BUY NOW</a>",{timeOut: 10000});
          // toastr.options.positionClass="toast-top-center";
          var confirm = $mdDialog.confirm()
            .title('Buy Contact credits to view contact details.')
            .ariaLabel('Lucky day')
            .ok('BUY NOW')
            .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
              console.log("as",$state.current.name);
              $state.go('payment');

            }, function() {

            });

         }
        }

    vm.previewImage = previewImage;
    function previewImage(){
       $("#previewImage").modal('toggle');
    }
    getProfileInfo();
    window.scrollTo(0,0);
  }
})();
