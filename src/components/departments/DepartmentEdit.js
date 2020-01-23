import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { startUpdateDepartment } from '../../actions/department'
import DepartmentForm from './DepartmentForm'

function DepartmentEdit(props)
{
    const handleClick = (formData) =>
    {
        props.dispatch(startUpdateDepartment(formData, props))
    }
    return(
            <div>
                <h2 className = "text-center">Department Edit</h2>
                {
                    !_.isEmpty(props.department) &&
                    <DepartmentForm name = {props.department.name} handleClick = {handleClick}/>
                }
                
            </div>
        )
}

const mapStateToProps = ( state, props ) =>
{
    return({
        department : state.departments.find(department => department._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(DepartmentEdit)