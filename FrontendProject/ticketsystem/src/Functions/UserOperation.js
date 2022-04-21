import React from "react";
import axios from 'axios'

class UserFunctionClass extends React.Component {

    async getTicket(email1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/employeeticket',
            data: { email: email1, password: password1 },
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

    async createTicket(ticketname1, description1, level1, email1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/create',
            data: { ticketname: ticketname1, description: description1, level: level1, email: email1, password: password1 },
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
}

const UserFunction = new UserFunctionClass;
export default UserFunction;