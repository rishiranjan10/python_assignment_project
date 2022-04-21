import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import AdminFunction from '../Functions/AdminOperation'

const AdminHome = () => {

    //const location = useLocation();
    //const userData = location.state
    const history = useHistory()

    const [allTickets, setAllTickets] = useState();
    const [team, setAllTeam] = useState();

    if (!team) {
        AdminFunction.getTeam().then((response) => {
            if (response.status === true && response.data.data.status === true) {
                if (response.data.data.data) {
                    setAllTeam(response.data.data.data)
                }
            }
        })
    }

    if (!allTickets) {
        AdminFunction.getAllTickets().then((response) => {
            if (response.status === true && response.data.data.status === true) {
                if (response.data.data.data) {
                    setAllTickets(response.data.data.data)
                }
            }
        })
    }

    const handleonClick = (ticketId, team1) => {
        history.push({ pathname: "/assignticket", state: { ticketId, team1 } });
    }

    return (
        <div>
            <div className="ticket-main-head">
                Admin Ticket System
            </div>
            {allTickets && <div className="ticket-head">Tickets</div>}
            {allTickets && allTickets.map((eachTicket, index) => {
                return (
                    <div className="ticket-style" key={index}>
                        <div className='ticket-create-style'>
                            <button className="ticket-create-btn"
                                onClick={(e) => {
                                    handleonClick(eachTicket.id, team)
                                }}>Assing ticket</button>
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

export default AdminHome;