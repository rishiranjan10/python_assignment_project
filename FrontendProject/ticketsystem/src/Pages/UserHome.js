import React, { useState } from "react";
import UserFunction from '../Functions/UserOperation'
import { useLocation } from "react-router-dom";
import '../CSS/UserHome.css'
import { useHistory } from "react-router-dom";

const UserHome = () => {

    const location = useLocation();
    const userData = location.state
    const history = useHistory()

    const [userTickets, setuserTickets] = useState();

    if (!userTickets) {
        UserFunction.getTicket(userData.email, userData.password).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                if (response.data.data.data) {
                    setuserTickets(response.data.data.data)
                }
            }
        })
    }

    const handleCreate = () => {
        history.push({ pathname: "/createticket", state: userData });
    }

    console.log(userTickets)


    return (
        <div>
            <div className="ticket-main-head">
                Ticket System
            </div>
            <div className='ticket-create-style'>
                <button className="ticket-create-btn"
                    onClick={() =>
                        handleCreate()
                    }>Create New ticket</button>
            </div>
            {userTickets && <div className="ticket-head">Tickets</div>}
            {userTickets && userTickets.map((eachTicket, index) => {
                console.log(userTickets[index].ticketname)
                return (
                    <div className="ticket-style" key={index}>
                        <div>Ticket Name : {userTickets[index].ticketname}</div>
                        <div>Ticket Status : {eachTicket.ticketstatus}</div>
                        <div>Level : {eachTicket.level}</div>
                        <div>Description : {eachTicket.description}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserHome;