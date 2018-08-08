var router = require('express').Router();
var four0four = require('./utils/404')();
var dashboard_data = require('./dashboard_data');
var Search_list_data = require('./Search_list_data');
var view_profile_data = require('./view_profile_data');
var connection_data = require('./connection_data');
var my_profile_data = require('./my_profile_data');
var Search_result_data = require('./Search_result_data');
var halls_data = require('./halls_data');
var change_mobile_data = require('./change_mobile_data');
var hall_details_data = require('./hall_details_data');
var recent_joinees_data = require('./recent_joinees_data');
var perfect_match_data = require('./perfect_match_data');
var profile_visits_data = require('./profile_visits_data');
var transaction_list_data = require('./transaction_list_data');
var delete_account_data = require('./delete_account_data');
var change_password_data = require('./change_password_data');
var sibling_list_data = require('./sibling_list_data');
var notification_setting_data = require('./notification_setting_data');
var profile_flag_data = require('./profile_flag_data');
var user_data = require('./user_data');
//var loginResponse = require('./loginResponse');

router.get('/dashboard', getDashboard);
router.get('/profiles/recent_joinees', recent_joinees);
router.get('/profiles/perfect_matches', perfect_matches);
router.get('/profiles/profile_visits', profile_visits);
router.get('/connections/inbox/connect_requests', show);
router.get('/connections/inbox/accepted_requests', show);
router.get('/connections/inbox/rejected_requests', show);
router.get('/connections/inbox/photo_upload_requests', show);
router.get('/connections/outbox/connect_requests', show);
router.get('/connections/outbox/accepted_requests', show);
router.get('/connections/outbox/rejected_requests', show);
router.get('/saved_searches/', getSearch);
router.get('/search', searches);
router.get('/my_profile', getMyprofile);
router.get('/accounts/check_username', check_username);
router.get('/wedding_planner/halls/', getHalls);
router.get('/wedding_planner/halls/hall_id', hall_detail);
router.get('/payment/transactions', transaction_list);
router.get('/profile_id/siblings', sibling_list);
router.get('/profiles/profile_id', view_profile);
router.get('/dashboard/profile_state', profile_state);
router.get('/notification_setting/id', retrieve_notification_settings);
router.get('/profile_id/flag', retrieve_notification_settings);
router.get('/payment/plans',plans);
router.get('/profiles/profile_id/flag',get_profile_flag);
router.post('/partnerLogin/login',getLoginStatus);
// LB modules

router.post('/customer_connect/contact_us', sendFeedback);
router.post('/accounts/change_mobile', change_mobile);
router.post('/accounts/update_mobile', change_mobile);
router.post('/accounts/confirm_mobile_update', confirm_mobile_update);
router.post('/accounts/password_not_received', confirm_mobile);
router.post('/accounts/resend_password', resend_password);
router.post('/accounts/forgot_password', forgotPassword);
router.post('/accounts/forgot_username', forgotUsername);
router.post('/accounts/register', register);
router.post('/my_profile', update_profile);
/*router.post('/accounts/login', login);*/
router.post('/accounts/login/email', login);
router.post('/accounts/logout', logout);
router.post('/search', Search_result);
router.post('/saved_searches/', createsearch);
router.delete('/saved_searches/id', deleteSearch);
router.delete('/profile_id/siblings/id', deleteSibling);
router.delete('/profile_id/flag', delete_profile_flag);
router.post('/profile_id/flag', update_profile_flag);
router.post('/profile_id/flag', flag_profile);
router.post('/profile_id/siblings', createSibling);
router.post('/accounts/change_password', getaccountsetting);
router.post('/accounts/delete_account', deleteAccount);
router.post('/payment/transactions/', contactCredits);
router.post('/photos', uploadFile);
router.post('/connections/connect', show_interest);
router.post('/connections/connect_using_credits', contact_credits);
router.post('/connections/accept', accept_request);
router.post('/connections/reject', reject_request);
router.post('/connections/connect', contact_credits);
router.post('/references', refer_friend);
router.post('/notification_setting/id', update_notification_settings);
router.post('/connections/request_photo', request_photo);
router.post('/accounts/resend_confirmation_email', resendConfirmationEmail);
router.post('/profile_id/siblings/id', Update_Sibling);
router.post('/partnerchangepassword/changePassword', getaccountsetting);
router.post('/partnerdetails/partner_profile', getProfile);
router.post('/partnerdetails/update', updateProfile);
router.post('/partnerlogout/logout', partnerLogout);
router.post('/partner_home/request', friendRequest);



