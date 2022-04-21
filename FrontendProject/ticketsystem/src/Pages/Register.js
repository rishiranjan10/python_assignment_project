import React, { useState } from 'react'
import LoginFunction from '../Functions/Login'
import { useHistory } from 'react-router-dom'
import '../CSS/Login.css'

const Register = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [department, setDepartment] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const handleChangeFirst = async (e) => {
        setFirstname(e.target.value);
    }

    const handleChangeLast = async (e) => {
        setLastName(e.target.value);
    }

    const handleChangeDept = async (e) => {
        setDepartment(e.target.value);
    }

    const handleChangePhone = async (e) => {
        setPhone(e.target.value);
    }

    const handleChangeEmail = async (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = async (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        LoginFunction.register(firstname, lastname, email, phone, department, password).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                history.push({ pathname: "/login" });
            }
        })
    }

    return (
        <div>
            <div className='login-form'>
                <label>User Registration Form</label>
                <div>
                    <input className='input-style' type="text" value={firstname} placeholder="First Name"
                        name="firstname"
                        required="required"
                        onChange={e => {
                            handleChangeFirst(e)
                        }}
                    />
                </div>
                <div>
                    <input className='input-style' type="text" value={lastname} placeholder="Last Name"
                        name="lastname"
                        required="required"
                        onChange={e => {
                            handleChangeLast(e)
                        }}
                    />
                </div>
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
                    <input className='input-style' type="text" value={phone} placeholder="Phone Number"
                        name="phoneNumber"
                        required="required"
                        onChange={e => {
                            handleChangePhone(e)
                        }}
                    />
                </div>
                <div>
                    <input className='input-style' type="text" value={department} placeholder="Department"
                        name="department"
                        required="required"
                        onChange={e => {
                            handleChangeDept(e)
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
                        }>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register;