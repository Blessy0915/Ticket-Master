import React from 'react'
import { connect } from 'react-redux'

class EmployeeForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name : props.name ? props.name :'',
            email : props.email ? props.email : '',
            mobile : props.mobile ? props.mobile :'',
            department : props.department ? props.department : ''
        }
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            email : this.state.email,
            mobile : this.state.mobile,
            department : this.state.department
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
            <div className = "container col-md-10">
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
                
                    <label htmlFor = "email">
                        Email</label>
                        <input type = "text"
                               value = {this.state.email}
                               onChange = {this.handleChange}
                               id = "email"
                               placeholder = "abc123@gmail.com"
                               className = "form-control"
                               name = "email"/>
                    
                    <label htmlFor = "mobile">
                        Mobile</label>
                        <input type = "text"
                               value = {this.state.mobile}
                               onChange = {this.handleChange}
                               id = "mobile"
                               placeholder = "+91 9887766554"
                               className = "form-control"
                               name = "mobile"/>
                    
                    <label htmlFor = "department">
                        Department</label>
                        <select name = "department" id = "department" className = "form-control" onChange = {this.handleChange}>
                        <option>Select</option>
                        {
                            this.props.departments.map((department)=>
                            {
                                return(
                                    <option key = {department._id} value = {department._id}>{department.name}</option>
                                )
                            })
                        }
                        </select>

                    <br/>
                    <input type = "submit" className = "btn btn-primary btn-lg"/>
                </form>


           </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    return({
        departments : state.departments
    })
}
export default connect(mapStateToProps)(EmployeeForm)