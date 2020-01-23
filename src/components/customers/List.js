import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startRemoveCustomer } from '../../actions/customer'
import swal from 'sweetalert'

function CustomerList(props)
{
    const handleClick = (id) =>
    {
        props.dispatch(startRemoveCustomer(id))
    }
    return(
            <div>
                <h2 className = "text-center">Listing Customers</h2>
                <table className = "table table-striped table-hover">
                    <thead className = "table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.customers.map((customer)=>
                            {
                                return(
                                
                                    <tr key = {customer._id}>
                                        <td><Link to = {`/customers/${customer._id}`}>{customer.name}</Link></td>
                                        <td>{customer.email}</td>
                                        <td>{customer.mobile}</td>
                                        <td><Link to = {`/customers/${customer._id}`} className = "btn btn-primary">Show</Link></td>
                                        <td><Link className = "btn btn-secondary" to= {`/customers/edit/${customer._id}`}>Edit</Link></td>
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
                                                    handleClick(customer._id)
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
                </table>
                <Link to = "/customers/new" className = "btn btn-primary">Add Customer</Link>
                
            </div>
    )
}

const mapStateToProps = ( state ) =>
{
    return({
        customers : state.customers
    })
}
export default connect(mapStateToProps)(CustomerList)