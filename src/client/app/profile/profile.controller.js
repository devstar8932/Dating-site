(function() {
  'use strict';

  angular
  .module('app.profile')
  .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$scope','$state','logger','$rootScope','$cookies','$location', '$anchorScroll','profileService','dataset','$filter','Upload','FileUploader','generalService','$timeout','$mdDialog'];

  function ProfileController($scope,$state,logger,$rootScope,$cookies,$location, $anchorScroll,profileService,dataset ,$filter,Upload,FileUploader,generalService , $timeout ,$mdDialog) {
    var vm = this;
    vm.title = 'Profile';
    vm.bdayvalidFlag = false ;
    vm.maritalstatus = dataset.marital_status();
    vm.maritalstatus1=dataset.marital_status(true);
    vm.maritalstatus2=dataset.marital_status(true);
    vm.cities = dataset.Cities();
    vm.casts = dataset.caste();
    vm.ages = dataset.age();
    vm.height = dataset.height();
    vm.weights = dataset.weight();
    vm.educationFields = dataset.education_field();
    vm.educationLevels = dataset.education_level();
    vm.education = dataset.education();
    vm.annualIncome = dataset.income();
    vm.bloodgroups = dataset.blood_group();
    vm.physic = dataset.physic();
    vm.workas = dataset.working_as();
    vm.works = dataset.working_with();
    vm.complexions = dataset.complexion();
    vm.rashi= dataset.rashi();
    vm.gan= dataset.gan();
    vm.nadi= dataset.nadi();
    vm.charan= dataset.charan();
    vm.nakshatra=dataset.nakshatra();
    vm.focusFlag = false;
    vm.changedBirthTime = changedBirthTime;
    vm.changeDateOfBirth =changeDateOfBirth;



    if($cookies.get("User")!=null){
      vm.user = JSON.parse($cookies.get("User"));
    }else{
      $state.go("login");
    }
    if(typeof vm.user.birth_date !== 'undefined'){
      var numbers = vm.user.birth_date.match(/\d+/g);
      vm.user.birth_date = $filter('date')(new Date(numbers[0], numbers[1] - 1, numbers[2]), "dd/MM/yyyy") ;
    }


//    var numbers = vm.user.birth_date.match(/\d+/g);
//    vm.user.birth_date = $filter('date')(new Date(numbers[0], numbers[1] - 1, numbers[2]), "dd/MM/yyyy") ;
    activate();

    function activate() {
      angular.element(document).ready(function() {
        $('textarea, input').change(function(){
          // changeContent(this.name,this.value)
        })
      });
      profileService.getProfile().then(function(response){
        vm.user = angular.copy(response.data.user);
        if(vm.user.height!=null){
        vm.user.height=parseInt(vm.user.height);}
        if(vm.user.income!=null){
          vm.user.income = parseInt(vm.user.income);
        }
	$cookies.put("User",JSON.stringify(vm.user));
	      if(vm.user.birth_date != 'undefined'){
	        var numbers = vm.user.birth_date.match(/\d+/g);
          vm.user.birth_date = $filter('date')(new Date(numbers[0], numbers[1] - 1, numbers[2]), "dd/MM/yyyy");
        }
//        var numbers = vm.user.birth_date.match(/\d+/g);
//        vm.user.birth_date = $filter('date')(new Date(numbers[0], numbers[1] - 1, numbers[2]), "dd/MM/yyyy");
      }).catch(function(error){
        console.log(error);
      });

    if(vm.user.edu_level == 'Bachelors' || vm.user.edu_level == 'Undergraduate'){
      vm.education = dataset.educationBachelor();
      }
    else if(vm.user.edu_level == 'Masters'){
      vm.education = dataset.educationMaster();
      }
    else if(vm.user.edu_level == 'Doctorate'){
      vm.education = dataset.educationDoctorate();
      }
    else if(vm.user.edu_level == 'High school' || vm.user.edu_level == 'Less than high school'){
      vm.education = dataset.educationHighSchoolOrLess();
      }
    else{
      vm.education = dataset.education()
      }
    }

    function someValue(s){
      console.log("User",s);
    }


    vm.togglePersonal = true;
    vm.togglePhysique = true;
    vm.toggleEducation = true;
    vm.toggleEducation1 = true;
    vm.toggleFamily = true;
    vm.toggleAstro = true;
    vm.selectedFlag = 'personal-detail';
    vm.brotherList =[];
    vm.sisterList =[];
    vm.updateSiblingData =updateSiblingData;
    vm.addSibling=addSibling;
    vm.deleteSibling =deleteSibling;
    vm.scrollTo =scrollTo;
    vm.changeContent = changeContent;


    function scrollTo(id) {
      $location.hash(id);
      $anchorScroll();

      $timeout(function() {
        window.scrollTo(window.pageXOffset, window.pageYOffset - 70);
      }, 100);

      vm.selectedFlag = id;
    }

    function changeContent(key,value){
      var str;

     if(vm.user.edu_level == 'Bachelors' || vm.user.edu_level == 'Undergraduate'){
      vm.education = dataset.educationBachelor();
     }
     else if(vm.user.edu_level == 'Masters'){
      vm.education = dataset.educationMaster();
      }
     else if(vm.user.edu_level == 'Doctorate'){
      vm.education = dataset.educationDoctorate();
      }
     else if(vm.user.edu_level == 'High school' || vm.user.edu_level == 'Less than high school'){
      vm.education = dataset.educationHighSchoolOrLess();
      }
     else {
      vm.education = dataset.education()
      }


      if (value !=undefined && value != "" ) {
        if (isNaN(value)) {
          str = '{"'+ key + '" : "' + value.trim() +'"}';
        }else{
          str = '{"'+ key + '" : "' + value +'"}';
        }
        var data=JSON.parse(str);
        document.getElementById('loader-saving').style.display = 'Block';
        profileService.updateProfile(data).then(function(response){
          if(response.status =="okay"){
            //toastr.success(response.message,{timeOut: 5000});
            $cookies.put("User",JSON.stringify(vm.user));

          }else{

          }
           document.getElementById('loader-saving').style.display = 'None';
           //document.getElementById('loader').style.display = 'Block';
          $rootScope.loaderFun();
        }).catch(function(error){
          console.log(error);
          document.getElementById('loader-saving').style.display = 'None';
        });
      }
    }

    function changeDateOfBirth(key,value){
      isvalideDate();
      if (value !=undefined && value != "" && !vm.bdayvalidFlag && moment(vm.user.birth_date, 'dd/MM/yyyy').isValid() ) {
        var numbers = vm.user.birth_date.match(/\d+/g);
        var str = '{"'+ key + '" : "' +  $filter('date')(new Date(numbers[2], numbers[1] - 1, numbers[0]), "yyyy-MM-dd") +'"}';
        var data=JSON.parse(str);
        profileService.updateProfile(data).then(function(response){
          if(response.status =="okay"){
            //toastr.success(response.message,{timeOut: 5000});
            $cookies.put("User",JSON.stringify(vm.user));
          }else{

          }
        }).catch(function(error){
          console.log(error);
        });
      }

    }

    function isvalideDate(){
      var m = moment(vm.user.birth_date, 'dd/MM/yyyy');
      if(vm.user.birth_date!=null && m.isValid() ){
        var today = new Date();
        var numbers = vm.user.birth_date.match(/\d+/g);
        var birthDate =  new Date(numbers[2], numbers[1] - 1, numbers[0])
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
    $scope.changeContent1 = function( key , value){
     changeContent(key,value);
   }

    function getSiblingData(){
      if(vm.user != null)
      {

        profileService.getSiblingDetails(vm.user.profile_id).then(function(response){
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
          if(response.data.status =="okay"){
            //toastr.success(response.data.message,{timeOut: 5000});
          }else{

          }
        }).catch(function(error){
          console.log(error);
        });
      }
    }
    getSiblingData();


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
          if(object.id != null && object.id != undefined)
          {
            profileService.updateSiblingDetails(object).then(function(response){

              if(response.data.status =="okay"){
                //toastr.success(response.message,{timeOut: 5000});
              }else{
                toastr.error(response.data.message,{timeOut: 5000});
              }
            }).catch(function(error){
              console.log(error);
            });
          }else{
            profileService.createSiblingDetails(object).then(function(response){
              data.id=response.data.id;
              if(response.data.status =="okay"){
                //toastr.success(response.message,{timeOut: 5000});
              }else{
                toastr.error(response.data.message,{timeOut: 5000});
              }
            }).catch(function(error){
              console.log(error);
            });
          }
        }else{
          toastr.error("Please Enter valid Date of Birth",{timeOut: 5000});
        }
      }else{
        //toastr.error("You must supply a name",{timeOut:5000});
      }
    }

    function addSibling(val){
      vm.focusFlag = true;
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
            toastr.success("You have already empty object,Please Fill/Use this first.",{timeOut: 5000});
          }
        }else{
          object.gender="female";
          object.profile_id=vm.user.id;
          vm.sisterList.push(object);
        }
      }else{
        if(vm.brotherList.length > 0){
          if( vm.brotherList[vm.brotherList.length-1].id !=null &&vm.brotherList[vm.brotherList.length-1].id !=undefined)
          {
            object.gender="male";
            object.profile_id=vm.user.id;
            vm.brotherList.push(object);
          }else{
            toastr.success("You have already empty object,Please Fill/Use this first.",{timeOut: 5000});
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
                if(response.data.status =="okay"){
                  //toastr.success(response.data.message,{timeOut: 5000});
                  vm.sisterList.splice(index,1);
                }else{
                  toastr.error(response.data.message,{timeOut: 5000});
                }
              }).catch(function(error){
                console.log(error);
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

                  if(response.data.status =="okay"){
                    //toastr.success(response.data.message,{timeOut: 5000});
                    vm.brotherList.splice(index,1);
                  }else{
                    toastr.success(response.data.message,{timeOut: 5000});
                  }
                }).catch(function(error){
                  console.log(error);
                });
              }
            }else{
              vm.brotherList.pop();
            }
          }
        }

