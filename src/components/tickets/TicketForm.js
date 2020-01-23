import React from 'react'
import { connect } from 'react-redux'


class TicketForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            code : props.code ? props.code : '',
            customer : props.customer ? props.customer : '',
            department : props.department ? props.department : '',
            employees : props.employees? props.employees : [],
            message : props.message ? props.message : '',
            priority : props.priority ? props.priority : '',
            emps : [],
            empNames : [],
            displayEmps : [],
            isPending : props.isPending ? props.isPending : true
        }
    }
    
    handleChange = (e)=>
    {
       
        this.setState({
           
            [e.target.name] : e.target.value
        })
        
        if(e.target.name === 'employees')
       {
           const arr = e.target.value.split(',')
           this.setState((prevState)=>
           {
               return{
                empNames : prevState.empNames.concat({name : arr[1]}),
                displayEmps:prevState.displayEmps.concat({_id : arr[0], name : arr[1]})
               }
              
           })
       }
        else if(e.target.name === 'department')
        {
            this.setState({
                emps:this.props.employees.filter(employee=>employee.department._id === e.target.value )
       })
       
     
    }} 
    
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            code : this.state.code,
            customer : this.state.customer,
            department : this.state.department,
            employees : this.state.displayEmps,
            priority: this.state.priority,
            message : this.state.message,
            isPending : this.state.isPending
        }
        this.props.handleSubmit(formData)
        window.location.reload()
    }
    
    

    render()
    {
        return(
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className = "form-group">
                    <label htmlFor = "code">code </label>  
                        <input type = "text"
                               value = {this.state.code}
                               onChange = {this.handleChange}
                               id= "code"
                               className = "form-control"
                               name = "code"/>
                   
                    <label htmlFor = "customer">customer</label>
                        <select onChange = {this.handleChange} 
                                name = "customer" 
                                id = "customer" 
                                className = "form-control">
                                <option>select</option>
                                {
                                    this.props.customers.map((customer)=>
                                    {
                                        return(
                                            <option key = {customer._id} value = {customer._id}>{customer.name}</option>
                                        )
                                    })
                                }
                        </select>
                   
                    <label htmlFor = "department">department</label>
                        <select onChange = {this.handleChange} 
                                name = "department" 
                                id= "department"
                                className = "form-control">
                                <option>select</option>
                                {
                                    this.props.departments.map((department)=>
                                    {
                                        return(
                                            <option key = {department._id} value = {department._id}>{department.name}</option>
                                        )
                                    })
                                }
                        </select>
                   
                    <label htmlFor = "employee">Employees</label>
                    {
                        this.state.empNames &&
                        <div>
                    <ul>
                    {
                         this.state.empNames.map((e,i)=>
                            {
                                console.log(e.name,1)
                                return(
                                    <li key = {i}>{e.name}</li>
                                )
                            })
                    }
                    </ul>
                    </div>}
                        <select id= "employee"
                                onChange = {this.handleChange}
                                name = "employees"
                                placeholder = "select"
                                className = "form-control">
                                <option>select</option>
                                
                               {
                                this.state.emps.map((emp) =>
                                {
                                    return(
                                        <option key = {emp._id} value = {[emp._id, emp.name]}>{emp.name}</option>
                                    )
                                })
                            }
                        </select>

                    
                    <label htmlFor = "message">Message</label>
                        <textarea onChange = {this.handleChange} value = {this.state.message} name = "message" id = "message" className = "form-control">

                        </textarea>
                    
                    <label>Priority</label><br/>
                    <input type = "radio" name = "priority" value = "high" checked= {this.state.priority==="High"} onChange={this.handleChange}/>High<br/>
                    <input type = "radio" name = "priority" value = "medium" checked= {this.state.priority==="Medium"} onChange = {this.handleChange}/>Medium<br/>
                    <input type = "radio" name = "priority" value = "low" checked= {this.state.priority==="Low"} onChange = {this.handleChange}/>Low<br/>
                    <input type = "submit" className = "btn btn-primary btn-lg"/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = ( state ) =>
{
    return({
        customers : state.customers,
        employees : state.employees,
        departments : state.departments
    })
}

export default connect(mapStateToProps)(TicketForm)