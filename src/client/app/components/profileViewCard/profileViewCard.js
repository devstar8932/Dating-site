(function () {
  'use strict';

  angular.module('app.core')
  .directive('lbSearchResult', lbSearchResult)
  .controller('profileViewCardController',profileViewCardController);

  function profileViewCardDirective($injector, $rootScope,profileViewService){
    return {
      restrict: 'E',
      scope: {
        profile: '=info',
        footer :'=footer' 
      },
      controller :'profileViewCardController as vm',
      templateUrl: 'app/components/profileViewCard/profileViewCard.html'
    };

  }
  
  function lbSearchResult($injector, $rootScope){
    return {
      scope: { resultType: '@resultType',profileData:'=profileData', setId:'@setId'},
      controller :'profileViewCardController as vm',
      templateUrl: 'app/components/profileViewCard/profileViewCard.html'
    };

  }

  function profileViewCardController($timeout, $mdDialog, $location,$state,$scope,dataset ,inboxService,profileViewService,$rootScope,viewProfileService){
    var vm= this;  
    vm.viewProfile = viewProfile;
    vm.accepted=accepted;
    vm.rejected=rejected; 
    vm.classtextflag=true;
    vm.textToShow=false;
     vm.flagObject={};
    vm.flagObject.isPresent =false;
    vm.flagObject.message ='';
   /* vm.save_Flag_Profile=save_Flag_Profile;
    vm.delete_Flag_Profile=delete_Flag_Profile;
   */
    vm.profile_idTemp = null; 
    function viewProfile(id ,index){
    $timeout(function() {

      $('.popover').popover('hide');
      vm.profile_idTemp = id ;
      var hash = $location.hash();
      if(hash != 'reportModal'){
      $state.go('viewprofile',{"profile_id" : id});
        $rootScope.profileNo = index ;
      }else{
          $location.hash('');
          viewProfileService.get_Profile_Flag(id).then(function(response){
            //$("#reportModal_"+id).modal('toggle');
            vm.reportStatus = response.data.flag_status;
            showDialog(id,vm.reportStatus );
          }).catch(function(error){
             //$("#reportModal_"+id).modal('toggle');
             vm.reportStatus = error.data.flag_status;
             showDialog(id,vm.reportStatus );
             console.log("Error Occured......");
          });
       // $("#reportModal").modal('toggle');
      }
    }, 100);
    }

    function  showDialog(id ,reportStatus ){
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         clickOutsideToClose:true,
         template:
         // '<div class="modal-dialog modal-md">' +
         // '<div class="modal-content">' +
          '  <form id="myForm" name="myForm" novalidate>' +
          '    <div class="modal-header">' +
          '      <button type="button" class="close"  ng-click="cancel()">&times;</button>' +
          '      <h4 class="modal-title" translate>Report Profile</h4>' +
          '    </div>' +
          '    <div class="modal-body">' +
          '       <div class="row row-buffer">' +
          '         <div class="col-md-3"> </div>' +
          '         <div class="col-sm-12 col-md-6">' +
          '             <md-radio-group  name="report" ng-model="reportStatus" required>' +
          '                 <md-radio-button class="radio-button" value="10" class="md-primary">' +
          '                 <span translate>Fake User</span>' +
          '                 </md-radio-button>' +
          '                 <md-radio-button class="radio-button" value="20"><span translate>Bad Photo</span>' +
          '                 </md-radio-button>' +
          '                <md-radio-button class="radio-button" value="30"><span translate>Already Married</span>' +
          '                </md-radio-button>' +
          '               <md-radio-button class="radio-button" value="40"><span translate>Wrong Contact Details</span>' +
          '              </md-radio-button>' +
          '           </md-radio-group>' +
          '     </div>' +
          '   </div>' +
          '</div>' +
          ' <div class="modal-footer">' +
          '   <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="save_Flag_Profile(profile_id,reportStatus)" translate>Save</button>' +
          '    <button type="button" class="btn btn-danger" data-dismiss="modal" ng-click="delete_Flag_Profile(profile_id)" translate>Delete</button>' +
          '  <button type="button" class="btn btn-default" ng-click="cancel()" translate>Cancel</button>' +
          ' </div>' +
          ' </form>',
         controller : DialogController,
         locals: {
            reportStatus1 : reportStatus,
            profile_id1 : id
         },
      });
    }

    function DialogController($scope, $mdDialog, reportStatus1,profile_id1) {
        $scope.reportStatus = reportStatus1 ;
        $scope.profile_id =profile_id1;
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.save_Flag_Profile = function(profile_id,value){
          var data={
            "flag_status":value
          }
          if(value!=undefined){
            viewProfileService.update_Profile_Flag(profile_id ,data).then(function(response){
              toastr.success(response.data.message,{timeOut:5000});
              $mdDialog.hide();
            }).catch(function(error){
              toastr.error(error.data.message,{timeOut:5000});
              $mdDialog.hide();
            });
          }else{
            viewProfileService.save_Flag_Profile(profile_id ,data).then(function(response){
              toastr.success(response.data.message,{timeOut:5000});
              $mdDialog.hide();
            }).catch(function(error){
              $mdDialog.hide();
              toastr.error(error.data.message,{timeOut:5000}); 
            });
          }
        }
        $scope.delete_Flag_Profile = function(profile_id){
          viewProfileService.delete_Flag_Profile(profile_id).then(function(response){
            vm.reportStatus=null;
            vm.flagObject.isPresent =false;
            vm.flagObject.message ='';
            toastr.success(response.data.message,{timeOut:5000});
            $mdDialog.hide();
          }).catch(function(error){
            $mdDialog.hide();
            toastr.error(error.data.message,{timeOut:5000});
          });
        }
    }

    function accepted(profile_id){
      var data ={
        profile_id : profile_id
      }
      profileViewService.accept(data).then(function(response){
        toastr.options.closeButton = true;
        vm.classtextflag=false;
        vm.textToShow='Accepted';
        toastr.success(response.data.message,{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }

   
    function rejected(profile_id){
      var data ={
        profile_id : profile_id
      }
      profileViewService.reject(data).then(function(response){
        toastr.options.closeButton = true;
        vm.textToShow='Rejected';
        vm.classtextflag=false;
        toastr.success(response.data.message,{timeOut: 5000});
      }).catch(function(error){
        console.log(error);
      });
    }
    
    vm.takeHeight =takeHeight; 
    vm.get_income_to_display =get_income_to_display; 
    
    function takeHeight(val){
      return dataset.get_height_to_display(val);
    }
    function get_income_to_display(val){
      return dataset.get_income_to_display(val);
    }
    

  }
})();
