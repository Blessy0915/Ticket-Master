import React from 'react'
import { startLoginUser } from '../../actions/user'
import { connect } from 'react-redux'

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData,this.props))
    }
    handleChange = (e) =>
    {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    render()
    {
        return(
            <div className = "container offset col-md-5 ">
                <h3 className = "text-center">Login</h3><br/>
                <form onSubmit = {this.handleSubmit} className = "form-group">
                        <input type = "text"
                               value = {this.state.email}
                               onChange = {this.handleChange}
                               placeholder = "--Email--"
                               className = "form-control"
                               name = "email"/><br/>
               
                        <input type = "password"
                               value = {this.state.password}
                               onChange = {this.handleChange}
                                placeholder = "--Password--"
                               className = "form-control"
                               name = "password"/><br/>
                    <input type = "submit" className = "btn btn-primary btn-lg btn-block"/>
                </form>
            </div>

        )
    }
}
export default connect()(Login)