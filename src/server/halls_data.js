module.exports = {
    hall: getHalls()
};


function getHalls() {
    return{
    'status': 'okay',
    'code': 0,
    'message': 'Here is the list!',
     'halls': [
        {
            "name": "Raskar Palace",
            "address": "645, Raskar Campus, Bibwewadi Main Road, Bibvewadi, Pune - 411037",
            "phone": 66820074,
            "area_in_pune": "Bibvewadi",
            "hall_size": 100,
            "hall_type": 1,
            "function_type": 1
        },
        {
            "name": "Indraprastha Multipurpose Hall",
            "address": "106 A/2 A/12, Opp Chattushringi Temple, Senapati Bapat RD, Chaturshringi, Pune - 411016",
            "phone": 25652727,
            "area_in_pune": "Chaturshringi",
            "hall_size": 1000,
            "hall_type": 1,
            "function_type": 1
        },
        {
            "name": "Aher Garden Mangal Karyalay & Shri Mauli Hall Ac",
            "address": "Near Aher Garden Hall, Walhekarwadi RD, Chinchwad, Pune - 411033",
            "phone": 66239362,
            "area_in_pune": "Chinchwad",
            "hall_size": 5000,
            "hall_type": 2,
            "function_type": 1
        },
        {
            "name": "Moreshwar Catering Services",
            "address": "17/B/3, NR Joshi Railway Museum, Moreshwar Mangal Kendra, Kothrud, Pune - 411029",
            "phone": 66820479,
            "area_in_pune": "Kothrud",
            "hall_size": 7000,
            "hall_type": 2,
            "function_type": 1
        }
    ]
}
}
