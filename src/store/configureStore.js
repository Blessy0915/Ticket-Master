import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import customersReducer from '../reducers/customer'
import departmentsReducer from '../reducers/department'
import employeesReducer from '../reducers/employee'
import ticketsReducer from '../reducers/ticket'
import userReducer from '../reducers/user'

const configureStore = () =>
{
    const store = createStore(combineReducers({
        customers : customersReducer,
        departments : departmentsReducer,
        employees : employeesReducer,
        tickets : ticketsReducer,
        user : userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
