import React, { useState } from 'react'
import LoginFunction from '../Functions/Login'
import { useHistory } from 'react-router-dom'
import '../CSS/Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleChangeEmail = async (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = async (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        LoginFunction.login(email, password).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                history.push({ pathname: "/userhome", state: response.data.data });
            }
        })
    }

    const hanldeAdminLogin = () => {
        history.push({ pathname: "/adminlogin" });
    }

    const hanldeAdminTeamLogin = () => {
        history.push({ pathname: "/adminteamlogin" });
    }

    const handleRestisterUser = () => {
        history.push({ pathname: "/register" });
    }

    return (
        <div>
            <div className='admin-admin-team'>
                <div>
                    <button className='admin-property'
                        onClick={() =>
                            handleRestisterUser()
                        }>Register New User</button>
                </div>
                <div>
                    <button className='admin-property'
                        onClick={() =>
                            hanldeAdminLogin()
                        }>Admin Login</button>
                </div>
                <div>
                    <button className='admin-property'
                        onClick={() =>
                            hanldeAdminTeamLogin()
                        }>Admin team Login</button>
                </div>
            </div>
            <div className='login-form'>
                <label>User Login Page</label>
                <div>
                    <input className='input-style' type="email" value={email} placeholder="Email"
                        name="email"
                        required="required"
                        onChange={e => {
                            handleChangeEmail(e)
                        }}
                    />
                </div>
                <div>
                    <input className='input-style' type="password" value={password} placeholder="password"
                        name="password"
                        required="required"
                        onChange={e => {
                            handleChangePassword(e)
                        }}
                    />
                </div>
                <div>
                    <button
                        className='button-style'
                        onClick={() =>
                            handleSubmit()
                        }>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;