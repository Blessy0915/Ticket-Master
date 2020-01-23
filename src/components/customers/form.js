import React from 'react'

export default class Form extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name : props.name ? props.name : '',
            email : props.email ? props.email : '',
            mobile : props.mobile ? props.mobile : ''
        }
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render()
    {
        return(
            <div className = "container offset col-md-6">
                <form onSubmit = {this.handleSubmit} className = "form-group">
                    <label htmlFor = "name">
                        Name</label>
                        <input type = "text"
                               value = {this.state.name}
                               onChange = {this.handleChange}
                               id = "name"
                               placeholder = "enter your name"
                               className = "form-control"
                               name = "name"/>

                    <br/>
                    <label htmlFor = "email">
                        Email</label>
                        <input type = "text"
                               value = {this.state.email}
                               onChange = {this.handleChange}
                               id = "email"
                               placeholder = "abc34@gmail.com"
                               className = "form-control"
                               name = "email"/>
                    
                    <br/>
                    <label htmlFor = "mobile">
                        Mobile</label>
                        <input type = "text"
                               value = {this.state.mobile}
                               onChange = {this.handleChange}
                               id = "mobile"
                               placeholder = "+91 9857335373"
                               className = "form-control"
                               name = "mobile"/>
        
                    <br/>
                    <input type = "submit" className = "btn btn-primary btn-lg"/>
                </form>
            </div>
        )
    }
}