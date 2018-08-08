module.exports = {
    hall_Detail: hall_detail()
};


function hall_detail() {
    return{
    'status': 'okay',
    'code': 0,
    'message': 'Here is the details!',
    'details': [
        {
            'name': 'Raskar Palace',
            'address': '645, Raskar Campus, Bibwewadi Main Road, Bibvewadi,Pune - 411037',
            'phone': 66820074,
            'phone1': 0,
            'phone1': 0,
            'mobile': 09822022112,
            'mobile1': 9637294832,
            'mobile2': 0,
            'website': 'indraprasthahalls.com',
            'area_in_pune': 'Bibvewadi',
            'hall_details': [
                {
                    'id':1,
                    'hall_id':2,
                    'hall_type': 1,
                    'hall_size': 100,
                    'dining_size': 100,
                    'price': 30000,
                    'chair_size': 100,
                    'ac_rooms': 2,
                    'non_ac_rooms': 4,
                    'function_type': 1
                }
            ]
        },
        {
            'name': 'Indraprastha Multipurpose Hall',
            'address': '106 A/2 A/12, Opp Chattushringi Temple, Senapati Bapat RD, Chaturshringi, Pune - 411016',
            'phone': 668200799,
            'phone1': 0,
            'phone1': 0,
            'mobile': 09822022112,
            'mobile1': 9637294832,
            'mobile2': 0,
            'website': 'indraprasthahalls.com',
            'area_in_pune': 'Chinchwad',
            'hall_details': [
                {
                    'id':2,
                    'hall_id':3,
                    'hall_type': 1,
                    'hall_size': 700,
                    'dining_size': 200,
                    'price': 30000,
                    'chair_size': 100,
                    'ac_rooms': 2,
                    'non_ac_rooms': 4,
                    'function_type': 1                }
            ]
        }
    ]
}
}
