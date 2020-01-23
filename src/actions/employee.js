import axios from '../config/axios'
import swal from 'sweetalert'

export const setEmployee = (employees) =>
{
    return({
        type : 'SET_EMPLOYEES',
        payload : employees
    })
}
export const startSetEmployees = () =>
{
    return (dispatch) =>
    {
        axios.get('/employees', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const employees = response.data
            dispatch(setEmployee(employees))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const addEmployee = (employee) =>
{
    return({
        type : 'ADD_EMPLOYEE',
        payload : employee
    })
}
export const startAddEmployee = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/employees', formData, {
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
                const employee = response.data
                dispatch(addEmployee(employee))
                props.history.push(`/employees/${employee._id}`)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const updateEmployee = (employee) =>
{
    return({
        type : 'UPDATE_EMPLOYEE',
        payload : employee
    })
}
export const startUpdateEmployee = (formData, props) =>
{
    return (dispatch) =>
    {
        axios.put(`/employees/${props.match.params.id}`, formData, {
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
                const employee = response.data
                dispatch(updateEmployee(employee))
                props.history.push(`/employees/${employee._id}`)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const removeEmployee = (id) =>
{
    return({
        type : 'REMOVE_EMPLOYEE',
        payload : id
    })
}
export const startRemoveEmployee = (id) =>
{
    return (dispatch) =>
    {
        axios.delete(`/employees/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const employee = response.data
            dispatch(removeEmployee(employee._id))
        })
    }
}