import React from 'react'
import { startRemoveEmployee } from '../../actions/employee'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'

function EmployeeList(props)
{
    const handleClick = (id) =>
    {
        props.dispatch(startRemoveEmployee(id))
    }
    
        return(
            <div>
                <h2 className = "text-center">Employees</h2>
                <table className = "table table-striped table-hover">
                    <thead className = "table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Action</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.employees.map((employee)=>
                            {
                                return(
                                    <tr key = {employee._id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.mobile}</td>
                                        {employee.department ? <td>{employee.department.name}</td> : ''}
                                        <td><Link to = {`/employees/${employee._id}`} className = "btn btn-primary">Show</Link></td>
                                        <td><Link className = "btn btn-secondary" to= {`/employees/edit/${employee._id}`}>Edit</Link></td>
                                        <td><button className = "btn btn-danger" onClick = {()=>
                                            
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
                                                        handleClick(employee._id)
                                                      swal("Poof! Your data has been deleted!", {
                                                        icon: "success",
                                                      });
                                                    } else {
                                                      swal("Your data is safe!");
                                                    }
                                                  });
                                               
                                            }
                                        }>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to = "/employees/new" className = "btn btn-primary ">Add Employee</Link>
            </div>
        )
}
const mapStateToProps = (state) =>
{
    console.log(state.employees)
    return({
        employees  : state.employees
    })
}
export default connect(mapStateToProps)(EmployeeList)