// 404 Handler
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function friendRequest(req,res,next){
     var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Regestered Successfully!'
    };
    res.status(200).send(result);
    }


function partnerLogout(req,res,next){
     var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Logout Successfully!'
    };
    res.status(200).send(result);
    }



function updateProfile(req,res,next){
     var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Data changed successfully!'
    };
    res.status(200).send(result);
    }


function getProfile(req,res,next){
   var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Data changed successfully!'
    };
    res.status(200).send(result);
    }


function getaccountsetting(req,res,next){
      var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Password changed successfully!'
    };
    res.status(200).send(result);
    }


function getLoginStatus(req, res, next){
    var result = {
        status: 'okay',
        code: 0,
        message: 'Success! Hooray!',
        user: {
            firstName: 'nitin',
            lastName: 'bodke'
        }
    };

//    req.session.key = '123456';
//    res.cookie('csrftoken', 'cutter', { maxAge: 900000, httpOnly: true });
    res.status(200).send(result);
  }



function getDashboard(req, res, next) {
    res.status(200).send(dashboard_data.dashboard);
}

function retrieve_notification_settings(req, res, next) {
    res.status(200).send(notification_settings_data.settings);
}

function get_profile_flag(req, res, next) {
    res.status(200).send(profile_flag_data.flag);
}

function recent_joinees(req, res, next) {
    res.status(200).send(recent_joinees_data.recent_joinees);
}

function perfect_matches(req, res, next) {
    res.status(200).send(perfect_match_data.perfect_matches);
}

function profile_visits(req, res, next) {
    res.status(200).send(profile_visits_data.profile_visits);
}

function show(req, res, next) {
    res.status(200).send(connection_data.connection);
}

function searches(req, res, next) {
    res.status(200).send(Search_result_data.Result);
}

function getSearch(req, res, next) {
    res.status(200).send(Search_list_data.search);
}

function view_profile(req, res, next) {
    res.status(200).send(view_profile_data.profile);
}

function getMyprofile(req, res, next) {
    res.status(200).send(my_profile_data.myprofile);
}

function check_username(req, res, next) {
    res.status(200).send(user_data.check);
}

function getHalls(req, res, next) {
    res.status(200).send(halls_data.hall);
}

function hall_detail(req, res, next) {
    res.status(200).send(hall_details_data.hall_Detail);
}

function transaction_list(req, res, next) {
    res.status(200).send(transaction_list_data.transaction);
}

function sibling_list(req, res, next) {
    res.status(200).send(sibling_list_data.sibling);
}

function refer_friend(req, res, next) {
    var result = {
            'status': 'okay',
            'code': 0,
            'message': 'Thanks for referring, your friends have been notified!',
            'notified' : [
                {
                    'reference_name': 'Rupali',
                    'reference_mobile': 9999999992,
                }
            ],
            'failed_to_notify': [],
            'already_referred': [],
            'already_registered': []
    };
    res.status(200).send(result);
}

function update_notification_settings(req, res, next) {
    var result = {
            'status': 'okay',
            'code': 0,
            'message': 'Updated'
    };
    res.status(200).send(result);
}

function show_interest(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Requested'
    };
    res.status(200).send(result);
}

function accept_request(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Connected'
    };
    res.status(200).send(result);
}

function reject_request(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Rejected'
    };
    res.status(200).send(result);
}

function contact_credits(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Requested'
    };
    res.status(200).send(result);
}

function request_photo(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Requested'
    };
    res.status(200).send(result);
}


function change_mobile(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Password has been sent to your registered mobile number!',
        'profile_id': 'LB1234'
    };
    res.status(200).send(result);
}

