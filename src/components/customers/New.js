import React from 'react'
import Form from './form'
import { connect } from 'react-redux'
import { startAddCustomer } from '../../actions/customer'

function CustomerNew(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startAddCustomer(formData, props))  
    } 
    return(
            <div>
               <h2  className = "text-center">Add Customer</h2> 
               <Form handleSubmit = {handleSubmit} />
            </div>
    )
}
export default connect()(CustomerNew)