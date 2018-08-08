module.exports = {
    transaction: transaction_list()
};


function transaction_list() {
    return {
    'list': [
       {
            "id": 2,
            "profile_id": "LB123",
            "payment_made": 200,
            "trans_status": "Aborted",
            "credits_granted": 0,
            "interests_granted": 25,
            "transaction_number": 65557889990,
            "bank_name": "IDBI Bank",
            "call_status": "",
            "transaction_date": "2014-09-15",
            "date_submitted":""
        },
        {
            "id": 4,
            "profile_id": "LB123",
            "payment_made": 100,
            "trans_status": "Aborted",
            "credits_granted": 0,
            "interests_granted": 25,
            "transaction_number": 65557889990,
            "bank_name": "IDBI Bank",
            "call_status": "",
            "transaction_date": "2014-09-15",
            "date_submitted":""
        }
    ]
}
}
