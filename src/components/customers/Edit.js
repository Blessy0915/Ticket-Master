import React from 'react'
import Form from './form'
import { connect } from 'react-redux'
import {startUpdateCustomer } from '../../actions/customer'
import _ from 'lodash'
function CustomerEdit(props) 
{
    const handleSubmit = (formData) =>
    {
        const id = props.match.params.id
        props.dispatch(startUpdateCustomer(formData, id, props))
    }
    return(
            <div>
                <h2 className = "text-center">Edit Customer</h2>
                {
                        !_.isEmpty(props.customer) && <Form {...props.customer} handleSubmit = {handleSubmit}/>
                }
            </div>

    )
}
const mapStateToProps = (state, props) =>
{
    return({
        customer : state.customers.find(customer=> customer._id === props.match.params.id)
    })
}

export default connect(mapStateToProps)(CustomerEdit)