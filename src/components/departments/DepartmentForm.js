import React from 'react'

export default class DepartmentForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name : props.name? props.name : ''
        }
    } 
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            name : this.state.name
        }
        this.props.handleClick(formData)
        this.setState({name : ''})
    }
    handleChange = (e) =>
    {
        const name = e.target.value
        this.setState({name})
    }
    render()
    {
        return(
            <div className = "container offset col-md-6">
             
                <form onSubmit = {this.handleSubmit} className = "form-group">
                    <label htmlFor = "name">Name</label>
                    <input type = "text"
                           value = {this.state.name}
                           onChange = {this.handleChange}
                           className = "form-control"
                           placeholder = "enter department name"
                           id = "name"/>
                    <br/><br/>
                    <input type = "submit" className = "btn btn-primary btn-lg"/>
                </form>
                </div>
        )
    }
}