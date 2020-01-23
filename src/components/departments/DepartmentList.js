import React from 'react'
import DepartmentForm from './DepartmentForm'
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import { connect } from 'react-redux'
import { startAddDepartment, startRemoveDepartment } from '../../actions/department'

function DepartmentList(props)
{
    const handle = (formData) =>
    {
        props.dispatch(startAddDepartment(formData, props))
    }
   
    const handleClick = (id) =>
    {
        props.dispatch(startRemoveDepartment(id))   
    }
    return(
            <div>
                <h2  className = "text-center">Departments</h2>
                <table className = "table table-striped table-hover">
                    <thead className = "table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.departments.map((dept)=>
                            {
                                return(
                                    <tr key = {dept._id}>
                                        <td>{dept.name}</td>
                                        <td><Link to = {`/departments/${dept._id}`} className = "btn btn-primary">Show</Link></td>
                                        <td><Link className = "btn btn-secondary" to = {`/departments/edit/${dept._id}`}>Edit</Link></td>
                                        <td><button className = "btn btn-danger" onClick ={()=>
                                        {
                                            swal({
                                                title: "Are you sure?",
                                                text: "Once deleted, you will not be able to recover this data!",
                                                icon: "warning",
                                                buttons: true,
                                                dangerMode: true,
                                              })
                                              .then((willDelete) => {
                                                if (willDelete) {
                                                    handleClick(dept._id)
                                                  swal("Poof! Your data has been deleted!", {
                                                    icon: "success",
                                                  });
                                                } else {
                                                  swal("Your data is safe!");
                                                }
                                              });
                                            
                                        }}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table><br/>
                <h2 className = "text-center">Add Department</h2>
                <DepartmentForm handleClick = {handle}/>
            </div>
        )
}

const mapStateToProps = ( state ) =>
{
    return({
        departments : state.departments
    })
}
export default connect(mapStateToProps)(DepartmentList)