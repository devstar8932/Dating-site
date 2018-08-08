(function() {
  'use strict';

  angular
  .module('app.registration')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['logger','$rootScope','$cookies',
  '$filter','registrationService','$state','profileService','homeService','dataset','$stateParams','$interval','accountService','generalService'];
  /* @ngInject */
  function RegistrationController(logger,$rootScope,$cookies,$filter,
  registrationService,$state ,profileService,homeService ,dataset,
  $stateParams, $interval, accountService, generalService) {
    var vm = this;
    if($cookies.get('count')){
      vm.count=parseInt($cookies.get('count'));
    }else{
      vm.count=0;
    }

    vm.title = 'Registration';
    vm.selectedIndex = 0;
    vm.resendPassLimit=false;
    vm.stepComplete = 0;
    vm.isUserNamePresent =false;
    vm.brotherList =[];
    vm.sisterList =[];
    vm.showregistration =true;
    vm.bdayvalidFlag = false;
    vm.email ={ isComplete:true, value:null};
    vm.photo ={ isComplete:true, value:null};
    vm.basic ={ isComplete:true, value:null};
    vm.astro ={ isComplete:true, value:null};
    vm.family ={isComplete:true, value:null};
    vm.personal ={isComplete:true, value:null};
    vm.dynamic=1;
    vm.isEditFlag =false;


//functions used in this controller
vm.updateSiblingData =updateSiblingData;
vm.addSibling=addSibling;
vm.deleteSibling =deleteSibling;
vm.nextStep=nextStep;
vm.save=save;
vm.cancel=cancel;
vm.login=login;
vm.gotoDashboard =gotoDashboard;
vm.updateProfile=updateProfile;
vm.registerUser=registerUser;
vm.isvalideDate=isvalideDate;
vm.checkUsername=checkUsername;
vm.sendConfirmEmail=sendConfirmEmail;
vm.isComplete =isComplete;
vm.getSiblingData =getSiblingData;
vm.changeMobile =changeMobile;
vm.getSuccess =getSuccess;
vm.resendPassword=resendPassword;
vm.openChangeMobileModal = openChangeMobileModal;
vm.saveNativeAddress=saveNativeAddress;
vm.init = init;
vm.changeState = changeState;

//from dataset
function init(){
  vm.maritalstatus =dataset.marital_status();
  vm.maritalstatus1=dataset.marital_status(true);
  vm.maritalstatus2=dataset.marital_status(true);
  vm.cities = dataset.Cities();
  vm.casts = dataset.caste();
  vm.ages = dataset.age();
  vm.height = dataset.height();
  vm.weights = dataset.weight();
  vm.education_field = dataset.education_field();
  vm.education_level = dataset.education_level();
  vm.educationFields = dataset.education();
  vm.income = dataset.income();
  vm.blood_group = dataset.blood_group();
  vm.physic = dataset.physic();
  vm.working_as = dataset.working_as();
  vm.working_with = dataset.working_with();
  vm.complexions = dataset.complexion();
  vm.nakshatra=dataset.nakshatra();
  vm.rashi= dataset.rashi();
  vm.gan= dataset.gan();
  vm.nadi= dataset.nadi();
  vm.charan= dataset.charan();
  vm.nakshatra=dataset.nakshatra();
}

vm.user = {
  "gender": "Female",
  'mangal' :'No',
  'physical_disablity' : 'No'
};

if($cookies.get("User")!=null){
  vm.user = JSON.parse($cookies.get("User"));
}

if($stateParams.fromLogin == 0 && $cookies.get("registrationStep") == null) {
  if($cookies.get('isLoggedIn')==='true' ){
    $state.go("dashboard");
  } else {
    $cookies.remove("User");
    vm.user = {
     "gender": "Female",
     'mangal' :'No',
     'physical_disablity' : 'No'
    };
  }

} else {
  vm.showregistration =false;
  if($cookies.get("registrationStep") != null){
    vm.selectedIndex = parseInt($cookies.get("registrationStep")) ;
    vm.stepComplete = parseInt($cookies.get("registrationStepEnable")) ;
  }
}

if($stateParams.fromLogin !=null && $stateParams.fromLogin==1)
{
  vm.showregistration =false;
  if($cookies.get("registrationStep") != null){
    vm.selectedIndex = parseInt($cookies.get("registrationStep")) ;
    vm.stepComplete = parseInt($cookies.get("registrationStepEnable")) ;
  }

}
vm.linkToDashFlag = false;
if($cookies.get('isLoggedIn')==='true' ){
  vm.linkToDashFlag = true;
}

//change state
function changeState(){
  $state.go("registration");
}
//end change state function




function registerUser(myForm){
  if(myForm.$valid)
  {
    var numbers = vm.user.bday.match(/\d+/g)
    var birthdate =  numbers[2] +"-"+numbers[1]+"-"+numbers[0];

    var data = {
      emailid: vm.user.emailid,
      firstname: vm.user.firstname,
      lastname: vm.user.lastname,
      gender: vm.user.gender,
      phone_mobile: vm.user.phone_mobile, //parseInt(vm.user.phone_mobile.split("+91")[1]),
      bday: birthdate,
      cast:vm.user.cast
    }
     homeService.registerUser(data).then(function(response){
      vm.user.profile_id = response.profile_id || null;
      vm.user.profile_complete = 0;
      $cookies.put("User",JSON.stringify(vm.user));
      $cookies.put("count",0);
      vm.count=parseInt($cookies.get("count"));
      $cookies.remove('count');
      toastr.success(response.message,{timeOut: 5000});
      vm.showregistration =false;
      $cookies.put("registrationStep" , vm.selectedIndex);
      $cookies.put("registrationStepEnable" ,vm.stepComplete);
    }).catch(function(error){
     toastr.error(error.message , {timeOut: 5000});
    });

  }else{
  }

}

function saveNativeAddress(){
     $cookies.put("User",JSON.stringify(vm.user));
}

function nextStep(index) {
  var user = JSON.parse($cookies.get("User"));
  var expression = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/
  var regex = new RegExp(expression);
  var email = user.emailid;
  if (email.match(regex)) {
    vm.user.email_address = user.emailid;
  }

  vm.selectedIndex = index;

  if(index >= vm.stepComplete){
    vm.stepComplete = index;
  }
  $cookies.put("registrationStep" , vm.selectedIndex);
  $cookies.put("registrationStepEnable" ,vm.stepComplete);
  window.scrollTo(0,0);
}

function save(index){
  $cookies.remove("registrationStep");
  $cookies.remove("registrationStepEnable");
  if($stateParams.fromLogin==1){
     $state.go("registration_success",{toDash :1});
    }else{
     $state.go("registration_success",{toDash :0});
  }
}

function cancel(index){
  $state.go("home");
}

function login(index){
  $state.go("login");
}
function gotoDashboard(index){
  $state.go("dashboard");
  $cookies.put("isLoggedIn" ,true);
}

function updateProfile(key,value){
  var str;
  if (value !=undefined && value != "" ) {
    if (isNaN(value)) {
      str = '{"'+ key + '" : "' + value.trim() +'"}';
    }else{
      str = '{"'+ key + '" : "' + value +'"}';
    }

    var data=JSON.parse(str);
    document.getElementById('loader-saving').style.display = 'Block';
    profileService.updateProfile(data).then(function(response){
      if(response.data.status =="okay"){
        //toastr.success(response.message , {timeOut: 5000});
        $cookies.put("User",JSON.stringify(vm.user));

      }else{
      }
      document.getElementById('loader-saving').style.display = 'None';
      $rootScope.loaderFun();
    }).catch(function(error){
        toastr.error(error.message , {timeOut: 5000});
        document.getElementById('loader-saving').style.display = 'None';
    });
  }
}

function isvalideDate(){
  var m = moment(vm.user.bday, 'DD/MM/YYYY');
  if(vm.user.bday!=null && m.isValid() ){
    var today = new Date();
     var str =$filter('date')(vm.user.bday, "yyyy/MM/dd")
    var birthDate =  new Date(str);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if(vm.user.gender==="Male")
    {
      if(age >= 21 && age <= 50){
        vm.bdayvalidFlag =false;
      }else{
        vm.bdayvalidFlag =true;
      }
    }else{
      if(age >= 18 && age <= 50){
        vm.bdayvalidFlag =false;
      }else{
        vm.bdayvalidFlag =true;
      }
    }
  }
}
//code for image upload in
vm.obj = {} ;

// The url or the data64 for the image
vm.obj.src = 'images/img04.jpg';

// Must be [x, y, x2, y2, w, h]
vm.obj.coords = [100,100, 200, 200, 100, 100];

// You can add a thumbnail if you want
vm.obj.thumbnail = true;

$('#jcrop_target').Jcrop({
  onChange: showCoords(),
  onSelect: showCoords()
});

function showCoords(coords){
// console.log("Coordinates ", coords);
}

function checkUsername(){
  if( vm.user.emailid != undefined){
   var data ={
    "user_id" : vm.user.emailid
   }
   homeService.checkUsername(data).then(function(response){
       if(response.status =="okay"){
         vm.isUserNamePresent = false;
      }else{
         vm.isUserNamePresent =true;
     }
      }).catch(function(error){
        toastr.error(error.message , {timeOut: 5000});
     });
 }
 }
function isComplete(myForm,index){
  if(myForm.$valid)
  {
  var data ={
    profile_complete : 1
  };

  profileService.updateProfile(data).then(function(response){
    if(response.data.code == 0){
      nextStep(index);
      vm.user.profile_complete = 1;
       $cookies.put("User",JSON.stringify(vm.user));
      toastr.success(response.data.message,{timeOut: 5000});
    }else{
        toastr.success(response.data.message,{timeOut: 5000});
    }
  }).catch(function(error){
     toastr.error(error.message , {timeOut: 5000});
  });
}
}

function getSiblingData(){
  if(vm.user != null)
  {
    profileService.getSiblingDetails(vm.user.profile_id).then(function(response){
      console.log(response);
      angular.forEach(response.data.list,function(object){
        if(object.birth_date != null) {
          var parts =object.birth_date.split('-');
              object.date =  parts[2]+"/"+parts[1]+"/"+ parts[0];
        }
        if(object.gender =="male"){
          vm.brotherList.push(object);
        }else{
          vm.sisterList.push(object);
        }

      });

    }).catch(function(error){
      toastr.error( error.message , {timeOut: 5000});
    });
  }
}
//getSiblingData();

function updateSiblingData(data ,index){
  if(data.first_name!=null)
   {
         var validDateFlag = true;
         var dateString =null;
        if(data.date == undefined ){
          var validDateFlag = true;
        }else if( moment(data.date, 'dd/MM/yyyy').isValid()) {
           validDateFlag = true ;
           var numbers = data.date.match(/\d+/g);
           dateString =  $filter('date')(new Date(numbers[2], numbers[1] - 1, numbers[0]), "yyyy-MM-dd") ;
        }else{
           validDateFlag = false;
        }

        if( validDateFlag ){
        var object ={
          id : data.id,
          profile_id : data.profile_id,
          first_name: data.first_name,
          marital_status: data.marital_status,
          gender: data.gender,
          birth_date: dateString
        }
        data.birth_date = dateString ;
        document.getElementById('loader-saving').style.display = 'Block';
        if(object.id != null && object.id != undefined)
        {
          profileService.updateSiblingDetails(object).then(function(response){

            if(response.data.status =="okay"){

            }else{
              toastr.error(response.data.message,{timeOut: 5000});
            }
            document.getElementById('loader-saving').style.display = 'None';
            $rootScope.loaderFun();
          }).catch(function(error) {
            document.getElementById('loader-saving').style.display = 'None';
            toastr.error(error.message , {timeOut: 5000});
          });

        } else {

          profileService.createSiblingDetails(object).then(function(response){
            data.id=response.data.id;
            if(response.data.status =="okay"){

            } else {
              toastr.error(response.data.message,{timeOut: 5000});
            }
            document.getElementById('loader-saving').style.display = 'None';
            $rootScope.loaderFun();
          }).catch(function(error){
            document.getElementById('loader-saving').style.display = 'None';
            toastr.error(error.message , {timeOut: 5000});
          });
        }
      }else{
          toastr.error("Please Enter valid Date of Birth",{timeOut: 5000});
      }
   }else{
      toastr.error("You must supply a name",{timeOut:5000});
}
}

function addSibling(val){
  var object ={
  };
  if( val == "sisterObject"){
    if(vm.sisterList.length > 0){
      if( vm.sisterList[vm.sisterList.length-1].id !=null && vm.sisterList[vm.sisterList.length-1].id !=undefined)
      {
        object.gender="female";
        object.profile_id = vm.user.id;
        vm.sisterList.push(object);
      }else{
        toastr.error("You have already empty object,Please Fill/Use this first.",{timeOut: 5000});
      }
    }else{
      object.gender="female";
      object.profile_id=vm.user.id;
      vm.sisterList.push(object);
      angular.element("#nameFocus").focus();
    }

  }else{
    if(vm.brotherList.length > 0){
      if( vm.brotherList[vm.brotherList.length-1].id !=null &&vm.brotherList[vm.brotherList.length-1].id !=undefined)
      {
        object.gender="male";
        object.profile_id=vm.user.id;
        vm.brotherList.push(object);
      }else{
        toastr.error("You have already empty object,Please Fill/Use this first.",{timeOut: 5000});
      }
    }else{
      object.gender="male";
      object.profile_id=vm.user.id;
      vm.brotherList.push(object);
    }
  }
}

function deleteSibling(siblingObject ,index){
  if( siblingObject.gender == "female"){
    if(siblingObject.id != null ){
      for(var i =0 ; i < vm.sisterList.length ; i++)
      if(vm.sisterList[i].id !=null && vm.sisterList[i].id ==siblingObject.id){
        profileService.deleteSiblingDetails(vm.sisterList[i]).then(function(response){
          if(response.status =="okay"){
            toastr.success(response.message,{timeOut: 5000});
            vm.sisterList.splice(index,1);
          }else{
             toastr.error(response.message,{timeOut: 5000});
          }
        }).catch(function(error){
           toastr.error(error.message , {timeOut: 5000});
        });
      }
    }else{
        vm.sisterList.pop();
      }
  }else{
    if(siblingObject.id != null){
      for(var i =0 ; i < vm.brotherList.length ; i++)
      if(vm.brotherList[i].id !=null && vm.brotherList[i].id == siblingObject.id){
        profileService.deleteSiblingDetails(vm.brotherList[i]).then(function(response){

          if(response.status =="okay"){
            toastr.success(response.message,{timeOut: 5000});
            vm.brotherList.splice(index,1);
          }else{
            toastr.success(response.message,{timeOut: 5000});
          }
        }).catch(function(error){
          toastr.error(error.message , {timeOut: 5000});
        });
      }
    }else{
      vm.brotherList.pop();
    }
  }
}

function getSuccess(){
  registrationService.getSuccess().then(function(response){
    var complete_percentage=response.data.complete_percentage;
    vm.dynamic=0;
    var count = 0;
    var iterval=$interval(function() {
      count++;
      vm.dynamic=vm.dynamic+5;
      if(complete_percentage/5<=count){
        vm.dynamic =complete_percentage;
        stopInterval();
      }
    },100);

    function stopInterval(){
      $interval.cancel(iterval);
    }
    angular.forEach(response.data.incomplete_sections,function(item){
      if(item.section =="email"){
        vm.email.isComplete=false;
        vm.email.value=item.weightage;
      }else if(item.section =="photo"){
        vm.photo.isComplete=false;
        vm.photo.value=item.weightage;
      }else if(item.section =="basic"){
        vm.basic.isComplete=false;
        vm.basic.value=item.weightage;
      }else if(item.section =="astro"){
        vm.astro.isComplete=false;
        vm.astro.value=item.weightage;
      }else if(item.section =="family"){
        vm.family.isComplete=false;
        vm.family.value=item.weightage;
      }else if(item.section =="personal"){
        vm.personal.isComplete=false;
        vm.personal.value=item.weightage;
      }
    });
  }).catch(function(error){
    toastr.error(error.message , {timeOut: 5000});
  });
}

function changeMobile(myForm){
  if(myForm.$valid){
    var data ={
      "phone_mobile": vm.phone_mobile
    }
    registrationService.changeMobile(data).then(function(response){
      toastr.options.closeButton = true;
      toastr.success(response.message,{timeOut: 5000});
      vm.user.phone_mobile = vm.phone_mobile;
      $("#changeNo").modal('toggle');
    }).catch(function(error){
      toastr.error(error.message , {timeOut: 5000});
    });
  }
}

function openChangeMobileModal(){
   vm.phone_mobile = vm.user.phone_mobile;
    $("#changeNo").modal('toggle');
}
function resendPassword(){
  console.log("previous count value",vm.count)
  vm.count=parseInt(vm.count)+1;
  if(vm.count>=3){
    $cookies.put("count",vm.count);
    vm.resendPassLimit=true;
  }
  registrationService.resendPassword().then(function(response){
    toastr.options.closeButton = true;
    toastr.success(response.message,{timeOut: 5000});
  }).catch(function(error){
    toastr.error(error.message , {timeOut: 5000});
  });
}

function sendConfirmEmail(email_address1)
{
  var data = {
      email: email_address1
      }
  accountService.sendConfirmEmail(data).then(function(response){
      if( response.data.status == "okay"){
        vm.user.email_address=email_address1;
        $cookies.put("User",JSON.stringify(vm.user));
        toastr.options.closeButton = true;
        toastr.success(response.data.message,{timeOut: 5000});
        }
    }).catch(function(error){
        toastr.options.closeButton = true;
        toastr.success(error.data.message,{timeOut: 5000});
    });
}

vm.birth_time ;
vm.birthTimeFlag =false;
var isStartTimer=false;
var isUpdateCall = false;
if(vm.user!=null && vm.user.birth_time != null){
  vm.birth_time = new Date("2010/02/12 " + vm.user.birth_time);
}
vm.changedBirthTime =changedBirthTime;
function changedBirthTime(){
  if($filter('date')(vm.birth_time, 'shortTime') !=null){
    vm.birthTimeFlag =false;
    if(isStartTimer){
      clearTimeout(isStartTimer)
    }
    if(isUpdateCall)
      isStartTimer = setTimeout(function() {
        vm.user.birth_time =$filter('date')(vm.birth_time, 'shortTime') ;
        updateProfile('birth_time', vm.user.birth_time );
      }, 2000);
    isUpdateCall = true;
  }else{
    vm.birthTimeFlag =true;
  }
}

if($cookies.get("User")!=null){
  getSiblingData();
}
window.scrollTo(0,0);

}
})();
