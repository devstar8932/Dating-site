module.exports = {
    check: check_username()
};


function check_username() {
    return {
        'status': 'okay',
        'code': 0,
        'message': 'User name is available!',
    }
}