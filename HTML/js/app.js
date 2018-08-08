'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

angular.module('lbApp', ['ngAnimate', 'ngMaterial', 'ui.bootstrap','duScroll', 'angular-notification-icons','countUpModule'])
  .controller('lbCtrl', function($scope, $mdSidenav) {
    $scope.data = {
      physicallyDisabled: 'Yes',
      gender: 'Male'

    };

    $scope.profile = {
      name: 'Sameer',
      age: '30',
      dob: '16th July 1985',
      from:'Latur',
      birthPlace: 'Pune',
      caste: '96 Maratha',
      maritalStatus: 'Unmarried',
      currentAddress: '602,Amdhuban, Baner Road, Baner, Pune-411405',
      permanentAddress: '302,Savitri Main Road, Latur- 415607',
      mobile: '+91 9874563271',
      phone: '020 44162728',
      physique: {
        height: '167cm',
        weight: '67kg',
        pDisabled: 'no',
        bloodGroup: 'O+',
        complexion: 'Fair',
        diet: 'Veg/N.Veg',
      },
      brideGroom :"Bride"
    };
    $scope.data.cb1 = false;
    $scope.languaseselects = [
      "Marathi",
      "Hindi"
    ];
    $scope.casts = [
      "Any",
      "96kuli-Maratha",
      "MarathaDeshmukh",
      "Maratha",
      "Agri",
      "Arya-Vysya",
      "Aryasamaj",
      "Beldar",
      "Bhandari",
      "Bhavsar",
      "Bhavsar-Kshatriya",
      "Brahmin"
    ];
    $scope.ages = [
      "20",
      "25",
      "30",
      "35",
      "40"
    ];

    $scope.maritalstatus = [
      "Single",
      "Married",
      "Divorcee"
    ];

    $scope.birthtime = [
      "10",
      "11",
      "12"
    ];

    $scope.cities = [
      "Pune",
      "Mumbai",
      "Ahmednagar",
      "Aurangabad",
      "Jalgaon",
      "Kolhapur",
      "Thane",
      "Nagpur",
      "Nashik",
      "Sangli",
      "Solapur"
    ];

    $scope.heights = [
      "10",
      "11",
      "12"
    ];

    $scope.weights = [
      "10",
      "11",
      "12"
    ];

    $scope.blodgroups = [
      "A",
      "AB",
      "O"
    ];

    $scope.demos = [
      "Physique",
      "Physique1",
      "Physique2"
    ];

    $scope.demos1 = [
      "Complexion",
      "Complexion1",
      "Complexion2"
    ];

    $scope.educationLevels = [
      "Level1",
      "Level2",
      "Level3"
    ];

    $scope.educationFields = [
      "Field1",
      "Field2",
      "Field3"
    ];

    $scope.educationDegrees = [
      "Degree1",
      "Degree2",
      "Degree3"
    ];

    $scope.works = [
      "Work1",
      "Work2",
      "Work3"
    ];

    $scope.workas = [
      "Working as1",
      "Working as2",
      "Working as3"
    ];

    $scope.annualIncome = [
      "Income1",
      "Income2",
      "Income3"
    ];



    $scope.educationLevels1 = [
      "Level1",
      "Level2",
      "Level3"
    ];

    $scope.educationFields1 = [
      "Field1",
      "Field2",
      "Field3"
    ];

    $scope.educationDegrees1 = [
      "Degree1",
      "Degree2",
      "Degree3"
    ];

    $scope.works1 = [
      "Work1",
      "Work2",
      "Work3"
    ];

    $scope.workas1 = [
      "Working as1",
      "Working as2",
      "Working as3"
    ];

    $scope.annualIncome1 = [
      "Income1",
      "Income2",
      "Income3"
    ];

    $scope.pins = [
      "1",
      "2",
      "3"
    ];

    $scope.pins1 = [
      "1",
      "2",
      "3"
    ];

    $scope.edu = [
      "B Tech",
      "B Com",
      "M Tech",
      "Law"
    ];




    $scope.detectMobile = function() {
      if (window.innerWidth <= 800 && window.innerHeight <= 800) {
        return true;
      } else {
        return false;
      }
    };
    $scope.isSidenavOpen = $scope.detectMobile() ? false : true;

    // My profile collapsible defaults
    $scope.collapsedTabs={
      personal: $scope.detectMobile() ,
      physique: $scope.detectMobile() ,
      education:$scope.detectMobile() ,
      contact:$scope.detectMobile(),
      family:$scope.detectMobile(),
      astro:$scope.detectMobile()
    };

    $scope.faqCollapse ={
      question1: false,
      question2: false,
      question3: false,
      question4: false,
      question5: false
    };

    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };

    $scope.closeLeftMenuMobile = function() {
      if ($scope.detectMobile() == true && $scope.isSidenavOpen == true)
        $mdSidenav('left').toggle();
    };

    $scope.$watch('isSidenavOpen', function(isSidenavOpen) {
      var bodyElement = angular.element(document.querySelector('body'));
      isSidenavOpen ? bodyElement.addClass('sidemenu-active') : bodyElement.removeClass('sidemenu-active');
    });


    $scope.selectedIndex = 0;
    $scope.nextStep = function(index) {
      $scope.selectedIndex = index;
    };
    $scope.selectTab = function(tab) {
      $scope.selectedIndex = tab;
    };
    $scope.isSelected = function(tab) {
      return tab == $scope.selectedIndex;
    };

    $scope.searchProfile1 ={
      name: 'Nisha Menon',
      src: 'images/img15.jpg',
      visited: 'not-visited'
    };

    $scope.searchProfile2 ={
      name: 'Sneha Gharat',
      src: 'images/img16.png',
      visited: 'visited'
    };


  })
  .directive('lbSearchResult',function(){
    return {
      templateUrl: './partials/searchResult.html',
      scope: { resultType: '@resultType' ,profileData:'=profileData'}
    }
  });
