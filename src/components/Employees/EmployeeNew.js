import React from 'react'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import { startAddEmployee } from '../../actions/employee'

function EmployeeNew(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startAddEmployee(formData, props))
    }
    return(
            <div>
                <h2>Add Employee</h2>
                <EmployeeForm handleSubmit = {handleSubmit}/>
            </div>
    )
}

export default connect()(EmployeeNew)