import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './store/configureStore'
import App from './App';
import { Provider } from 'react-redux'
import { startSetCustomers } from './actions/customer'
import { startSetDepartments } from './actions/department'
import { startSetEmployees } from './actions/employee'
import { startSetTickets } from './actions/ticket'
import { startGetUser } from './actions/user'

const store = configureStore()
 
console.log(store.getState())
store.subscribe(()=>
{
    console.log(store.getState())
})


if(localStorage.getItem('authToken'))
{
    store.dispatch(startSetCustomers())
    store.dispatch(startSetDepartments())
    store.dispatch(startSetEmployees())
    store.dispatch(startSetTickets())
    store.dispatch(startGetUser())
}

const ele = (
    <Provider store = {store}>
        <App />
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));