function confirm_mobile(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Admin has been informed '
    };
    res.status(200).send(result);
}

function confirm_mobile_update(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Your mobile number has been updated.'
    };
    res.status(200).send(result);
}

function resend_password(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Password has been sent to your registered mobile number'
    };
    res.status(200).send(result);
    //four0four.send404(req, res, 'ERROR :(');
}

function Search_result(req, res, next) {
    var result = {
    'status': 'okay',
    'code': 0,
    'message': 'Search successful!',
    'search_result': [
        {
            'profile_id': 'LB1493',
            'firstname': 'asdqwe',
            'age': 9,
            'height': '',
            'caste': '',
            'occupation_info': '',
            'current_place_residence': '',
            'imagename': '',
            'extention': '',
            'marital_status': '',
            'income': '',
            'edu_level': '',
            'edu_field': '',
            'update_date': '2014-07-25T02:02:30Z',
            'last_loggedin': '2014-07-25T02:02:30Z',
         'visited': 'not-visited',
        'src': 'images/img15.jpg'
        }
    ]
};
    res.status(200).send(result);
}

function deleteAccount(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Account deleted!'
    };
    res.status(200).send(result);
}

function sendFeedback(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Message has been successfully send to Admin'
    };
    res.status(200).send(result);
}

function getaccountsetting(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Password changed successfully!'
    };
    res.status(200).send(result);
}

function register(req, res, next) {
    var result = {
        status: 'okay',
        code: 0,
        message: 'Congratulations! Your Account has been created!'
    };
    res.status(200).send(result);
    //four0four.send404(req, res, 'ERROR :(');
}

function update_profile(req, res, next) {
    var result = {
        status: 'okay',
        code: 0,
        message: 'Updated'
    };
    res.status(200).send(result);
    //four0four.send404(req, res, 'ERROR :(');
}

function resendConfirmationEmail(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Confirmation mail has been sent!'
    };
    res.status(200).send(result);
    //four0four.send404(req, res, 'ERROR :(');
}

function profile_state(req, res, next){
    var result ={
    'profile_id': 'LB1027',
    'complete_percentage': 90,
        'incomplete_sections': [{
                'section': 'email',
                'weightage': 5
        }, {
                'section': 'photo',
                'weightage': 10
        },{
                'section': 'basic',
                'weightage': 25
        },{
                'section': 'astro',
                'weightage': 10
        },{
                'section': 'family',
                'weightage': 15
        },{
                'section': 'photo',
                'weightage': 10
        }]
}

 res.status(200).send(result);
 }

