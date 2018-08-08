module.exports = {
    change_password: getaccountsetting()
};


function getaccountsetting() {
    return{
        "current_password": "12345",
        "new_password": "123456",
        "confirm_new_password": "123456"
    }
    }