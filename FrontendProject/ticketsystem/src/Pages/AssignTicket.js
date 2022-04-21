import React from 'react'
import { useLocation } from 'react-router-dom'
import AdminFunction from '../Functions/AdminOperation'
import { useHistory } from 'react-router-dom'
import '../CSS/Login.css'

const Assignticket = () => {

    const history = useHistory()
    const location = useLocation()
    const ticketId = location.state.ticketId
    const teamData = location.state.team1

    const handleAssign = (eachTeam) => {
        AdminFunction.assignTicketTeam(ticketId, eachTeam.id).then((response) => {
            if (response.status === true && response.data.data.status === true) {
                history.push({ pathname: '/adminhome' })
            }
        })
    }

    return (
        <div>
            <div className='login-form'>
                <label>Assign Ticket to Team</label>
                {teamData && teamData.map((eachTeam, index) => {
                    return (
                        <div key={index}>
                            <button
                                className='button-style'
                                onClick={(e) => {
                                    handleAssign(eachTeam)
                                }}>Assign to {eachTeam.first_name} {eachTeam.last_name}</button>
                        </div>

                    )
                })}
            </div>
        </div >
    )
}

export default Assignticket;