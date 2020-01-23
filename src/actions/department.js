import axios from '../config/axios'
import swal from 'sweetalert'

export const setDepartments = (departments) =>
{
    return({
        type : 'SET_DEPARTMENTS',
        payload : departments
    })
}

export const startSetDepartments = () =>
{
    return (dispatch) =>
    {
        axios.get('/departments', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const departments = response.data
            dispatch(setDepartments(departments))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const addDepartment = (department) =>
{
    return({
        type : 'ADD_DEPARTMENT',
        payload : department
    })
}
export const startAddDepartment = (formData, props) =>
{
    return (dispatch) =>
    {
        axios.post('/departments', formData, {
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
                const department = response.data
                dispatch(addDepartment(department))
                props.history.push(`/departments/${department._id}`)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const removeDepartment = (id) =>
{
    return({
        type : 'REMOVE_DEPARTMENT',
        payload : id
    })
}
export const startRemoveDepartment = (id) =>
{
    return (dispatch) =>
    {
        axios.delete(`/departments/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const department = response.data
            dispatch(removeDepartment(department._id))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const updateDepartment = (department) =>
{
    return({
        type : 'UPDATE_DEPARTMENT',
        payload : department
    })
}

export const startUpdateDepartment = (formData, props) =>
{
    return (dispatch)=>
    {
        axios.put(`/departments/${props.match.params.id}`, formData, {
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
                const department = response.data
                dispatch(updateDepartment(department))
                props.history.push(`/departments/${department._id}`)
            }
        })
    }
}