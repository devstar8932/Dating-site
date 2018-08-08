module.exports = {
    settings: retrieve_notification_settings()
};


function retrieve_notification_settings() {
    return {
        	"data": {
        		"id": 1,
        		"user": 1,
        		"visits": "True",
        		"sms": "True",
        		"email": "True",
        		"connect_requests": "True",
        		"updated_time": "",
        		"created_time": "",
        		"push": "False"

        	},
        	"code": 0,
        	"message": "Here are your notification settings",
        	"status": "okay"
        }
}
