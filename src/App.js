import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import CustomerList from './components/customers/List'
import CustomerShow from './components/customers/Show';
import CustomerNew from './components/customers/New'
import EmployeeList from './components/Employees/EmployeeList'
import EmployeeShow from './components/Employees/EmployeeShow'
import DepartmentList from './components/departments/DepartmentList'
import DeptShow from './components/departments/DepartmentShow'
import DepartmentEdit from './components/departments/DepartmentEdit'
import CustomerEdit from './components/customers/Edit'
import EmployeeNew from './components/Employees/EmployeeNew';
import EmployeeEdit from './components/Employees/EmployeeEdit'
import TicketEdit from './components/tickets/TicketEdit'
import TicketList from './components/tickets/TicketList'
import TicketShow from './components/tickets/TicketShow'
import TicketNew from './components/tickets/TicketNew'
import TicketCompleted from './components/tickets/TicketCompleted'
import { startLogoutUser } from './actions/user'

import image2 from './components/common/image2.png'


function App(props) {
  const handleLogout = () =>
  {
      props.dispatch(startLogoutUser())
  }
  return (
      <BrowserRouter>
      <div>
  <div className = "container-fullwidth">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <Link to="/" className="navbar-brand mb-0 h3"><img src={image2} width="40" height="40" class="d-inline-block align-top" alt=""/>Ticket Master</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
    <ul class="nav justify-content-end">
      {

      !_.isEmpty(props.user) ? 
      <div>
      <li class="navbar-nav">
        <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/customers">Customers <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/employees">Employees <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/departments">Department <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/tickets">Tickets <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="#" onClick = {handleLogout}>Logout <span class="sr-only">(current)</span></Link>
      </li>
      </div>
      :
      <div>
      <li class="navbar-nav">
        <Link class="nav-item nav-link active" to="/users/register">Register <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/users/login">Login <span class="sr-only">(current)</span></Link>
      </li>

      </div>
}
     </ul>
</nav>
 <br/>
 <br/>
 </div>
          <div className="container">
          <Switch>
          <Route path = "/" component = {Home} exact = {true}/>
          <Route path = "/users/register" component = {Register}/>
          <Route path = "/users/login" component = {Login}/>
          <Route path = "/customers" component = {CustomerList} exact = {true}/>
          <Route path = "/customers/new" component = {CustomerNew}/>
          <Route path = "/employees" component = {EmployeeList} exact = {true}/>
          <Route path = "/employees/new" component = {EmployeeNew} />
          <Route path = "/departments" component = {DepartmentList} exact = {true}/>
          <Route path = "/customers/edit/:id" component = {CustomerEdit}/>
          <Route path = "/employees/edit/:id" component = {EmployeeEdit}/>
          <Route path = "/tickets" component = {TicketList} exact = {true}/>
          <Route path = "/tickets/completed-tickets" component = {TicketCompleted}/>

          <Route path = "/tickets/new" component = {TicketNew}/>
          <Route path = "/tickets/edit/:id" component = {TicketEdit}/>
          <Route path = "/tickets/:id" component = {TicketShow}/>
          <Route path = "/departments/edit/:id" component = {DepartmentEdit}/>
         

          <Route path = "/customers/:id" component = {CustomerShow}/>
          <Route path = "/employees/:id" component = {EmployeeShow}/>
          <Route path = "/departments/:id" component = {DeptShow}/>
          
          </Switch>
          
          </div>
          </div>
      </BrowserRouter>
  );
}
const mapStateToProps = ( state ) =>
{
  return({
    user : state.user
  })
}
export default connect(mapStateToProps)(App);