import axios from '../config/axios'
import { startSetCustomers } from '../actions/customer'
import { startSetEmployees } from '../actions/employee'
import { startSetDepartments } from '../actions/department'
import { startSetTickets } from '../actions/ticket'
import swal from 'sweetalert'

export const setUser = ( user = {} ) =>
{
    console.log(user,'me')
    return({
        type : 'SET_USER',
        payload : user
    })
}
export const startRegisterUser = ( formData,props ) =>
{
    return (dispatch) =>
    {
        axios.post('/users/register', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                swal({
                    title: "Successfully Registered!!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                dispatch(setUser())
                props.history.push('/users/login')
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const startLoginUser = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/users/login', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.errors)
            }
            else
            {
                swal({
                    title: "Successfully Logged in!!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                const token = response.data.token
                localStorage.setItem('authToken', token)
                
                Promise.all([axios.get('/users/accounts', {
                    headers : {
                        'x-auth' : token
                    }
                }), axios.get('/customers', {
                    headers : {
                        'x-auth' : token
                    }
                }), axios.get('/employees', {
                    headers : {
                        'x-auth' : token
                    }
                }), axios.get('/departments',{
                    headers : {
                        'x-auth' : token
                    }
                }), axios.get('/tickets', {
                    headers : {
                        'x-auth' : token
                    }
                })])
                .then((values)=>
                {
                    const [usersResponse, customersResponse, employeesResponse, departmentsResponse, ticketsResponse] = values
                    console.log(usersResponse.data,7878787878)
                    dispatch(setUser(usersResponse.data))
                    dispatch(startSetCustomers(customersResponse.data))
                    dispatch(startSetEmployees(employeesResponse.data))
                    dispatch(startSetDepartments(departmentsResponse.data))
                    dispatch(startSetTickets(ticketsResponse.data))
                    props.history.push('/')
                })
                .catch((err)=>
                {
                    console.log(err)
                })
            }
        })
    }
}

export const startGetUser = () =>
{
    return (dispatch) =>
    {
        axios.get('/users/accounts', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const startLogoutUser = () =>
{
    return (dispatch) =>
    {
        axios.delete('/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('notice'))
            {
                swal({
                    title: "Successfully Logged Out!!",
                    text: "Thank You!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href = "/users/login"
            }
            else
            {
                swal(response.data)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}