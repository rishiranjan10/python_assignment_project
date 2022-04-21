import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserOperation from '../Functions/UserOperation'
import '../CSS/UserHome.css'

const CreateTicket = () => {

    const location = useLocation()
    const userData = location.state
    const history = useHistory()

    const [ticketname, setTicketName] = useState()
    const [description, setDescription] = useState()
    const [level, setLevel] = useState()

    const handleChangeName = async (e) => {
        setTicketName(e.target.value);
    }

    const handleChangeDesc = async (e) => {
        setDescription(e.target.value);
    }

    const handleChangeLevel = async (e) => {
        setLevel(e.target.value);
    }

    const handleCreateTicket = () => {
        UserOperation.createTicket(ticketname, description, level, userData.email, userData.password).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                history.push({ pathname: "/userhome", state: userData });
            }
        })
    }

    return (
        <div className="create-ticket-style">
            <div>
                <input className='input-style' type="text" value={ticketname} placeholder="Enter ticket name"
                    name="ticketname"
                    required="required"
                    onChange={e => {
                        handleChangeName(e)
                    }}
                />
            </div>
            <div>
                <input className='input-style' type="text" value={description} placeholder="Enter description"
                    name="description"
                    required="required"
                    onChange={e => {
                        handleChangeDesc(e)
                    }}
                />
            </div>
            <div>
                <input className='input-style' type="text" value={level} placeholder="level"
                    name="level"
                    required="required"
                    onChange={e => {
                        handleChangeLevel(e)
                    }}
                />
            </div>
            <div>
                <button className='admin-property'
                    onClick={() =>
                        handleCreateTicket()
                    }>Create Ticket</button>
            </div>
        </div>
    )
}

export default CreateTicket;