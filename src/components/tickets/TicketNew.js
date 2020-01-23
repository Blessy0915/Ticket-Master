import React from 'react'
import TicketForm from './TicketForm'
import { startAddTicket } from '../../actions/ticket'
import { connect } from 'react-redux'

function TicketNew(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startAddTicket(formData, props))
    }
    return (
            <div>
                <h2>Add Ticket</h2>
                <TicketForm handleSubmit = {handleSubmit}/>
            </div>
        )
}
export default connect()(TicketNew)