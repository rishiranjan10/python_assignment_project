import React from "react";
import axios from 'axios'

class AdminFunctionClass extends React.Component {

    async getAllTickets() {

        const result = await axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/getAllTickets',
            ContentType: 'application/json',
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

    async getTeam() {

        const result = await axios({
            method: 'get',
            url: 'http://127.0.0.1:5000/getAdminteam',
            ContentType: 'application/json',
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

    async assignTicketTeam(ticketId, teamId) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/assignTicket',
            ContentType: 'application/json',
            data: { ticketNumber: ticketId, adminteamId: teamId },
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

const AdminFunction = new AdminFunctionClass;
export default AdminFunction;