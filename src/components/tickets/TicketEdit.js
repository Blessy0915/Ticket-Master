import React from 'react'
import TicketForm from './TicketForm'
import { startUpdateTicket } from '../../actions/ticket'
import _ from 'lodash'
import { connect } from 'react-redux'

function TicketEdit(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startUpdateTicket(formData, props.ticket._id))
        props.history.push('/tickets')
    }
    return(
            <div>
                <h2>Edit Ticket</h2>
                {
                        !_.isEmpty(props.ticket) && 
                        <TicketForm {...props.ticket} handleSubmit = {handleSubmit}/>
                }
                
            </div>
        )
}
const mapStateToProps = ( state, props ) =>
{
    return({
        ticket : state.tickets.find(ticket => ticket._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(TicketEdit)