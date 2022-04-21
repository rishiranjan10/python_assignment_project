import React from "react";
import axios from 'axios'

class AdminTeamFunctionClass extends React.Component {

    async getAdminTeamTicket(email1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/adminteamticket',
            ContentType: 'application/json',
            data: { email: email1, password: password1 },
            dataType: 'json',
        }).then(response => {
            if (response.status === 200) {
                return { status: true, data: response, statusCode: response.status }
            } else {
                return { status: false, data: response, statusCode: response.status }
            }
        }).catch(err => {
            let statusCode = 500;
            let statusMsg = 'CONNECTION REFUSED';
            if (err.response) {
                statusMsg = err.response.data.error;
                statusCode = err.response.status;
            }
            return { status: false, message: statusMsg, statusCode: statusCode };
        });
        return result;
    }

    async setStatus(ticketId, email1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/changestatus',
            ContentType: 'application/json',
            data: { id: ticketId, email: email1, password: password1, ticketstatus: 'RESOLVED' },
            dataType: 'json',
        }).then(response => {
            if (response.status === 200) {
                return { status: true, data: response, statusCode: response.status }
            } else {
                return { status: false, data: response, statusCode: response.status }
            }
        }).catch(err => {
            let statusCode = 500;
            let statusMsg = 'CONNECTION REFUSED';
            if (err.response) {
                statusMsg = err.response.data.error;
                statusCode = err.response.status;
            }
            return { status: false, message: statusMsg, statusCode: statusCode };
        });
        return result;
    }
}


const AdminTeamFunction = new AdminTeamFunctionClass;
export default AdminTeamFunction;