//dropzone
var uploader = vm.uploader = new FileUploader({
  url: 'upload.php'
});

uploader.filters.push({
  name: 'customFilter',
  fn: function (item, options) {
    return item.size<1000000 && ( item.type=="image/jpg" || item.type=="image/jpeg");
  }
});
uploader.onWhenAddingFileFailed = function (item, filter, options)
{
  console.info('onWhenAddingFileFailed', item, filter, options);
  toastr.options.closeButton = true;
  toastr.error("Image size should be less than 1MB of type .jpg or .jpeg",{timeOut: 5000});

};
uploader.onAfterAddingFile = function (fileItem)
{

  var str = "#profileImage";
  vm.fileObj1=fileItem.uploader.queue[this.queue.length-1]._file;
  var reader = new FileReader();
  reader.onload = function (e) {
    $(str).attr("src", e.target.result);
  }
  console.log( vm.fileObj1);
  reader.readAsDataURL(vm.fileObj1);
  vm.file =vm.fileObj1;
  uploadFile(vm.fileObj1)
}
function uploadFile(file){
  Upload.upload({
    url: '/api/photos/profile_photo',
    method: 'POST',
    file: { "profile_image": file }
  }).then(function (resp) {
    console.log(resp);
    toastr.options.closeButton = true;
    toastr.success(resp.data.message,{timeOut: 5000});
  });
}

