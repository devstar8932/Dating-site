module.exports = {
    dashboard: getDashboard()
};


function getDashboard() {
    return{
        'code': 0,

        'status':'okay',
        'message':'Welcome Back!',
        "dashboard": {
                "received_requests": 2,
                "received_requests_new": 0,
                "photo_requests": 1,
                "photo_requests_new": 0,
                "connected_profiles": 4,
                "connected_profiles_new": 2
        },

          'inbox': {
                'connect_requests': 0,
                'accepted_requests': 1,
                'rejected_requests': 0
            },
            'outbox': {
                'connect_requests': 0,
                'accepted_requests': 1,
                'rejected_requests': 0
            },
            'profile_performance': {
                      'profile_visits': 5,
                      'profile_visits_new': 2
            },
            'profile_state': {
                'complete_percentage': 90,
                'incomplete_sections': ['add astro details', 'add family details', 'add photo','Confirm Your Mobile']
           },
'contact_credits_remaining': 0,
    'recently_joined': [
    {
        'firstname': 'Sadhana',
        'age': 25,
        'height': 164,
        'caste': 'Maratha',
        'current_place_residence': 'Kolhapur',
        'photo': 'gulp-tiny.png'
    },
        {
            'firstname': 'Radhika',
            'age': 25,
            'height': 164,
            'caste': 'Maratha',
            'current_place_residence': 'Ahemadnagar',
            'photo': 'gulp-tiny.png'
        }

],
'perfect_match': [
      {
        "profile_id": "LB1350",
        "firstname": "ASHWINI",
        "profile_image_url": "http://localhost:8000/static/images/placeholder_100.jpg",
        "age": 28,
        "height": "27",
        "caste": "96k Maratha",
        "occupation_info": "Top ranked high school in Pune",
        "current_place_residence": "Pune",
        "imagename": "LB1350_1376712123",
        "extention": "jpg",
        "marital_status": "Unmarried",
        "income": 1,
        "edu_level": "AAAA",
        "edu_field": "aAAAA",
        "completed_percentage": "40%",
        "last_loggedin": "2013-08-17T09:30:24Z",
	     "visited": 'not-visited',
        "src": "images/img15.jpg"
    },
    {
        "profile_id": "LB1567",
        "firstname": "abc",
        "profile_image_url": "http://localhost:8000/static/images/placeholder_100.jpg",
        "age": 26,
        "height": "20",
        "caste": "maratha",
        "occupation_info": "hhh",
        "current_place_residence": "satara",
        "imagename": "",
        "extention": "jpg",
        "marital_status": "unmarried",
        "income": "",
        "edu_level": "",
        "edu_field": "",
        "completed_percentage": "80%",
        "update_date": "2015-05-22T07:34:17Z",
        "last_loggedin": "2015-05-22T07:34:17Z",
	     "visited": 'visited',
         "src": "images/img16.png"
    }

]
    }
}


