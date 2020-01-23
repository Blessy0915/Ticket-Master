import React from 'react'
import _ from 'lodash'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux' 

function CustomerShow(props)
{
    return(
            <div>
                {
                   !_.isEmpty(props.customer) &&
                   <div>
                       <h2>{props.customer.name} - {props.customer.email} - {props.customer.mobile}</h2>
                       <Link to = {`/customers/edit/${props.customer._id}`} className = "btn btn-primary">Edit</Link>
                       <Link to = "/customers" className = "btn btn-secondary">back</Link>
                    </div>
                }
                
            </div>
    )
}


const mapStateToProps = ( state, props ) =>
{
    const id = props.match.params.id
    return({
        customer : state.customers.find(customer => customer._id === id)
    })
}
export default connect(mapStateToProps)(CustomerShow)