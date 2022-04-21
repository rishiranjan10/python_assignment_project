import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AdminTeamFunction from '../Functions/AdminTeamOperation'

const AdminTeamHome = () => {

    const location = useLocation()
    const userData = location.state
    const history = useHistory()

    const [tickets, setTickets] = useState()

    if (!tickets) {
        AdminTeamFunction.getAdminTeamTicket(userData.email, userData.password).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                setTickets(response.data.data.data)
            }
        })
    }

    const handleResolve = (ticketID, userData) => {
        AdminTeamFunction.setStatus(ticketID, userData.email, userData.password).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                history.push({ pathname: "/adminteamhome", state: userData });
            }
        })
    }

    return (
        <div>
            <div className="ticket-main-head">
                Admin Team Ticket System
            </div>
            {tickets && <div className="ticket-head">Tickets</div>}
            {tickets && tickets.map((eachTicket, index) => {
                return (
                    <div className="ticket-style" key={index}>
                        <div className='ticket-create-style'>
                            <button className="ticket-create-btn"
                                onClick={(e) => {
                                    handleResolve(eachTicket.id, userData)
                                }}>Resolve ticket</button>
                        </div>
                        <div>Ticket Name : {eachTicket.name}</div>
                        <div>Ticket Status : {eachTicket.ticketstatus}</div>
                        <div>Level : {eachTicket.level}</div>
                        <div>Description : {eachTicket.description}</div>
                        <div>Employee Name : {eachTicket.firstname} {eachTicket.lastname}</div>
                        <div>Employee Email : {eachTicket.email}</div>
                        <div>Employee Contact : {eachTicket.phone}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default AdminTeamHome;