//change mobile number
vm.pin = '';
// vm.updateMobile=updateMobile;
vm.confirmMobile=confirmMobile;
vm.cancelUpdateMobile =cancelUpdateMobile;
vm.is_mobile = true;
$scope.updateMobile = function(key,value){
  var intRegex =  /^(\+91)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
  if (value !=undefined && value != "" && intRegex.test(value)) {
    var str = '{"'+ key + '" : "' + value +'"}';
    var data=JSON.parse(str);
    profileService.updateMobile(data).then(function(response){
      if(response.data.status =="okay"){
        //toastr.success(response.message,{timeOut: 5000});
        vm.pin = '';
        $("#changeNo").modal('toggle');
        var tempProfile = JSON.parse($cookies.get("User"));
        vm.oldMobileNo = tempProfile.phone_mobile;
      }else{
        toastr.success(response.data.message,{timeOut: 5000});
      }

    }).catch(function(error){
      console.log(error);
    });
  }else{
    vm.is_mobile =false;
    toastr.success("Enter valid number",{timeOut: 5000});
  }
}

function confirmMobile(form){
  if(form.$valid ){
    var data ={};
    data.pin =vm.pin ;
    profileService.confirmMobile(data).then(function(response){
      if(response.data.status =="okay"){
        //toastr.success(response.message,{timeOut: 5000});
        vm.pin = '';
        $("#changeNo").modal('toggle');
      }else{
        vm.wrongPin=response.data.message;
      }

    }).catch(function(error){
      toastr.error(error.data.message,{timeOut:5000})
    });

  }
}

function cancelUpdateMobile(){
  $("#changeNo").modal('toggle');
   vm.user.phone_mobile = vm.oldMobileNo;

}

vm.birth_time ;
vm.birthTimeFlag =false;
var isStartTimer=false;
var isUpdateCall = false;
if(vm.user!=null && vm.user.birth_time != null){
  vm.birth_time = new Date("2010/02/12 " + vm.user.birth_time);
}

function changedBirthTime(){
  if($filter('date')(vm.birth_time, 'shortTime') !=null){
    vm.birthTimeFlag =false;
    if(isStartTimer){
      clearTimeout(isStartTimer)
    }
    if(isUpdateCall)
      isStartTimer = setTimeout(function() {
        vm.user.birth_time =$filter('date')(vm.birth_time, 'shortTime') ;
        changeContent('birth_time', vm.user.birth_time );
      }, 2000);
    isUpdateCall = true;
  }else{
    vm.birthTimeFlag =true;
  }
}
vm.previewImage = previewImage;
function previewImage(){
  $("#previewImage").modal('toggle');
}

function includes(k) {
  for(var i=0; i < this.length; i++){
    if( this[i] === k || ( this[i] !== this[i] && k !== k ) ){
      return true;
    }
  }
  return false;
}

var arr = ["personal-detail",'physique-detail','education-detail','contact-detail','family-detail','astro-detail'];
arr.includes = includes;

$scope.scrollTODivId = function () {
    if($location.hash() != null && $location.hash() != '' && arr.includes($location.hash())){
      setTimeout(function() {
        var href = "[href='#"+$location.hash()+ "']" ;
        if( document.querySelectorAll(href).length > 0){
          document.querySelectorAll(href)[0].click();
        }else{
          window.scrollTo(0,0);
        }
      },1000);
    }else{
      window.scrollTo(0,0);
    }
}

}
})();
