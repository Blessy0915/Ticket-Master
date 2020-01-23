import axios from '../config/axios'
import swal from 'sweetalert'

export const setTickets =( tickets ) =>
{
    return({
        type : 'SET_TICKETS',
        payload : tickets
    })
}
export const startSetTickets = () =>
{
    return (dispatch) =>
    {
        axios.get('/tickets',{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const tickets = response.data
            dispatch(setTickets(tickets))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const addTicket = (ticket) =>
{
    return({
        type : 'ADD_TICKET',
        payload : ticket
    })
}
export const startAddTicket = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/tickets', formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                const ticket = response.data
                dispatch(addTicket(ticket))
                props.history.push('/tickets')
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const updateTicket = (ticket) =>
{
    return({
        type : 'UPDATE_TICKET',
        payload : ticket
    })
}
export const startUpdateTicket = (formData, id) =>
{
    return (dispatch) =>
    {
        axios.put(`/tickets/${id}`, formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                const ticket = response.data
                dispatch(updateTicket(ticket))
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const removeTicket = (id) =>
{
    return({
        type : 'REMOVE_TICKET',
        payload : id
    })
}
export const startRemoveTicket = ( id ) =>
{
    return (dispatch) =>
    {
        axios.delete(`/tickets/${id}`, {
            headers : {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const ticket = response.data
            dispatch(removeTicket(ticket))
            
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}