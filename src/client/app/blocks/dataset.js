(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataset', dataset);

         dataset.$inject = ['$rootScope'];

    //dataset.$inject = ['$log', 'toastr'];

    /* @ngInject */
    //function dataset($log, to astr) {
    function dataset($rootScope) {
        var languaseUsed  = $rootScope.languaseUsed ;
        // console.log("language" , { key : $rootScope.languaseUsed  });
        var service = {
            showToasts: true,
            amount: amount,
            marital_status: marital_status,
            Cities: Cities,
            caste: caste,
            height: height,
            display_server_amount: display_server_amount,
            get_height_to_display: get_height_to_display,
            get_income_to_display: get_income_to_display,
            display_server_height: display_server_height,
            education_level:education_level,
            education_field: education_field,
            blood_group: blood_group,
            complexion: complexion,
            physic: physic,
            working_as: working_as,
            working_with: working_with,
            rashi: rashi,
            gan: gan,
            nadi: nadi,
            Hall_type : Hall_type,
            function_type : function_type,
            charan: charan,
            nakshatra:nakshatra,
            income : income,
            weight : weight,
            day : day,
            month : month,
            year : year,
            age : age,
            education : education,
            hall_capacity : hall_capacity,
            display_server_hall_type: display_server_hall_type,
            educationBachelor:educationBachelor,
            educationMaster:educationMaster,
            educationDoctorate:educationDoctorate,
            educationHighSchoolOrLess:educationHighSchoolOrLess
            // straight to console; bypass toastr
            //log     : $log.log
        };

        return service;
        /////////////////////

        function education() {
            if( $rootScope.languaseUsed == 'English'){
            return [
                    {key:'BA',value:'Bachelor of Arts(B.A)'},
                    {key:'BAMS',value:'Bachelor of Ayurvedic Medicine and Surgery(B.A.M.S)'},
                    {key:'BArch',value:'Bachelor of Architecture(B.Arch)'},
                    {key:'BBA',value:'Bachelor of Business Administration(B.B.A)'},
                    {key:'BBM',value:'Bachelor of Business Management(B.B.M)'},
                    {key:'BCA',value:'Bachelor of Computer Applications(B.C.A)'},
                    {key:'BCom',value:'Bachelor of Commerce(B.Com)'},
                    {key:'BCS',value:'Bachelor of Computer Science(B.C.S)'},
                    {key:'BDS',value:'Bachelor of Dental Surgery(B.D.S)'},
                    {key:'BE',value:'Bachelor of Engineering(B.E)'},
                    {key:'BEd',value:'Bachelor of Education(B.Ed)'},
                    {key:'BHMS',value:'Bachelor of Homeopathic Medicine & Surgery(B.H.M.S)'},
                    {key:'BPharma',value:'Bachelor of Pharmacy(B.Pharma)'},
                    {key:'BHM',value:'Bachelor of Hotel Management(B.H.M)'},
                    {key:'BLSc',value:'Bachelor Library Science(B.L.Sc)'},
                    {key:'BHMCT',value:'Bachelor Hotel Management and Catering Technology(B.H.M.C.T)'},
                    {key:'BMLT',value:'Bachelor of Medical Laboratory Technology(B.M.L.T)'},
                    {key:'BS',value:'Bachelor of Science(B.S)'},
                    {key:'LLB',value:'Bachelor of Law(LL.B)'},
                    {key:'BSc',value:'Bachelors of Science(B.Sc)'},
                    {key:'BSW',value:'Bachelor Of Social Work(B.S.W)'},
                    {key:'BTech',value:'Bachelors of Technology(B.Tech)'},
                    {key:'MBBS',value:'Bachelor of Medicine Bachelor of Surgery(M.B.B.S)'},
                    {key:'DEd',value:'Diploma of Education(D.Ed)'},
                    {key:'MD',value:'Doctor of Medicine(M.D)'},
                    {key:'FPM',value:'Fellow Programme in Management(F.P.M)'},
                    {key:'LLM',value:'Master of Law(LL.M)'},
                    {key:'MCom',value:'Master of Commerce(M.Com)'},
                    {key:'MA',value:'Master of Arts(M.A)'},
                    {key:'MArch',value:'Master of Architecture(M.Arch)'},
                    {key:'MBA',value:'Master of Business Administration(M.B.A)'},
                    {key:'MBL',value:'Master of Business Laws(M.B.L)'},
                    {key:'MBM',value:'Master of Business Management(M.B.M)'},
                    {key:'MBS',value:'Master of Business Studies(M.B.S)'},
                    {key:'MCA',value:'Master of Computer Applications(M.C.A)'},
                    {key:'MCM',value:'Master of Computer Management(M.C.M)'},
                    {key:'MCS',value:'Master of Computer Science(M.C.S)'},
                    {key:'MDS',value:'Master of Dental Surgery(M.D.S)'},
                    {key:'ME',value:'Master of Engineering(M.E)'},
                    {key:'MEd',value:'Master of Education(M.Ed)'},
                    {key:'MFM',value:'Master of Film Management(M.F.M)'},
                    {key:'ML',value:'Master of Laws(M.L)'},
                    {key:'MMM',value:'Master of Marketing Management(M.M.M)'},
                    {key:'MPharma',value:'Master of Pharmacy(M.Pharma)'},
                    {key:'MPhill',value:'Master of Philosophy(M.Phil)'},
                    {key:'MS',value:'Master of Science(M.S)'},
                    {key:'MSc',value:'Master of Science(M.Sc)'},
                    {key:'MSD',value:'Master of Social Dynamics(M.S.D)'},
                    {key:'MSW',value:'Master Of Social Work(M.S.W)'},
                    {key:'MTech',value:'Master of Technology(M.Tech)'},
                    {key:'Other',value:'Other'}
               ]
           }else{
                return [
                    {key:'BA',value:'कला शाखेचा पदवीधर (B.A)'},
                    {key:'BAMS',value:'आयुर्वेदिक औषधे आणि शस्त्रक्रिया शाखेचा (B.A.M.S)'},
                    {key:'BArch',value:'आर्किटेक्चर पदवी(B.Arch)'},
                    {key:'BBA',value:'व्यवसाय प्रशासन शाखेचा पदवीधर(B.B.A)'},
                    {key:'BBM',value:'Bachelor of Business Management(B.B.M)'},
                    {key:'BCA',value:'Bachelor of Computer Applications(B.C.A)'},
                    {key:'BCom',value:'Bachelor of Commerce(B.Com)'},
                    {key:'BCS',value:'Bachelor of Computer Science(B.C.S)'},
                    {key:'BDS',value:'Bachelor of Dental Surgery(B.D.S)'},
                    {key:'BE',value:'Bachelor of Engineering(B.E)'},
                    {key:'BEd',value:'Bachelor of Education(B.Ed)'},
                    {key:'BHMS',value:'Bachelor of Homeopathic Medicine & Surgery(B.H.M.S)'},
                    {key:'BPharma',value:'Bachelor of Pharmacy(B.Pharma)'},
                    {key:'BHM',value:'Bachelor of Hotel Management(B.H.M)'},
                    {key:'BLSc',value:'Bachelor Library Science(B.L.Sc)'},
                    {key:'BHMCT',value:'Bachelor Hotel Management and Catering Technology(B.H.M.C.T)'},
                    {key:'BMLT',value:'Bachelor of Medical Laboratory Technology(B.M.L.T)'},
                    {key:'BS',value:'Bachelor of Science(B.S)'},
                    {key:'LLB',value:'Bachelor of Law(LL.B)'},
                    {key:'BSc',value:'Bachelors of Science(B.Sc)'},
                    {key:'BSW',value:'Bachelor Of Social Work(B.S.W)'},
                    {key:'BTech',value:'Bachelors of Technology(B.Tech)'},
                    {key:'MBBS',value:'Bachelor of Medicine Bachelor of Surgery(M.B.B.S)'},
                    {key:'DEd',value:'Diploma of Education(D.Ed)'},
                    {key:'MD',value:'Doctor of Medicine(M.D)'},
                    {key:'FPM',value:'Fellow Programme in Management(F.P.M)'},
                    {key:'LLM',value:'Master of Law(LL.M)'},
                    {key:'MCom',value:'Master of Commerce(M.Com)'},
                    {key:'MA',value:'Master of Arts(M.A)'},
                    {key:'MArch',value:'Master of Architecture(M.Arch)'},
                    {key:'MBA',value:'Master of Business Administration(M.B.A)'},
                    {key:'MBL',value:'Master of Business Laws(M.B.L)'},
                    {key:'MBM',value:'Master of Business Management(M.B.M)'},
                    {key:'MBS',value:'Master of Business Studies(M.B.S)'},
                    {key:'MCA',value:'Master of Computer Applications(M.C.A)'},
                    {key:'MCM',value:'Master of Computer Management(M.C.M)'},
                    {key:'MCS',value:'Master of Computer Science(M.C.S)'},
                    {key:'MDS',value:'Master of Dental Surgery(M.D.S)'},
                    {key:'ME',value:'Master of Engineering(M.E)'},
                    {key:'MEd',value:'Master of Education(M.Ed)'},
                    {key:'MFM',value:'Master of Film Management(M.F.M)'},
                    {key:'ML',value:'Master of Laws(M.L)'},
                    {key:'MMM',value:'Master of Marketing Management(M.M.M)'},
                    {key:'MPharma',value:'Master of Pharmacy(M.Pharma)'},
                    {key:'MPhill',value:'Master of Philosophy(M.Phil)'},
                    {key:'MS',value:'Master of Science(M.S)'},
                    {key:'MSc',value:'Master of Science(M.Sc)'},
                    {key:'MSD',value:'Master of Social Dynamics(M.S.D)'},
                    {key:'MSW',value:'Master Of Social Work(M.S.W)'},
                    {key:'MTech',value:'Master of Technology(M.Tech)'},
                    {key:'Other',value:'Other'}
                  ]
           }
        }


//seperate Dataset for Bachelor Degree
         function educationBachelor() {
            if( $rootScope.languaseUsed == 'English'){
            return [
                    {key:'BA',value:'Bachelor of Arts(B.A)'},
                    {key:'BAMS',value:'Bachelor of Ayurvedic Medicine and Surgery(B.A.M.S)'},
                    {key:'BArch',value:'Bachelor of Architecture(B.Arch)'},
                    {key:'BBA',value:'Bachelor of Business Administration(B.B.A)'},
                    {key:'BBM',value:'Bachelor of Business Management(B.B.M)'},
                    {key:'BCA',value:'Bachelor of Computer Applications(B.C.A)'},
                    {key:'BCom',value:'Bachelor of Commerce(B.Com)'},
                    {key:'BCS',value:'Bachelor of Computer Science(B.C.S)'},
                    {key:'BDS',value:'Bachelor of Dental Surgery(B.D.S)'},
                    {key:'BE',value:'Bachelor of Engineering(B.E)'},
                    {key:'BEd',value:'Bachelor of Education(B.Ed)'},
                    {key:'BHMS',value:'Bachelor of Homeopathic Medicine & Surgery(B.H.M.S)'},
                    {key:'BPharma',value:'Bachelor of Pharmacy(B.Pharma)'},
                    {key:'BHM',value:'Bachelor of Hotel Management(B.H.M)'},
                    {key:'BLSc',value:'Bachelor Library Science(B.L.Sc)'},
                    {key:'BHMCT',value:'Bachelor Hotel Management and Catering Technology(B.H.M.C.T)'},
                    {key:'BMLT',value:'Bachelor of Medical Laboratory Technology(B.M.L.T)'},
                    {key:'BS',value:'Bachelor of Science(B.S)'},
                    {key:'LLB',value:'Bachelor of Law(LL.B)'},
                    {key:'BSc',value:'Bachelors of Science(B.Sc)'},
                    {key:'BSW',value:'Bachelor Of Social Work(B.S.W)'},
                    {key:'BTech',value:'Bachelors of Technology(B.Tech)'},
                    {key:'MBBS',value:'Bachelor of Medicine Bachelor of Surgery(M.B.B.S)'},
                    {key:'Other',value:'Other'}

               ]
           }else{
                return [
                    {key:'BA',value:'कला शाखेचा पदवीधर (B.A)'},
                    {key:'BAMS',value:'आयुर्वेदिक औषधे आणि शस्त्रक्रिया शाखेचा (B.A.M.S)'},
                    {key:'BArch',value:'आर्किटेक्चर पदवी(B.Arch)'},
                    {key:'BBA',value:'व्यवसाय प्रशासन शाखेचा पदवीधर(B.B.A)'},
                    {key:'BBM',value:'Bachelor of Business Management(B.B.M)'},
                    {key:'BCA',value:'Bachelor of Computer Applications(B.C.A)'},
                    {key:'BCom',value:'Bachelor of Commerce(B.Com)'},
                    {key:'BCS',value:'Bachelor of Computer Science(B.C.S)'},
                    {key:'BDS',value:'Bachelor of Dental Surgery(B.D.S)'},
                    {key:'BE',value:'Bachelor of Engineering(B.E)'},
                    {key:'BEd',value:'Bachelor of Education(B.Ed)'},
                    {key:'BHMS',value:'Bachelor of Homeopathic Medicine & Surgery(B.H.M.S)'},
                    {key:'BPharma',value:'Bachelor of Pharmacy(B.Pharma)'},
                    {key:'BHM',value:'Bachelor of Hotel Management(B.H.M)'},
                    {key:'BLSc',value:'Bachelor Library Science(B.L.Sc)'},
                    {key:'BHMCT',value:'Bachelor Hotel Management and Catering Technology(B.H.M.C.T)'},
                    {key:'BMLT',value:'Bachelor of Medical Laboratory Technology(B.M.L.T)'},
                    {key:'BS',value:'Bachelor of Science(B.S)'},
                    {key:'LLB',value:'Bachelor of Law(LL.B)'},
                    {key:'BSc',value:'Bachelors of Science(B.Sc)'},
                    {key:'BSW',value:'Bachelor Of Social Work(B.S.W)'},
                    {key:'BTech',value:'Bachelors of Technology(B.Tech)'},
                    {key:'MBBS',value:'Bachelor of Medicine Bachelor of Surgery(M.B.B.S)'},
                    {key:'Other',value:'Other'}
                  ]
           }
        }
//end seperate Dataset

//seperate Dataset for Master Degree
         function educationMaster() {
            if( $rootScope.languaseUsed == 'English'){
            return [
                    {key:'LLM',value:'Master of Law(LL.M)'},
                    {key:'MCom',value:'Master of Commerce(M.Com)'},
                    {key:'MA',value:'Master of Arts(M.A)'},
                    {key:'MArch',value:'Master of Architecture(M.Arch)'},
                    {key:'MBA',value:'Master of Business Administration(M.B.A)'},
                    {key:'MBL',value:'Master of Business Laws(M.B.L)'},
                    {key:'MBM',value:'Master of Business Management(M.B.M)'},
                    {key:'MBS',value:'Master of Business Studies(M.B.S)'},
                    {key:'MCA',value:'Master of Computer Applications(M.C.A)'},
                    {key:'MCM',value:'Master of Computer Management(M.C.M)'},
                    {key:'MCS',value:'Master of Computer Science(M.C.S)'},
                    {key:'MDS',value:'Master of Dental Surgery(M.D.S)'},
                    {key:'ME',value:'Master of Engineering(M.E)'},
                    {key:'MEd',value:'Master of Education(M.Ed)'},
                    {key:'MFM',value:'Master of Film Management(M.F.M)'},
                    {key:'ML',value:'Master of Laws(M.L)'},
                    {key:'MMM',value:'Master of Marketing Management(M.M.M)'},
                    {key:'MPharma',value:'Master of Pharmacy(M.Pharma)'},
                    {key:'MPhill',value:'Master of Philosophy(M.Phil)'},
                    {key:'MS',value:'Master of Science(M.S)'},
                    {key:'MSc',value:'Master of Science(M.Sc)'},
                    {key:'MSD',value:'Master of Social Dynamics(M.S.D)'},
                    {key:'MSW',value:'Master Of Social Work(M.S.W)'},
                    {key:'MTech',value:'Master of Technology(M.Tech)'},
                    {key:'Other',value:'Other'}
               ]
           }else{
                return [
                    {key:'LLM',value:'Master of Law(LL.M)'},
                    {key:'MCom',value:'Master of Commerce(M.Com)'},
                    {key:'MA',value:'Master of Arts(M.A)'},
                    {key:'MArch',value:'Master of Architecture(M.Arch)'},
                    {key:'MBA',value:'Master of Business Administration(M.B.A)'},
                    {key:'MBL',value:'Master of Business Laws(M.B.L)'},
                    {key:'MBM',value:'Master of Business Management(M.B.M)'},
                    {key:'MBS',value:'Master of Business Studies(M.B.S)'},
                    {key:'MCA',value:'Master of Computer Applications(M.C.A)'},
                    {key:'MCM',value:'Master of Computer Management(M.C.M)'},
                    {key:'MCS',value:'Master of Computer Science(M.C.S)'},
                    {key:'MDS',value:'Master of Dental Surgery(M.D.S)'},
                    {key:'ME',value:'Master of Engineering(M.E)'},
                    {key:'MEd',value:'Master of Education(M.Ed)'},
                    {key:'MFM',value:'Master of Film Management(M.F.M)'},
                    {key:'ML',value:'Master of Laws(M.L)'},
                    {key:'MMM',value:'Master of Marketing Management(M.M.M)'},
                    {key:'MPharma',value:'Master of Pharmacy(M.Pharma)'},
                    {key:'MPhill',value:'Master of Philosophy(M.Phil)'},
                    {key:'MS',value:'Master of Science(M.S)'},
                    {key:'MSc',value:'Master of Science(M.Sc)'},
                    {key:'MSD',value:'Master of Social Dynamics(M.S.D)'},
                    {key:'MSW',value:'Master Of Social Work(M.S.W)'},
                    {key:'MTech',value:'Master of Technology(M.Tech)'},
                    {key:'Other',value:'Other'}
                  ]
           }
        }
//end of Master degree Dataset

//Seperate dataset for Doctorate degree
         function educationDoctorate() {
            if( $rootScope.languaseUsed == 'English'){
            return [
                    {key:'Other',value:'Other'}
               ]
           }else{
                return [
                    {key:'Other',value:'Other'}
                  ]
           }
        }
//end of Doctorate degree

//Seperate dataset for High school or less than High School
        function educationHighSchoolOrLess() {
            if( $rootScope.languaseUsed == 'English'){
            return [
                    {key:'Other',value:'Other'},
               ]
           }else{
                return [
                    {key:'Other',value:'Other'},
                  ]
           }
        }
//end




       function income() {
           var data = [];
           var ele = {
                    key: 0,
                    value: $rootScope.languaseUsed =='English' ?  'Less Than 1 Lacs' : 'Less Than 1 Lacs'
                }
                data.push(ele);

             for (var i = 1; i < 100; i++)
              {
                var ele = {
                    key: i,
                    value: $rootScope.languaseUsed =='English' ?  'INR-'+i+' Lacs' : 'INR-'+i + ' लाख'
                }
                data.push(ele);
             }
             return data;
       }

        function get_income_to_display(income) {
            var incomeArray = {};
              for(var i = 1; i < 100; i++){
                incomeArray[i] = $rootScope.languaseUsed =='English' ?  'INR-'+i+' Lacs' : 'INR-'+i + ' लाख';
                if(i == income){
                    break;
                }
            }
            return incomeArray[income];
        }

       function day() {
           var Day = [];
            for(var i = 1; i <= 31; i++)
              {
                Day.push(i);
             }
             return Day;
       }

       function month() {
            return [
                    'January','February','March','April','May','June','July','August','September','October','November','December'
            ]
       }

       function year() {
                  var currentYesr = [];
                for(var i = currentYesr-50; i <= currentYesr-18; i++) {
                     currentYesr.push({name: i});
                }
             return currentYesr;
       }

       function weight() {
           var Weight = [];
           for (var i = 40; i < 100; i++)
              {
                Weight.push(i);
             }
             return Weight;
       }

       function age() {
            var Age = [];
            for (var i = 18; i < 50; i++)
            {
                Age.push(i);
            }
            return Age;
       }

       function amount() {
            return [
                    { key: 500, value: "Rs 500"},
                    { key: 1000, value: "Rs 1000"}
                  ];
        }

        function display_server_amount(val) {
            var amountArray = {
                100: "Rs 100 -10 contact credits",
                200: "Rs 200 -25 contact credits",
                500: "Rs 500 -75 contact credits",
                1000: "Rs 1000 -200 contact credits"
            };
            for (var amount in amountArray) {
                if (amountArray[amount] == val) {
                    return amount;
                }
            }
        }

        function marital_status(value) {
            var dataEnglish =[  { key : 'Unmarried' , value : 'Unmarried' },
                        { key :  'Widow/Widower',value :  'Widow/Widower' },
                        { key : 'Divorcee' , value : 'Divorcee' },
                        { key : 'Married' , value : 'Married' }
                   ]
            var dataMarathi =[  { key : 'Unmarried' , value : 'अविवाहित' },
                        { key :  'Widow/Widower',value :  'विधवा / विधुर' },
                        { key : 'Divorcee' , value : 'घटस्फोटित' },
                        { key : 'Married' , value : 'विवाहित' }
                   ]
                   if( value == null && value != true){
                        dataEnglish.pop();
                        dataMarathi.pop();
                   }
           return  $rootScope.languaseUsed == 'English' ? dataEnglish : dataMarathi ;
        }

        function Cities() {
            return [
                    'Aurangabad','Ahmednagar','Jalgaon','Kolhapur','Mumbai','Thane','Nagpur','Nashik','Pune','Sangli',
                    'Akola','Amravati','Beed','Bhandara','Buldhana','Chandrapur','Dhule','Gadchiroli','Gondiya','Hingoli',
                    'Jalna','Latur','Malegaon','Nanded','Nandurbar','Oras','Osmanabad','Parbhani','Raigad','Ratnagiri',
                    'Satara','Sewagram','Solapur','Wardha','Washim','Yavatmal','Other'
            ]
        }

        function CitiesM() {
            return [
                    'औरंगाबाद','अहमदनगर','जळगाव','कोल्हापूर','मुंबई','ठाणे','नागपूर','नाशिक','पुणे','सांगली',
                    'अकोला','अमरावती','बीड','भंडारा','बुलढाणा','चंद्रपूर','धुळे','गडचिरोली','गोंदिया','हिंगोली',
                    'जालना','लातूर','मालेगाव','नांदेड','नंदुरबार','इतर','उस्मानाबाद','परभणी','रायगड','रत्नागिरी',
                    'सातारा','सेवाग्राम','सोलापूर','वर्धा','वाशिम','यवतमाळ','इतर'
            ]
        }

        function Cities() {
           var cityDataEnglish  = [
                   {key:'Aurangabad', value:'Aurangabad'},
                    {key:'Ahmednagar', value:'Ahmednagar'},
                    {key:'Jalgaon', value:'Jalgaon'},
                    {key:'Kolhapur', value:'Kolhapur'},
                    {key:'Mumbai', value:'Mumbai'},
                    {key:'Thane', value:'Thane'},
                    {key:'Nagpur', value:'Nagpur'},
                    {key:'Nashik', value:'Nashik'},
                    {key:'Pune', value:'Pune'},
                    {key:'Sangli', value:'Sangli'},
                    {key:'Akola', value:'Akola'},
                    {key:'Amravati', value:'Amravati'},
                    {key:'Beed', value:'Beed'},
                    {key:'Bhandara', value:'Bhandara'},
                    {key:'Buldhana', value:'Buldhana'},
                    {key:'Chandrapur', value:'Chandrapur'},
                    {key:'Dhule', value:'Dhule'},
                    {key:'Gadchiroli', value:'Gadchiroli'},
                    {key:'Hingoli', value:'Hingoli'},
                    {key:'Jalna', value:'Jalna'},
                    {key:'Latur', value:'Latur'},
                    {key:'Malegaon', value:'Malegaon'},
                    {key:'Nanded', value:'Nanded'},
                    {key:'Nandurbar', value:'Nandurbar'},
                    {key:'Oras', value:'Oras'},
                    {key:'Osmanabad', value:'Osmanabad'},
                    {key:'Parbhani', value:'Parbhani'},
                    {key:'Raigad', value:'Raigad'},
                    {key:'Ratnagiri', value:'Ratnagiri'},
                    {key:'Satara', value:'Satara'},
                    {key:'Sewagram', value:'Sewagram'},
                    {key:'Solapur', value:'Solapur'},
                    {key:'Wardha', value:'Wardha'},
                    {key:'Washim', value:'Washim'},
                    {key:'Yavatmal', value:'Yavatmal'},
                    {key:'Other', value:'Other'}

           ]
           var cityDataMarathi  = [
                   {key:'Aurangabad', value: 'औरंगाबाद'},
                    {key:'Ahmednagar', value:'अहमदनगर'},
                    {key:'Jalgaon', value:'जळगाव'},
                    {key:'Kolhapur', value:'कोल्हापूर'},
                    {key:'Mumbai', value:'मुंबई'},
                    {key:'Thane', value:'ठाणे'},
                    {key:'Nagpur', value:'नागपूर'},
                    {key:'Nashik', value:'नाशिक'},
                    {key:'Pune', value:'पुणे'},
                    {key:'Sangli', value:'सांगली'},
                    {key:'Akola', value:'अकोला'},
                    {key:'Amravati', value:'अमरावती'},
                    {key:'Beed', value:'बीड'},
                    {key:'Bhandara', value:'भंडारा'},
                    {key:'Buldhana', value:'बुलढाणा'},
                    {key:'Chandrapur', value:'चंद्रपूर'},
                    {key:'Dhule', value:'धुळे'},
                    {key:'Gadchiroli', value:'गडचिरोली'},
                    {key:'Hingoli', value:'हिंगोली'},
                    {key:'Jalna', value:'जालना'},
                    {key:'Latur', value:'लातूर'},
                    {key:'Malegaon', value:'मालेगाव'},
                    {key:'Nanded', value:'नांदेड'},
                    {key:'Nandurbar', value:'नंदुरबार'},
                    {key:'Oras', value:'Oras'},
                    {key:'Osmanabad', value:'उस्मानाबाद'},
                    {key:'Parbhani', value:'परभणी'},
                    {key:'Raigad', value:'रायगड'},
                    {key:'Ratnagiri', value:'रत्नागिरी'},
                    {key:'Satara', value:'सातारा'},
                    {key:'Sewagram', value:'सेवाग्राम'},
                    {key:'Solapur', value:'सोलापूर'},
                    {key:'Wardha', value:'वर्धा'},
                    {key:'Washim', value:'वाशिम'},
                    {key:'Yavatmal', value:'यवतमाळ'},
                    {key:'Other', value:'इतर'}

           ]
           return  $rootScope.languaseUsed == 'English' ? cityDataEnglish : cityDataMarathi ;
       }

        function caste() {
           var casteEnglish = [
                        {key:'96k Maratha', value:'96k Maratha'},
                        {key:'Maratha-Deshmukh', value:'Maratha-Deshmukh'},
                        {key:'Maratha', value:'Maratha'},
                        {key:'Agri', value:'Agri'},
                        {key:'Arya Vysya', value:'Arya Vysya'},
                        {key:'Aryasamaj', value:'Aryasamaj'},
                        {key:'Beldar', value:'Beldar'},
                        {key:'Bhandari', value:'Bhandari'},
                        {key:'Berad', value:'Berad'},
                        {key:'Bhivar', value:'Bhivar'},
                        {key:'Bhavsar', value:'Bhavsar'},
                        {key:'Bhavsar Kshatriya', value:'Bhavsar Kshatriya'},
                        {key:'Brahmin', value:'Brahmin'},
                        {key:'Brahmin- Daivadnya', value:'Brahmin- Daivadnya'},
                        {key:'Brahmin- Desastha', value:'Brahmin- Desastha'},
                        {key:'Brahmin- Karhade', value:'Brahmin- Karhade'},
                        {key:'Brahmin- Kokanstha', value:'Brahmin- Kokanstha'},
                        {key:'Brahmin- Rigvedi', value:'Brahmin- Rigvedi'},
                        {key:'Brahmin- Saraswat', value:'Brahmin- Saraswat'},
                        {key:'Brahmin - Yajurvedi', value:'Brahmin - Yajurvedi'},
                        {key:'Brahmin Tyagi', value:'Brahmin Tyagi'},
                        {key:'Buddhist', value:'Buddhist'},
                        {key:'Chambhar', value:'Chambhar'},
                        {key:'CKP', value:'CKP'},
                        {key:'Desai', value:'Desai'},
                        {key:'Devang Koshti', value:'Devang Koshti'},
                        {key:'Dhali', value:'Dhali'},
                        {key:'Bhoi', value:'Bhoi'},
                        {key:'Halba', value:'Halba'},
                        {key:'Lonari', value:'Lonari'},
                        {key:'Golla', value:'Golla'},
                        {key:'Thakur', value:'Thakur'},
                        {key:'Devanga', value:'Devanga'},
                        {key:'Dhobi', value:'Dhobi'},
                        {key:'Gabit', value:'Gabit'},
                        {key:'Gomantak Maratha', value:'Gomantak Maratha'},
                        {key:'Gondhali', value:'Gondhali'},
                        {key:'Gosavi', value:'Gosavi'},
                        {key:'Gowari', value:'Gowari'},
                        {key:'Gowda', value:'Gowda'},
                        {key:'Gurjar', value:'Gurjar'},
                        {key:'Jangam', value:'Jangam'},
                        {key:'Kasar', value:'Kasar'},
                        {key:'Kayastha', value:'Kayastha'},
                        {key:'Koli', value:'Koli'},
                        {key:'Koli-Mahadeo', value:'Koli-Mahadeo'},
                        {key:'Kshtriya', value:'Kshtriya'},
                        {key:'Kumbhar', value:'Kumbhar'},
                        {key:'Kunbi', value:'Kunbi'},
                        {key:'Kashyap', value:'Kashyap'},
                        {key:'Khatri', value:'Khatri'},
                        {key:'Koshti', value:'Koshti'},
                        {key:'Kohli-Patil', value:'Kohli-Patil'},
                        {key:'Kumawat', value:'Kumawat'},
                        {key:'Kurmi', value:'Kurmi'},
                        {key:'Leva Patil', value:'Leva Patil'},
                        {key:'Lingayat', value:'Lingayat'},
                        {key:'Lohar', value:'Lohar'},
                        {key:'Mali', value:'Mali'},
                        {key:'Mang', value:'Mang'},
                        {key:'Mahar', value:'Mahar'},
                        {key:'Matang', value:'Matang'},
                        {key:'Nhavi', value:'Nhavi'},
                        {key:'NathJogi', value:'NathJogi'},
                        {key:'Shahu', value:'Shahu'},
                        {key:'Sonar', value:'Sonar'},
                        {key:'Sowrashtra', value:'Sowrashtra'},
                        {key:'Sutar', value:'Sutar'},
                        {key:'Swarnakar', value:'Swarnakar'},
                        {key:'Teli', value:'Teli'},
                        {key:'Thevar', value:'Thevar'},
                        {key:'Vaishnav', value:'Vaishnav'},
                        {key:'Vaishya Wani', value:'Vaishya Wani'},
                        {key:'Vanjari', value:'Vanjari'},
                        {key:'Vyasa', value:'Vyasa'},
                        {key:'Vishwakarma', value:'Vishwakarma'},
                        {key:'Yadav', value:'Yadav'},
                        {key:'Banjara', value:'Banjara'},
                        {key:'Baradi', value:'Baradi'},
                        {key:'Bari', value:'Bari'},
                        {key:'Gawali', value:'Gawali'},
                        {key:'Ghisadi', value:'Ghisadi'},
                        {key:'Gurav', value:'Gurav'},
                        {key:'Otari', value:'Otari'},
                        {key:'Savji', value:'Savji'},
                        {key:'Rajput', value:'Rajput'},
                        {key:'Dhor', value:'Dhor'},
                        {key:'Shimpi', value:'Shimpi'},
                        {key:'Shimpi', value:'Shimpi'},
                        {key:'Namdeo', value:'Namdeo'},
                        {key:'Sali', value:'Sali'},
                        {key:'Sali-Swakul', value:'Sali-Swakul'},
                        {key:'Wani', value:'Wani'},
                        {key:'Marwadi', value:'Marwadi'},
                        {key:'Kasar Tambat', value:'Kasar Tambat'},
                        {key:'Vadar', value:'Vadar'},
                        {key:'Other', value:'Other'},
                        {key:'Caste No Bar', value:'Caste No Bar'}

              ]
               var casteMarathi = [
                        {key:'96k Maratha', value:'९६ कुळीे'},
                        {key:'Maratha-Deshmukh', value:'मराठा-देशमुख'},
                        {key:'Maratha', value:'मराठा'},
                        {key:'Agri', value:'आगरी '},
                        {key:'Arya Vysya', value:'आर्य-वश्य'},
                        {key:'Aryasamaj', value:'आर्यसमाज'},
                        {key:'Beldar', value:'बेलदार '},
                        {key:'Bhandari', value:'भंडारी'},
                        {key:'Berad', value:'बेरड'},
                        {key:'Bhivar', value:'भिवर'},
                        {key:'Bhavsar', value:'भावसार'},
                        {key:'Bhavsar Kshatriya', value:'भावसार क्षत्रिय'},
                        {key:'Brahmin', value:'ब्राह्मण'},
                        {key:'Brahmin- Daivadnya', value:'ब्राह्मण- दैवज्ञ'},
                        {key:'Brahmin- Desastha', value:'ब्राह्मण- देशस्थ'},
                        {key:'Brahmin- Karhade', value:'ब्राह्मण- कऱ्हाडे'},
                        {key:'Brahmin- Kokanstha', value:'ब्राह्मण- कोकणस्थ'},
                        {key:'Brahmin- Rigvedi', value:'ब्राह्मण- रिग्वेदी'},
                        {key:'Brahmin- Saraswat', value:'ब्राह्मण- सारस्वत'},
                        {key:'Brahmin - Yajurvedi', value:'ब्राह्मण - यजुर्वेदी'},
                        {key:'Brahmin Tyagi', value:'ब्राह्मणत्यागी'},
                        {key:'Buddhist', value:'बुद्दिष्ट'},
                        {key:'Chambhar', value:'चांभार'},
                        {key:'CKP', value:'सीकेपी'},
                        {key:'Desai', value:'देसाई'},
                        {key:'Devang Koshti', value:'देवांग कोष्टी'},
                        {key:'Dhali', value:'ढाली'},
                        {key:'Bhoi', value:'भोई'},
                        {key:'Halba', value:'हलबा'},
                        {key:'Lonari', value:'लोणारी'},
                        {key:'Golla', value:'गोल्ला'},
                        {key:'Thakur', value:'ठाकुर'},
                        {key:'Devanga', value:'देवांग'},
                        {key:'Dhobi', value:'धोबी'},
                        {key:'Gabit', value:'गॅबीट'},
                        {key:'Gomantak Maratha', value:'गोमांतक मराठा'},
                        {key:'Gondhali', value:'गोंधळी'},
                        {key:'Gosavi', value:'गोसावी'},
                        {key:'Gowari', value:'गोवारी'},
                        {key:'Gowda', value:'गौडा'},
                        {key:'Gurjar', value:'गुर्जर'},
                        {key:'Jangam', value:'जंगम'},
                        {key:'Kasar', value:'केसर'},
                        {key:'Kayastha', value:'कायस्थ'},
                        {key:'Koli', value:'कोळी'},
                        {key:'Koli-Mahadeo', value:'कोळी-महादेव'},
                        {key:'Kshtriya', value:'क्षत्रिय'},
                        {key:'Kumbhar', value:'कुंभार'},
                        {key:'Kunbi', value:'कुणबी'},
                        {key:'Kashyap', value:'कश्यप'},
                        {key:'Khatri', value:'खात्री'},
                        {key:'Koshti', value:'कोष्टी'},
                        {key:'Kohli-Patil', value:'कोहली-पाटील '},
                        {key:'Kumawat', value:'कुमावत'},
                        {key:'Kurmi', value:'कुर्मी'},
                        {key:'Leva Patil', value:'लेवा पाटील'},
                        {key:'Lingayat', value:'लिंगायत'},
                        {key:'Lohar', value:'लोहार'},
                        {key:'Mali', value:'माळी'},
                        {key:'Mang', value:'मांग'},
                        {key:'Mahar', value:'महार'},
                        {key:'Matang', value:'मातंग'},
                        {key:'Nhavi', value:'न्हावी'},
                        {key:'NathJogi', value:'नाथजोगी'},
                        {key:'Shahu', value:'शाहु'},
                        {key:'Sonar', value:'सोनार'},
                        {key:'Sowrashtra', value:'सोवराष्ट्र'},
                        {key:'Sutar', value:'सुतार'},
                        {key:'Swarnakar', value:'स्वर्णकार'},
                        {key:'Teli', value:'तेली'},
                        {key:'Thevar', value:'थेवर'},
                        {key:'Vaishnav', value:'वैष्णव'},
                        {key:'Vaishya Wani', value:'वैश्य वाणी '},
                        {key:'Vanjari', value:'वंजारी'},
                        {key:'Vyasa', value:'व्यास'},
                        {key:'Vishwakarma', value:'विश्वकर्मा'},
                        {key:'Yadav', value:'यादव'},
                        {key:'Banjara', value:'बंजारा'},
                        {key:'Baradi', value:'बराडी'},
                        {key:'Bari', value:'बारी'},
                        {key:'Gawali', value:'गवळी'},
                        {key:'Ghisadi', value:'घिसाडी'},
                        {key:'Gurav', value:'गुरव'},
                        {key:'Otari', value:'ओतारी'},
                        {key:'Savji', value:'सावजी'},
                        {key:'Rajput', value:'राजपूत'},
                        {key:'Dhor', value:'ढोर'},
                        {key:'Shimpi', value:'शिंपी'},
                        {key:'Namdeo', value:'नामदेव'},
                        {key:'Sali', value:'साळी'},
                        {key:'Sali-Swakul', value:'साळी-स्वकुळ'},
                        {key:'Wani', value:'वाणी'},
                        {key:'Marwadi', value:'मारवाडी'},
                        {key:'Kasar Tambat', value:'कासार तांबट'},
                        {key:'Vadar', value:'वडार'},
                        {key:'Other', value:'इतर'},
                        {key:'Caste No Bar', value:'Caste No Bar'}

              ]
         return  $rootScope.languaseUsed == 'English' ? casteEnglish : casteMarathi ;
       }

        function height() {
            return [
                { key: 10, value: "4' 3'' - 130cm"},
                { key: 11, value: "4' 4'' - 132cm"},
                { key: 12, value: "4' 5'' - 134cm"},
                { key: 13, value: "4' 6'' - 137cm"},
                { key: 14, value: "4' 7'' - 139cm"},
                { key: 15, value: "4' 8'' - 142cm"},
                { key: 16, value: "4' 9'' - 144cm"},
                { key: 17, value: "4' 10'' - 147cm"},
                { key: 18, value: "4' 11'' - 149cm"},
                { key: 19, value: "5' - 152cm"},
                { key: 20, value: "5' 1'' - 154cm"},
                { key: 21, value: "5' 2'' - 157cm"},
                { key: 22, value: "5' 3'' - 160cm"},
                { key: 23, value: "5' 4'' - 162cm"},
                { key: 24, value: "5' 5'' - 165cm"},
                { key: 25, value: "5' 6'' - 167cm"},
                { key: 26, value: "5' 7'' - 170cm"},
                { key: 27, value: "5' 8'' - 172cm"},
                { key: 28, value: "5' 9'' - 175cm"},
                { key: 29, value: "5' 10'' - 177cm"},
                { key: 30, value: "5' 11'' - 180cm"},
                { key: 31, value: "6' - 182cm"},
                { key: 32, value: "6' 1'' - 185cm"},
                { key: 33, value: "6' 2'' - 187cm"},
                { key: 34, value: "6' 3'' - 190cm"},
                { key: 35, value: "6' 4'' - 193cm"},
                { key: 36, value: "6' 5'' - 195cm"},
                { key: 37, value: "6' 6'' - 198cm"},
                { key: 38, value: "6' 7'' - 200cm"},
                { key: 39, value: "6' 8'' - 203cm"},
                { key: 40, value: "6' 9'' - 205cm"},
                { key: 41, value: "6' 10'' - 208cm"},
                { key: 42, value: "6' 11'' - 210cm"},
                { key: 43, value: "7' - 213cm"}
            ];
        }

        function display_server_height(val) {
            var heightArray = {
                10: "4' 3'' - 130cm",
                11: "4' 4'' - 132cm",
                12: "4' 5'' - 134cm",
                13: "4' 6'' - 137cm",
                14: "4' 7'' - 139cm",
                15: "4' 8'' - 142cm",
                16: "4' 9'' - 144cm",
                17: "4' 10'' - 147cm",
                18: "4' 11'' - 149cm",
                19: "5' - 152cm",
                20: "5' 1'' - 154cm",
                21: "5' 2'' - 157cm",
                22: "5' 3'' - 160cm",
                23: "5' 4'' - 162cm",
                24: "5' 5'' - 165cm",
                25: "5' 6'' - 167cm",
                26: "5' 7'' - 170cm",
                27: "5' 8'' - 172cm",
                28: "5' 9'' - 175cm",
                29: "5' 10'' - 177cm",
                30: "5' 11'' - 180cm",
                31: "6' - 182cm",
                32: "6' 1'' - 185cm",
                33: "6' 2'' - 187cm",
                34: "6' 3'' - 190cm",
                35: "6' 4'' - 193cm",
                36: "6' 5'' - 195cm",
                37: "6' 6'' - 198cm",
                38: "6' 7'' - 200cm",
                39: "6' 8'' - 203cm",
                40: "6' 9'' - 205cm",
                41: "6' 10'' - 208cm",
                42: "6' 11'' - 210cm",
                43: "7' - 213cm"
            };
            for (var height in heightArray) {
                if (heightArray[height] == val) {
                    return height;
                }
            }
        }

        function get_height_to_display(height)
        {
            if(!height){
                return '';
            }
            var heightArray = {
                10: "4' 3'' - 130cm",
                11: "4' 4'' - 132cm",
                12: "4' 5'' - 134cm",
                13: "4' 6'' - 137cm",
                14: "4' 7'' - 139cm",
                15: "4' 8'' - 142cm",
                16: "4' 9'' - 144cm",
                17: "4' 10'' - 147cm",
                18: "4' 11'' - 149cm",
                19: "5' - 152cm",
                20: "5' 1'' - 154cm",
                21: "5' 2'' - 157cm",
                22: "5' 3'' - 160cm",
                23: "5' 4'' - 162cm",
                24: "5' 5'' - 165cm",
                25: "5' 6'' - 167cm",
                26: "5' 7'' - 170cm",
                27: "5' 8'' - 172cm",
                28: "5' 9'' - 175cm",
                29: "5' 10'' - 177cm",
                30: "5' 11'' - 180cm",
                31: "6' - 182cm",
                32: "6' 1'' - 185cm",
                33: "6' 2'' - 187cm",
                34: "6' 3'' - 190cm",
                35: "6' 4'' - 193cm",
                36: "6' 5'' - 195cm",
                37: "6' 6'' - 198cm",
                38: "6' 7'' - 200cm",
                39: "6' 8'' - 203cm",
                40: "6' 9'' - 205cm",
                41: "6' 10'' - 208cm",
                42: "6' 11'' - 210cm",
                43: "7' - 213cm"
            };
            return heightArray[height];
        }


        function education_level() {
            var educationLevelEnglish = [
                {key:'Bachelors', value:'Bachelors'},
                {key:'Masters', value:'Masters'},
                {key:'Doctorate', value:'Doctorate'},
                {key:'Undergraduate', value:'Undergraduate'},
                {key:'Associates degree', value:'Associates degree'},
                {key:'Honours degree', value:'Honours degree'},
                {key:'Trade school', value:'Trade school'},
                {key:'High school', value:'High school'},
                {key:'Less than high school', value:'Less than high school'},

            ]
            var educationLevelMarathi = [
                {key:'Bachelors', value:'Bachelors'},
                {key:'Masters', value:'Masters'},
                {key:'Doctorate', value:'Doctorate'},
                {key:'Undergraduate', value:'Undergraduate'},
                {key:'Associates degree', value:'Associates degree'},
                {key:'Honours degree', value:'Honours degree'},
                {key:'Trade school', value:'Trade school'},
                {key:'High school', value:'High school'},
                {key:'Less than high school', value:'Less than high school'},

            ]
              return  $rootScope.languaseUsed == 'English' ? educationLevelEnglish : educationLevelMarathi ;
        }

        function education_field() {
            var  educationFieldEnglish = [
                {key:'Advertising/ Marketing', value:'Advertising/ Marketing'},
                {key:'Administrative services', value:'Administrative services'},
                {key:'Architecture', value:'Architecture'},
                {key:'Armed Forces', value:'Armed Forces'},
                {key:'Arts', value:'Arts'},
                {key:'Commerce', value:'Commerce'},
                {key:'Computers/ IT', value:'Computers/ IT'},
                {key:'Education', value:'Education'},
                {key:'Engineering/ Technology', value:'Engineering/ Technology'},
                {key:'Fashion', value:'Fashion'},
                {key:'Finance', value:'Finance'},
                {key:'Fine Arts', value:'Fine Arts'},
                {key:'Home Science', value:'Home Science'},
                {key:'Law', value:'Law'},
                {key:'Management', value:'Management'},
                {key:'Medicine', value:'Medicine'},
                {key:'Nursing/ Health Sciences', value:'Nursing/ Health Sciences'},
                {key:'Office administration', value:'Office administration'},
                {key:'Science', value:'Science'},
                {key:'Shipping', value:'Shipping'},
                {key:'Travel and Tourism', value:'Travel and Tourism'},
                {key:'Other', value:'Other'}
            ]
             var  educationFieldMarathi = [
                {key:'Advertising/ Marketing', value:'Advertising/ Marketing'},
                {key:'Administrative services', value:'Administrative services'},
                {key:'Architecture', value:'Architecture'},
                {key:'Armed Forces', value:'Armed Forces'},
                {key:'Arts', value:'Arts'},
                {key:'Commerce', value:'Commerce'},
                {key:'Computers/ IT', value:'Computers/ IT'},
                {key:'Education', value:'Education'},
                {key:'Engineering/ Technology', value:'Engineering/ Technology'},
                {key:'Fashion', value:'Fashion'},
                {key:'Finance', value:'Finance'},
                {key:'Fine Arts', value:'Fine Arts'},
                {key:'Home Science', value:'Home Science'},
                {key:'Law', value:'Law'},
                {key:'Management', value:'Management'},
                {key:'Medicine', value:'Medicine'},
                {key:'Nursing/ Health Sciences', value:'Nursing/ Health Sciences'},
                {key:'Office administration', value:'Office administration'},
                {key:'Science', value:'Science'},
                {key:'Shipping', value:'Shipping'},
                {key:'Travel and Tourism', value:'Travel and Tourism'},
                {key:'Other', value:'Other'}
            ]
             return  $rootScope.languaseUsed == 'English' ? educationFieldEnglish : educationFieldMarathi ;

        }

        function blood_group() {
            return [
                    'O +VE','A +VE','B +VE','AB+VE','O -VE','A -VE','B -VE','AB -VE'
            ]
        }

        function complexion() {
            var complexionEnglishdata= [
                {key : 'Fair' ,value : 'Fair' },
                {key : 'Medium', value : 'Medium' },
                {key : 'Blackish', value : 'Blackish' }
            ]
            var complexionMarathiData= [
                {key : 'Fair' ,value : 'गोरा' },
                {key : 'Medium' ,value : 'मध्यम' },
                {key : 'Blackish', value : 'सावळा' }
            ]
            return $rootScope.languaseUsed == 'English' ? complexionEnglishdata : complexionMarathiData ;
        }

        function physic() {
            var physicEnglishData =[
                {key : 'Slim', value : 'Slim' },
                {key : 'Medium', value : 'Medium' },
                {key : 'Healthy', value : 'Healthy' },
                {key : 'Fat', value : 'Fat' }
            ]
            var physicMarathiData =[
                {key : 'Slim', value : 'सडपातळ' },
                {key : 'Medium', value : 'मध्यम' },
                {key : 'Healthy', value : 'सुदृढ' },
                {key : 'Fat', value : 'जाड' }
            ]
           return  $rootScope.languaseUsed == 'English' ? physicEnglishData : physicMarathiData ;
        }

        function working_as() {
            return [
                    { key :'Banking Professional' , value : 'Banking Professional' },
                    /*'Banking Professional','Chartered Accountant','Company Secretary','Finance Professional','Investment Professional',
                    'Accounting Professional','Admin Professional','Human Resources Professional','Advertising Professional','Artist',
                    'Entertainment Professional','Event Manager','Journalist','Media Professional','Public Relations Professional',
                    'Farming','Horticulturist','Agricultural Professional','Air Hostess / Flight Attendant','Pilot / Co-Pilot',
                    'Other Airline Professional','Architect','Interior Designer','Landscape Architect','Animator','Commercial Artist',
                    'Web / UX Designers','Beautician','Fashion Designer','Hairstylist','Jewellery Designer','Designer',
                    'Customer Support / BPO / KPO Professional','IAS / IRS / IES / IFS','Airforce',
                    'Indian Police Services (IPS)','Law Enforcement Employee','Army','Navy','Defense Services','Lecturer',
                    'Professor', 'Research Assistant','Research Scholar','Teacher','Training Professional','Non IT Engineer',
                    'Electronics / Telecom Engineer','Mechanical / Production Engineer','Catering Professional',
                    'Chef / Sommelier / Food Critic','Hospitality Professional','Software Developer / Programmer','Software Consultant',
                    'Hardware &amp; Networking professional','Software Professional','Civil Engineer','Lawyer','Legal Assistant',
                    'Legal Professional','Dentist','Doctor','Medical Transcriptionist','Nurse','Pharmacist','Physician Assistant',
                    'Physiotherapist / Occupational Therapist','Medical / Healthcare Professional','Psychologist','Surgeon','Therapist',
                    'Veterinary Doctor','Merchant Naval Officer','Mariner','Marketing Professional','Sales Professional','Physicist',
                    'Biologist / Botanist','Science Professional','CxO / Chairman / Director / President', 'VP / AVP / GM / DGM',
                    'Sr. Manager / Manager','Consultant / Supervisor / Team Leads','Team Member / Staff','Business Owner / Entrepreneur',
                    'Agent / Broker / Trader / Contractor','Politician','Social Worker / Volunteer / NGO','Sportsman','Writer',
                    'Travel &amp; Transport Professional','Student','Retired','Not working','Other'
            */]
        }

        function working_as() {
        var workingAsEnglish = [
            {key:'Banking Professional', value:'Banking Professional'},
            {key:'Chartered Accountant', value:'Chartered Accountant'},
            {key:'Company Secretary', value:'Company Secretary'},
            {key:'Finance Professional', value:'Finance Professional'},
            {key:'Investment Professional', value:'Investment Professional'},
            {key:'Accounting Professional', value:'Accounting Professional'},
            {key:'Admin Professional', value:'Admin Professional'},
            {key:'Human Resources Professional', value:'Human Resources Professional'},
            {key:'Advertising Professional', value:'Advertising Professional'},
            {key:'Artist', value:'Artist'},
            {key:'Entertainment Professional', value:'Entertainment Professional'},
            {key:'Event Manager', value:'Event Manager'},
            {key:'Journalist', value:'Journalist'},
            {key:'Media Professional', value:'Media Professional'},
            {key:'Public Relations Professional', value:'Public Relations Professional'},
            {key:'Horticulturist', value:'Horticulturist'},
            {key:'Agricultural Professional', value:'Agricultural Professional'},
            {key:'Air Hostess / Flight Attendant', value:'Air Hostess / Flight Attendant'},
            {key:'Pilot / Co-Pilot', value:'Pilot / Co-Pilot'},
            {key:'Other Airline Professional', value:'Other Airline Professional'},
            {key:'Architect', value:'Architect'},
            {key:'Interior Designer', value:'Interior Designer'},
            {key:'Landscape Architect', value:'Landscape Architect'},
            {key:'Animator', value:'Animator'},
            {key:'Commercial Artist', value:'Commercial Artist'},
            {key:'Web / UX Designers', value:'Web / UX Designers'},
            {key:'Beautician', value:'Beautician'},
            {key:'Fashion Designer', value:'Fashion Designer'},
            {key:'Hairstylist', value:'Hairstylist'},
            {key:'Jewellery Designer', value:'Jewellery Designer'},
            {key:'Designer', value:'Designer'},
            {key:'Customer Support / BPO / KPO Professional', value:'Customer Support / BPO / KPO Professional'},
            {key:'IAS / IRS / IES / IFS', value:'IAS / IRS / IES / IFS'},
            {key:'Airforce', value:'Airforce'},
            {key:'Indian Police Services (IPS)', value:'Indian Police Services (IPS)'},
            {key:'Law Enforcement Employee', value:'Law Enforcement Employee'},
            {key:'Army', value:'Army'},
            {key:'Navy', value:'Navy'},
            {key:'Defense Services', value:'Defense Services'},
            {key:'Lecturer', value:'Lecturer'},
            {key:'Professor', value:'Professor'},
            {key:'Research Assistant', value:'Research Assistant'},
            {key:'Research Scholar', value:'Research Scholar'},
            {key:'Teacher', value:'Teacher'},
            {key:'Training Professional', value:'Training Professional'},
            {key:'Non IT Engineer', value:'Non IT Engineer'},
            {key:'Electronics / Telecom Engineer', value:'Electronics / Telecom Engineer'},
            {key:'Mechanical / Production Engineer', value:'Mechanical / Production Engineer'},
            {key:'Catering Professional', value:'Catering Professional'},
            {key:'Chef / Sommelier / Food Critic', value:'Chef / Sommelier / Food Critic'},
            {key:'Hospitality Professional', value:'Hospitality Professional'},
            {key:'Software Developer / Programmer', value:'Software Developer / Programmer'},
            {key:'Software Consultant', value:'Software Consultant'},
            {key:'Hardware &amp; Networking professional', value:'Hardware &amp; Networking professional'},
            {key:'Software Professional', value:'Software Professional'},
            {key:'Civil Engineer', value:'Civil Engineer'},
            {key:'Lawyer', value:'Lawyer'},
            {key:'Legal Assistant', value:'Legal Assistant'},
            {key:'Legal Professional', value:'Legal Professional'},
            {key:'Dentist', value:'Dentist'},
            {key:'Doctor', value:'Doctor'},
            {key:'Medical Transcriptionist', value:'Medical Transcriptionist'},
            {key:'Nurse', value:'Nurse'},
            {key:'Pharmacist', value:'Pharmacist'},
            {key:'Physician Assistant', value:'Physician Assistant'},
            {key:'Physiotherapist / Occupational Therapist', value:'Physiotherapist / Occupational Therapist'},
            {key:'Medical / Healthcare Professional', value:'Medical / Healthcare Professional'},
            {key:'Psychologist', value:'Psychologist'},
            {key:'Surgeon', value:'Surgeon'},
            {key:'Therapist', value:'Therapist'},
            {key:'Veterinary Doctor', value:'Veterinary Doctor'},
            {key:'Merchant Naval Officer', value:'Merchant Naval Officer'},
            {key:'Mariner', value:'Mariner'},
            {key:'Marketing Professional', value:'Marketing Professional'},
            {key:'Sales Professional', value:'Sales Professional'},
            {key:'Physicist', value:'Physicist'},
            {key:'Biologist / Botanist', value:'Biologist / Botanist'},
            {key:'Science Professional', value:'Science Professional'},
            {key:'CxO / Chairman / Director / President', value:'CxO / Chairman / Director / President'},
            {key:'VP / AVP / GM / DGM', value:'VP / AVP / GM / DGM'},
            {key:'Sr. Manager / Manager', value:'Sr. Manager / Manager'},
            {key:'Consultant / Supervisor / Team Leads', value:'Consultant / Supervisor / Team Leads'},
            {key:'Team Member / Staff', value:'Team Member / Staff'},
            {key:'Business Owner / Entrepreneur', value:'Business Owner / Entrepreneur'},
            {key:'Agent / Broker / Trader / Contractor', value:'Agent / Broker / Trader / Contractor'},
            {key:'Politician', value:'Politician'},
            {key:'Social Worker / Volunteer / NGO', value:'Social Worker / Volunteer / NGO'},
            {key:'Sportsman', value:'Sportsman'},
            {key:'Writer', value:'Writer'},
            {key:'Travel &amp; Transport Professional', value:'Travel &amp; Transport Professional'},
            {key:'Student', value:'Student'},
            {key:'Retired', value:'Retired'},
            {key:'Not working', value:'Not working'},
            {key:'Other', value:'Other'}
            ]
         var workingAsMarathi = [
            {key:'Banking Professional', value:'Banking Professional'},
            {key:'Chartered Accountant', value:'Chartered Accountant'},
            {key:'Company Secretary', value:'Company Secretary'},
            {key:'Finance Professional', value:'Finance Professional'},
            {key:'Investment Professional', value:'Investment Professional'},
            {key:'Accounting Professional', value:'Accounting Professional'},
            {key:'Admin Professional', value:'Admin Professional'},
            {key:'Human Resources Professional', value:'Human Resources Professional'},
            {key:'Advertising Professional', value:'Advertising Professional'},
            {key:'Artist', value:'Artist'},
            {key:'Entertainment Professional', value:'Entertainment Professional'},
            {key:'Event Manager', value:'Event Manager'},
            {key:'Journalist', value:'Journalist'},
            {key:'Media Professional', value:'Media Professional'},
            {key:'Public Relations Professional', value:'Public Relations Professional'},
            {key:'Horticulturist', value:'Horticulturist'},
            {key:'Agricultural Professional', value:'Agricultural Professional'},
            {key:'Air Hostess / Flight Attendant', value:'Air Hostess / Flight Attendant'},
            {key:'Pilot / Co-Pilot', value:'Pilot / Co-Pilot'},
            {key:'Other Airline Professional', value:'Other Airline Professional'},
            {key:'Architect', value:'Architect'},
            {key:'Interior Designer', value:'Interior Designer'},
            {key:'Landscape Architect', value:'Landscape Architect'},
            {key:'Animator', value:'Animator'},
            {key:'Commercial Artist', value:'Commercial Artist'},
            {key:'Web / UX Designers', value:'Web / UX Designers'},
            {key:'Beautician', value:'Beautician'},
            {key:'Fashion Designer', value:'Fashion Designer'},
            {key:'Hairstylist', value:'Hairstylist'},
            {key:'Jewellery Designer', value:'Jewellery Designer'},
            {key:'Designer', value:'Designer'},
            {key:'Customer Support / BPO / KPO Professional', value:'Customer Support / BPO / KPO Professional'},
            {key:'IAS / IRS / IES / IFS', value:'IAS / IRS / IES / IFS'},
            {key:'Airforce', value:'Airforce'},
            {key:'Indian Police Services (IPS)', value:'Indian Police Services (IPS)'},
            {key:'Law Enforcement Employee', value:'Law Enforcement Employee'},
            {key:'Army', value:'Army'},
            {key:'Navy', value:'Navy'},
            {key:'Defense Services', value:'Defense Services'},
            {key:'Lecturer', value:'Lecturer'},
            {key:'Professor', value:'Professor'},
            {key:'Research Assistant', value:'Research Assistant'},
            {key:'Research Scholar', value:'Research Scholar'},
            {key:'Teacher', value:'Teacher'},
            {key:'Training Professional', value:'Training Professional'},
            {key:'Non IT Engineer', value:'Non IT Engineer'},
            {key:'Electronics / Telecom Engineer', value:'Electronics / Telecom Engineer'},
            {key:'Mechanical / Production Engineer', value:'Mechanical / Production Engineer'},
            {key:'Catering Professional', value:'Catering Professional'},
            {key:'Chef / Sommelier / Food Critic', value:'Chef / Sommelier / Food Critic'},
            {key:'Hospitality Professional', value:'Hospitality Professional'},
            {key:'Software Developer / Programmer', value:'Software Developer / Programmer'},
            {key:'Software Consultant', value:'Software Consultant'},
            {key:'Hardware &amp; Networking professional', value:'Hardware &amp; Networking professional'},
            {key:'Software Professional', value:'Software Professional'},
            {key:'Civil Engineer', value:'Civil Engineer'},
            {key:'Lawyer', value:'Lawyer'},
            {key:'Legal Assistant', value:'Legal Assistant'},
            {key:'Legal Professional', value:'Legal Professional'},
            {key:'Dentist', value:'Dentist'},
            {key:'Doctor', value:'Doctor'},
            {key:'Medical Transcriptionist', value:'Medical Transcriptionist'},
            {key:'Nurse', value:'Nurse'},
            {key:'Pharmacist', value:'Pharmacist'},
            {key:'Physician Assistant', value:'Physician Assistant'},
            {key:'Physiotherapist / Occupational Therapist', value:'Physiotherapist / Occupational Therapist'},
            {key:'Medical / Healthcare Professional', value:'Medical / Healthcare Professional'},
            {key:'Psychologist', value:'Psychologist'},
            {key:'Surgeon', value:'Surgeon'},
            {key:'Therapist', value:'Therapist'},
            {key:'Veterinary Doctor', value:'Veterinary Doctor'},
            {key:'Merchant Naval Officer', value:'Merchant Naval Officer'},
            {key:'Mariner', value:'Mariner'},
            {key:'Marketing Professional', value:'Marketing Professional'},
            {key:'Sales Professional', value:'Sales Professional'},
            {key:'Physicist', value:'Physicist'},
            {key:'Biologist / Botanist', value:'Biologist / Botanist'},
            {key:'Science Professional', value:'Science Professional'},
            {key:'CxO / Chairman / Director / President', value:'CxO / Chairman / Director / President'},
            {key:'VP / AVP / GM / DGM', value:'VP / AVP / GM / DGM'},
            {key:'Sr. Manager / Manager', value:'Sr. Manager / Manager'},
            {key:'Consultant / Supervisor / Team Leads', value:'Consultant / Supervisor / Team Leads'},
            {key:'Team Member / Staff', value:'Team Member / Staff'},
            {key:'Business Owner / Entrepreneur', value:'Business Owner / Entrepreneur'},
            {key:'Agent / Broker / Trader / Contractor', value:'Agent / Broker / Trader / Contractor'},
            {key:'Politician', value:'Politician'},
            {key:'Social Worker / Volunteer / NGO', value:'Social Worker / Volunteer / NGO'},
            {key:'Sportsman', value:'Sportsman'},
            {key:'Writer', value:'Writer'},
            {key:'Travel &amp; Transport Professional', value:'Travel &amp; Transport Professional'},
            {key:'Student', value:'Student'},
            {key:'Retired', value:'Retired'},
            {key:'Not working', value:'Not working'},
            {key:'Other', value:'Other'}
            ]

            return  $rootScope.languaseUsed == 'English' ? workingAsEnglish : workingAsMarathi ;

        }

        function working_with() {
            var working_withEnglish=[
                    { key :'Private Company' , value : 'Private Company' },
                    { key :'Government / Public Sector' , value : 'Government / Public Sector' },
                    { key :'Defense / Civil Services' , value : 'Defense / Civil Services' },
                    { key :'Business / Self Employed' , value : 'Business / Self Employed' },
                    { key :'Non Working' , value : 'Non Working' },
                    { key :'Other' , value : 'Other' }

            ]
             var working_withMarathi=[
                    { key :'Private Company' , value : 'Private Company' },
                    { key :'Government / Public Sector' , value : 'Government / Public Sector' },
                    { key :'Defense / Civil Services' , value : 'Defense / Civil Services' },
                    { key :'Business / Self Employed' , value : 'Business / Self Employed' },
                    { key :'Non Working' , value : 'Non Working' },
                    { key :'Other' , value : 'Other' }

            ]
            return  $rootScope.languaseUsed == 'English' ? working_withEnglish : working_withMarathi ;
        }

        function rashi() {
            var rashiMarathi= [
                     { key :'Mesh' , value : 'मेष' },
                     { key :'Vrushabha' , value : 'वृषभ' },
                     { key :'Mithun' , value : 'मिथुन' },
                     { key :'Karka' , value : 'कर्क' },
                     { key :'Sinha' , value : 'सिंह' },
                     { key :'Tul' , value : 'तूळ' },
                     { key :'Wrushik' , value : 'वृश्चिक' },
                     { key :'Dhanu' , value : 'धनु' },
                     { key :'Makar' , value : 'मकर' },
                     { key :'Kumbha' , value : 'कुंभ' },
                     { key :'Min' , value : 'मीन' }
            ]
            var rashiEnglish=[
                     { key :'Mesh' , value : 'Mesh' },
                     { key :'Vrushabha' , value : 'Vrushabha' },
                     { key :'Mithun' , value : 'Mithun' },
                     { key :'Karka' , value : 'Karka' },
                     { key :'Sinha' , value : 'Sinha' },
                     { key :'Tul' , value : 'Tul' },
                     { key :'Wrushik' , value : 'Wrushik' },
                     { key :'Dhanu' , value : 'Dhanu' },
                     { key :'Makar' , value : 'Makar' },
                     { key :'Kumbha' , value : 'Kumbha' },
                     { key :'Min' , value : 'Min' }
                     ]
                     return  $rootScope.languaseUsed == 'English' ? rashiEnglish :rashiMarathi;
        }

        function gan() {
            var ganEnglish= [
            { key :'Dev' , value : 'Dev' },
            { key :'Manushya' , value : 'Manushya' },
            { key :'Rakshas' , value : 'Rakshas' }
            ]
             var ganMarathi= [
            { key :'Dev' , value : 'देव' },
            { key :'Manushya' , value : 'मनुष्य' },
            { key :'Rakshas' , value : 'राक्षस' }
            ]
            return  $rootScope.languaseUsed == 'English' ? ganEnglish :ganMarathi;
        }

        function nadi() {
            var nadiEnglish= [
            { key :'Adhya' , value : 'Adhya' },
            { key :'Madhya' , value : 'Madhya' },
            { key :'Antya' , value : 'Antya' }
            ]
             var nadiMarathi= [
            { key :'Adhya' , value : 'आद्य' },
            { key :'Madhya' , value : 'मद्य' },
            { key :'Antya' , value : 'अंत्य' }
            ]
            return  $rootScope.languaseUsed == 'English' ? nadiEnglish :nadiMarathi;
        }

        function charan() {
            return [
                    "1","2","3","4","5"
            ]
        }

        function nakshatra() {
            var nakshatraEnglish= [
                     { key :'Aswini' , value : 'Aswini' },
                     { key :'Bharani' , value : 'Bharani' },
                     { key :'Rohini' , value : 'Rohini' },
                    { key :'Mrigasira' , value : 'Mrigasira' },
                    { key :'Ardra' , value : 'Ardra' },
                    { key :'Punarvasu' , value : 'Punarvasu' },
                    { key :'Pushya' , value : 'Pushya' },
                    { key :'Aslesha' , value : 'Aslesha' },
                    { key :'Magha' , value : 'Magha' },
                    { key :'Purvaphalguni' , value : 'Purva phalguni' },
                    { key :'Uttaraphalguni' , value : 'Uttar aphalguni' },
                    { key :'Hasta' , value : 'Hasta' },
                    { key :'Chitra' , value : 'Chitra' },
                   { key :'Swati' , value : 'Swati' },
                   { key :'Visakha' , value : 'Visakha' },
                   { key :'Anuradha' , value : 'Anuradha' },
                   { key :'Jeshtha' , value : 'Jeshtha' },
                   { key :'Mula' , value : 'Mula' },
                   { key :'Purvashadha' , value : 'Purva shadha' },
                   { key :'Uttarashadha' , value : 'Uttara shadha' },
                   { key :'Sravana' , value : 'Sravana' },
                   { key :'Dhanshita' , value : 'Dhanshita' },
                   { key :'Shattaraka' , value : 'Shattaraka' },
                   { key :'Purvabhadrapada' , value : 'Purva bhadrapada' },
                   { key :'Uttara Bhadrapada' , value : 'Uttara Bhadrapada' },
                   { key :'Revati' , value : 'Revati' }

            ]
            var nakshatraMarathi= [
                     { key :'Aswini' , value : 'अश्विनी' },
                     { key :'Bharani' , value : 'भरणी' },
                     { key :'Rohini' , value : 'रोहिणी' },
                    { key :'Mrigasira' , value : 'मृग/म्रृगशीर्ष' },
                    { key :'Ardra' , value : 'आर्द्रा' },
                    { key :'Punarvasu' , value : 'पुनर्वसु' },
                    { key :'Pushya' , value : 'पुष्य' },
                    { key :'Aslesha' , value : 'आश्लेषा' },
                    { key :'Magha' , value : 'मघा' },
                    { key :'Purvaphalguni' , value : 'पूर्वा फाल्गुनी' },
                    { key :'Uttaraphalguni' , value : 'उत्तरा फाल्गुनी' },
                    { key :'Hasta' , value : 'हस्त' },
                    { key :'Chitra' , value : 'चित्रा ' },
                   { key :'Swati' , value : 'स्वाती' },
                   { key :'Visakha' , value : 'विशाखा' },
                   { key :'Anuradha' , value : 'अनुराधा' },
                   { key :'Jeshtha' , value : 'ज्येष्ठा' },
                   { key :'Mula' , value : 'मूळ ' },
                   { key :'Purvashadha' , value : 'पूर्वाषाढा' },
                   { key :'Uttarashadha' , value : 'उत्तराषाढा' },
                   { key :'Sravana' , value : 'श्रवण' },
                   { key :'Dhanshita' , value : 'धनिष्ठा/श्रविष्ठा' },
                   { key :'Shattaraka' , value : 'शततारका' },
                   { key :'Purvabhadrapada' , value : 'पूर्वाभाद्रपदा' },
                   { key :'Uttara Bhadrapada' , value : 'उत्तराभाद्रपदा' },
                   { key :'Revati' , value : 'रेवती' }

            ]
         return  $rootScope.languaseUsed == 'English' ? nakshatraEnglish :nakshatraMarathi;
        }



        function hall_capacity() {
            return [
                { key:0, low_limit: 0,upper_limit:500, value: "UpTo 500 Capacity"},
                { key:1, low_limit: 501, upper_limit:1000, value: "500-1000 Capacity"},
                { key:2, low_limit: 1001, upper_limit:2000, value: "1000-2000 Capacity"},
                { key:3, low_limit: 2001, upper_limit:5000, value: "2000 Onwards Capacity "}
                ];
        }

        function Hall_type() {
            return [
                { key: 1, value: "AC Hall"},
                { key: 2, value: "Non-AC Hall"},
                { key: 3, value: "Garden Hall"},
                { key: 4, value: "Non-AC Air-Cool Hall"}
            ];
        }

        function display_server_hall_type(val) {
            var hall_typeArray = {
                1: "AC Hall",
                2: "Non-AC Hall",
                3: "Garden Hall",
                4: "Non-AC Air-Cool Hall"
            };
            for (var Hall_type in hall_typeArray) {
                if (hall_typeArray[Hall_type] == val) {
                    return Hall_type;
                }
            }
        }

        function function_type() {
            return [
                { key: 1, value: "Marriage Hall"},
                { key: 2, value: "Party Hall"}
            ]
        }
        function capacity() {
          var Capacity;
            for(var i = 0; i <= 500; i++)
              {
                Capacity.push(i);
             }
             return Capacity;
       }
    }
}());
