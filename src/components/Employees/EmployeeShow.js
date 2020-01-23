import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

function EmployeeShow(props)
{
    return <div>
        {
            !_.isEmpty(props.employee) &&
            <div>
        <h3>{props.employee.name} | {props.employee.email} | {props.employee.mobile} | {props.employee.department.name}</h3>
                <Link to = {`/employees/edit/${props.employee._id}`} className = "btn btn-primary">Edit</Link>|
                <Link to = "/employees" className = "btn btn-dark" >Back</Link>
            </div>
        }
                
    </div>
        
    
}
const mapStateToProps = (state, props) =>
{
    return({
        employee : state.employees.find(employee => employee._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(EmployeeShow)