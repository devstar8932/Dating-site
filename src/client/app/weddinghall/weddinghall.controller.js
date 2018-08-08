(function() {
  'use strict';

  angular
  .module('app.weddinghall')
  .controller('WeddingHallController', WeddingHallController);

  WeddingHallController.$inject = ['logger', '$filter','$rootScope','$cookies','weddinghallService','dataset'];
  /* @ngInject */
  function WeddingHallController(logger, $filter,$rootScope,$cookies,weddinghallService,dataset) {
    var vm = this;
    vm.title = 'WeddingHall';
//     vm.hallsList =[];
        vm.getweddinghall =getweddinghall;
        vm.hall_details = [];
        vm.halls = [];
        vm.search_result = [];
        vm.active_hallType = [];
        vm.hall_data = {};
        vm.activeName = {};
        vm.activeHall = {};
//        vm.halls_data = {};
        vm.active_id = [];
        vm.activehall_type = {};
        vm.activeHalls = [];
        vm.aciveLocation = {};
        vm.getweddinghalldetails = getweddinghalldetails;
        vm.hallDetails = hallDetails;
//        vm.filter_name = filter_name;
//        vm.filter_location = filter_location;
//        vm.filter_hallType = filter_hallType;
        vm.update_list = update_list;
        vm.back = back;
        vm.scrollTo =scrollTo;
        vm.hall_capacity = dataset.hall_capacity();
        vm.Hall_type = dataset.Hall_type();
        vm.function_type = dataset.function_type();
        activate();


    function getweddinghall(){
      weddinghallService.getweddinghall().then(function(response){
                 vm.selectedIndex =1;
                 vm.selected_details = false;
                 vm.non_selected_details = true;
                 vm.weddingHall = true;
                 vm.searchHall = true;
                 vm.detail = false;
                // vm.detail = true;
                vm.status = response;
                if (!vm.status.code) {
                    vm.halls = response['halls'];
                    vm.search_result = vm.halls;
                    vm.hall_details = response['hall_details'];
                    return vm.halls;
                } else {
                    // TODO (megha.n.bodke@gmail.com)
                    // Error handling
                    return vm.status;
                }
        if(response.status =="okay"){
          toastr.success(response.message,{timeOut: 5000});
        }
      }).catch(function(error){
        console.log(error);
      });
    }


        function activate() {}

        function getweddinghalldetails(id) {
            var Id = id;

             for (var i = 0; i < vm.halls.length; i++) {
                  if (vm.halls[i].id === id) {
                  vm.activeHall = vm.halls[i];
                  break;
                     }
                  }
              var count = 0;
             for (var i = 0; i < vm.hall_details.length; i++) {
                  if (vm.activeHall.id === vm.hall_details[i].hall_id) {
                  vm.hall_data = vm.hall_details[i];
                  vm.activeHalls.push(vm.hall_data);
                  break;
                  }
                  count++;
                  }
              if(count == vm.hall_details.length){
                return weddinghallService.getweddinghalldetails(Id).then
                (function
                (response) {
                    vm.activeHall = response.data.details;

              });
              }

             for (var i = 0; i < vm.activeHalls.length; i++) {
             var hall_id = vm.activeHalls[i]['hall_id'];
             }
             return weddinghallService.getweddinghalldetails(hall_id).then(function
                (response) {
                 vm.activeHalls = response.data.details.hall_details;
              });

        }

        function hallDetails(hall_type) {
            if (hall_type === 'type_hall') {
                vm.detail = true;
                vm.weddingHall = false;
                vm.searchHall = false;
                vm.selected_details = false;
            } else {
                vm.detail = false;
                vm.weddingHall = true;
                vm.searchHall = true;
            }
        }

//        function filter_name(name){
//            for (var i = 0; i < vm.halls.length; i++){
//                if (vm.halls.name === name) {
//                   vm.activeName = vm.halls[i];
//                   return vm.activeName;
//                   }
//            }
//        }
//
//        function filter_location(area_in_pune){
//            for (var i = 0; i < vm.halls.length; i++){
//                if (vm.halls.area_in_pune === area_in_pune) {
//                   vm.aciveLocation = vm.halls[i];
//                   return vm.aciveLocation;
//                   }
//            }
//        }
//
//        function filter_hallType(hall_type){
//        vm.active_hallType = [];
//        vm.selected_details = true;
//        vm.non_selected_details = false;
//            for (var i = 0; i < vm.hall_details.length; i++){
//                if (vm.hall_details[i].hall_type === hall_type) {
//                   vm.activehall_type = vm.hall_details[i];
////                   for (var i = 0; i < vm.halls.length; i++){
////                   if (vm.activehall_type.hall_id === vm.halls[i].id) {
////                  vm.halls_data = vm.halls[i];
//                  vm.active_hallType.push(vm.activehall_type);
////                   }
////            }
//            }
//            }
//             return vm.active_hallType;
//        }

        function update_list() {
            vm.search_result = $filter('filter')(vm.halls, {name:vm.name});
            vm.search_result = $filter('filter')(vm.search_result, {area_in_pune:vm.area_in_pune});
//            vm.search_result = $filter('filter')(vm.halls, {id:vm.name});
            // Hall detail filter
            vm.search_result_hall_detail = $filter('filter')(vm.hall_details, {hall_size:vm.hall_size});
            // hall size logic
            vm.search_result_hall_detail = [];
            // for
            vm.search_result_hall_detail = $filter('filter')(vm.hall_details, {hall_type:vm.hall_type});
            vm.search_result_hall_detail = $filter('filter')(vm.search_result_hall_detail, {funtion_type:vm.Function_type});
            vm.final = [];
            for(var i = 0; i < vm.search_result.length; i++){
                for(var j = 0; j < vm.search_result_hall_detail.length; j++){
                    if (vm.search_result_hall_detail[j].hall_id == vm.search_result[i].id) {
                        vm.final.push(vm.search_result[i]);
                        break;
                    }
                }
            }
            vm.search_result = vm.final;
        }

        function back(halls_type){
             if (halls_type === 'type_hall') {
                    vm.activeHalls = [];
                    vm.weddingHall = true;
                    vm.detail = false;
                } else {
                    vm.weddingHall = false;
                    vm.detail = false;
                }
            }

        function selectTab(index){
          vm.selectedIndex = index ;
          if(vm.selectedIndex ==1){
            vm.unablescroll=false;
          }else{
            vm.unablescroll=true;
          }
          searchService.setSearchPageTab(index);
        }

        function scrollTo() {
          window.scrollTo(0,0);
          }

        window.scrollTo(0,0);
  }
})();
