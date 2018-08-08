(function () {
  'use strict';
  angular
  .module("app.core")
  .controller("UploadController", function($scope,Upload,FileUploader,
  $mdDialog, $cookies){
    var vm=this;
    if($cookies.get("User") != null){
    vm.user = JSON.parse($cookies.get("User"));
    }
    $scope.myImage='';
    $scope.myCroppedImage='';
    $scope.filename="";
     $scope.errorMessage = null;

    $scope.myFunction = function(files){
      var file = files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage = evt.target.result;
        });
      }
      reader.readAsDataURL(file);
      $scope.fileObj1=file;
    }

    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr] , filename, {type:mime});
    }

    $scope.uploadPic=function(file){
      var data = { "pic": $scope.file };
        Upload.upload({
          url: '/api/photos',
          method: 'POST',
          data: data

        }).then(function (resp) {
           toastr.options.closeButton = true;
          toastr.success(resp.data.message,{timeOut: 5000});
          uploadProfilePic();
        });
    }

    function uploadProfilePic(){
      var file = dataURLtoFile($scope.myCroppedImage, $scope.fileObj1.name);
      var obj={"profile_pic": file };
      Upload.upload({
        url:'/api/photos/profile_pic',
        method: 'POST',
        data:obj
      }).then(function (resp) {
        var str = "#dvPreview #img1";
        $(str).attr("src" , $scope.myCroppedImage);
        $mdDialog.hide();
        var user = JSON.parse($cookies.get("User"));
        user.profile_image_url = resp.data.image_url;
        $cookies.put("User",JSON.stringify(user));
        });
    }

    $scope.closeDialog = function() {
      $mdDialog.hide();
    }

    $scope.onClickUpload = function(){
          $mdDialog.show({
            scope: $scope,
            preserveScope: true,
            templateUrl: 'app/components/uploadImage/uploadProfileImage.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
          }).then(function(answer) {

          }, function() {
           console.log('You cancelled the dialog.');
          });

    }

    //dropzone
    var uploader = $scope.uploader = new FileUploader({
      url: 'upload.php'
    });

    uploader.filters.push({
      name: 'customFilter',
      fn: function (item, options) {
        return item.size<10485760 && ( item.type=="image/jpg" || item.type=="image/jpeg");
      }
    });
    uploader.onWhenAddingFileFailed = function (item, filter, options)
    {
      if( item.type !="image/jpg" && item.type!="image/jpeg"){
        toastr.options.closeButton = true;
        toastr.error("Image should be of type .jpg or .jpeg",{timeOut: 5000});
         $scope.errorMessage = "Image should be of type .jpg or .jpeg" ;
      }else if(item.size > 10485760){
        toastr.options.closeButton = true;
        toastr.error("Image size should be less than 1MB.",{timeOut: 5000});
         $scope.errorMessage = "Image size should be less than 1MB." ;
      }
    };

    uploader.onAfterAddingFile = function (fileItem)
    {
        var number =0;
        $scope.errorMessage = null;
        $scope.fileObj1=fileItem.uploader.queue[this.queue.length-1]._file;
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#profileImage").attr("src", e.target.result);
          $scope.myImage  = e.target.result;
        }
        reader.readAsDataURL($scope.fileObj1);
        $scope.file =$scope.fileObj1;
        $scope.onClickUpload();
    };

    $scope.file = {};
    $scope.uploadFile = function(file){
      Upload.upload({
        url: '/api/photos',
        method: 'POST',
        file: { "pic": file }
      }).then(function (resp) {
        toastr.options.closeButton = true;
        toastr.success(resp.data.message,{timeOut: 5000});
      });
    }

    $scope.deletePic = function(num){
      var str = "#dvPreview #img"+num;
      if(vm.user.gender == "male"){
        $(str).attr("src", "images/Male_avatar.jpg");
      }else{
        $(str).attr("src", "images/Female_avatar.jpg");
      }

    }

});
})();
