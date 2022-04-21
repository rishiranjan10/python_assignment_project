import React, { useState } from 'react'
import LoginFunction from '../Functions/Login'
import { useHistory } from 'react-router-dom'
import '../CSS/Login.css'

const AdminteamLoginPage = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = async (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = async (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        LoginFunction.adminteamlogin(email, password).then((response) => {
            console.log(response)
            if (response.status === true && response.data.data.status === true) {
                history.push({ pathname: "/adminteamhome", state: response.data.data });
            }
        })
    }

    return (
        <div>
            <div className='login-form'>
                <label>Admin team Login Page</label>
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

export default AdminteamLoginPage;