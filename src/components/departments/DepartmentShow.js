import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function DeptShow(props)
{
    return(
            <div>
                {
                    !_.isEmpty(props.department) &&
                    <div>
                        <h2>Name - {props.department.name}</h2>
                        <Link to = {`/departments/edit/${props.department._id}`} className = "btn btn-primary">Edit </Link> 
                        <Link to = "/departments" className = "btn btn-dark"> Back</Link>
                    </div>
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

export default connect(mapStateToProps)(DeptShow)