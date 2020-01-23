import React from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'
import { startUpdateEmployee } from '../../actions/employee'

function EmployeeEdit(props)
{
    const handleSubmit = (formData) =>
    {
       props.dispatch(startUpdateEmployee(formData, props))
    }
    return (
            <div>
                <h2 className = "text-center">Edit Employee</h2>
                {
                    !_.isEmpty(props.employee) && <EmployeeForm {...props.employee} handleSubmit = {handleSubmit}/>
                }
                
            </div>
        )
}
const mapStateToProps = (state, props) =>
{
    return({
        employee : state.employees.find(employee => employee._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(EmployeeEdit)