function login(req, res, next) {
    var result = {
        status: 'okay',
        code: 0,
        message: 'Success! Hooray!',
        user: {
           'id': 1487,
            'emailid': 'qwesujit.dumbfe@gmail.com',
            'profile_complete': 1,
            'profile_id': 'LB1487',
            'firstname': 'aradhya',
            'middlename': ' fyuyg',
            'lastname': 'Sfg',
            'gender': 'Male',
            'marital_status': 'Unmarried',
            'birth_date': '1982-05-20',
            'degree': 'B>E',
            'show_details': 'No',
            'age': 32,
            'birth_time': '12:34 AM',
            'birth_place': 'asfasdf',
            'caste': 'Brahmin- Saraswat',
            'current_place_residence': 'Latur',
            'height': '27',
            'weight': 0,
            'mobile': 3243789870,
            'physic': '',
            'complexion': 'Fair',
            'physical_disablity':'No',
            'physical_disablity_specify': '',
            'spects': '',
            'blood_group': 'O +ve',
            'diet': 'Veg',
            'fathername': 'nmhah',
            'mothername': 'gygty',
            'father_occupation': 'hhjhbj',
            'mother_occupation': 'ghg',
            'brothers': 'ghg',
            'sisters': 'bvhjg',
            'family_wealth': '',
            'native_atpost': '',
            'native_taluka': '',
            'native_dist': '',
            'mamaname': 'gikhgol',
            'relatives': 'Patil,Rahene,Mane',
            'education': 'M.Arch',
            'experience': '',
            'more_edu_info': 'afdsfd',
            'occupation': 'Service',
            'occupation_details': 'Commercial Pilot',
            'occupation_info': 'asdfasdf',
            'income': '',
            'gotra': 'fgyutg',
            'devak': 'tgiy',
            'rashi': 'tgiyi',
            'nakshatra': 'tyti',
            'gan': 'ABC',
            'nadi': 'M',
            'charan': '3',
            'mangal': 'No',
            'exp_education': '',
            'exp_height_maxi': '',
            'exp_height_mini': '',
            'age_diff_maxi': 0,
            'age_diff_mini': 0,
            'exp_complexion': '',
            'exp_spects': '',
            'exp_personality': '',
            'exp_location': '',
            'exp_occupation': '',
            'exp_income': '',
            'exp_mangal': '',
            'imagename': '',
            'extention': '',
            'delete_account': '',
            'delete_reason': '',
            'delete_comment': '',
            'email_unsubscribe': 0,
            'credits_remaining': 0,
            'credits_used': 0,
            'edu_level': '',
            'edu_field': '',
            'working_with': '',
            'created_date': '2014-06-09T18:00:52Z',
            'update_date': '2014-06-09T18:00:52Z',
            'last_loggedin': '2014-06-09T18:00:52Z',
            incomplete_sections: ['photo']
        }
    };

    req.session.key = '123456';
    res.cookie('csrftoken', 'cutter', { maxAge: 900000, httpOnly: true });
    res.status(200).send(result);
    //four0four.send404(req, res, 'ERROR :(');
}

function logout(req, res, next) {
    var result = {
        status: 'okay',
        code: 0,
        message: 'Success! Hooray!'
    };
    res.status(200).send(result);
}

function forgotPassword(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Password has been sent to your registered email/mobile'
    };
    res.status(200).send(result);
}

function forgotUsername(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Username has been sent'
    };
    res.status(200).send(result);
}

function contactCredits(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Transaction detailsed saved',
        'id': 1
    };
    res.status(200).send(result);
}

function createsearch(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Saved!',
        'id': 23
    };
    res.status(200).send(result);
}

function deleteSearch(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Deleted!'
    };
    res.status(200).send(result);
}

function update_profile_flag(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Updated!',
        'id': 23
       };
    res.status(200).send(result);
}

function flag_profile(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'User flagged',
        'id': 23
       };
    res.status(200).send(result);
}

function delete_profile_flag(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Deleted successfully.'
    };
    res.status(200).send(result);
}

function uploadFile(req, res, next) {
    var result = {
        'code': 0,
        'status': 'okay',
        'message': 'Your photo has been uploaded.'
    };
    res.status(200).send(result);
}

function deleteSibling(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Deleted!'
    };
    res.status(200).send(result);
}

function createSibling(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Saved!',
        'id': 23
    };
    res.status(200).send(result);
}

function Update_Sibling(req, res, next) {
    var result = {
        'status': 'okay',
        'code': 0,
        'message': 'Updated!',
        'id': 23
       };
    res.status(200).send(result);
}

function plans(req, res, next) {
    var result = {
        "status": "okay",
        "code": 0,
        "plan_details": [
            {
                "id": "1",
                "name": "BRONZE PLAN",
                "price": 100,
                "credits": 0,
                "interests": 15,
                "discount": 0,
                "actual_price": 100,
                "is_active": true
            },{
                "id": "2",
                "name": "GOLD PLAN",
                "price": 200,
                "credits": 0,
                "interests": 40,
                "discount": 0,
                "actual_price": 200,
                "is_active": true
            },{
                "id": "3",
                "name": "GOLD PLAN",
                "price": 500,
                "credits": 40,
                "interests": 40,
                "discount": 0,
                "actual_price": 500,
                "is_active": true
            },{
                "id": "4",
                "name": "PLATINUM PLAN",
                "price": 1000,
                "credits": 100,
                "interests": 100,
                "discount": 0,
                "actual_price": 1000,
                "is_active": true
            }
        ]
        };
    res.status(200).send(result);
}
