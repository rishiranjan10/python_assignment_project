import React from "react";
import axios from 'axios'

class LoginFunctionClass extends React.Component {

    async login(email1, password1) {

        //const jsonData = JSON.stringify({ "email": "sachine@gmail.com", "password": "sachin@123" });

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/login',
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

    async adminlogin(email1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/adminlogin',
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
        console.log('printing amdin response result', result)
        return result;
    }

    async adminteamlogin(email1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/adminteamlogin',
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

    async register(firstname1, lastname1, email1, phone1, department1, password1) {

        const result = await axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/signup',
            data: { firstname: firstname1, lastname: lastname1, email: email1, phoneNumber: phone1, department: department1, password: password1 },
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

const LoginFunction = new LoginFunctionClass;
export default LoginFunction;