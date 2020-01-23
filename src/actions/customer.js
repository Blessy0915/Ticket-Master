import axios from '../config/axios'
import swal from 'sweetalert'

export const setCustomers = (customers) =>
{
    return({
        type : 'SET_CUSTOMERS',
        payload : customers
    })
}
export const startSetCustomers = () =>
{
    return (dispatch) =>
    {
        axios.get('/customers', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const customers = response.data
            dispatch(setCustomers(customers))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const addCustomer = (customer) =>
{
    return({
        type : 'ADD_CUSTOMER',
        payload : customer
    })
}
export const startAddCustomer = (formData, props) =>
{
    return (dispatch) =>
    {
        axios.post('/customers', formData, {
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
                const customer = response.data
                dispatch(addCustomer(customer))
                props.history.push(`/customers/${customer._id}`)
            }
           
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const updateCustomer = (customer) =>
{
    return({
        type : 'UPDATE_CUSTOMER',
        payload : customer
    })

}
export const startUpdateCustomer = (formData, id, props) =>
{
    return (dispatch) =>
    {
        axios.put(`/customers/${id}`, formData, {
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
                const customer = response.data
                dispatch(updateCustomer(customer))
                props.history.push(`/customers/${customer._id}`)
            }
        })
    }
}

export const removeCustomer = (id) =>
{
    return({
        type : 'REMOVE_CUSTOMER',
        payload : id
    })
}

export const startRemoveCustomer = (id) =>
{
    return (dispatch) =>
    {
        axios.delete(`/customers/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const customer = response.data
            dispatch(removeCustomer(customer._id))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}