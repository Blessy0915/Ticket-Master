const express = require('express')
const router = express.Router()
const customerController = require('../app/controllers/customerController')
const employeeController = require('../app/controllers/employeeController')
const usersController = require('../app/controllers/usersController')
const departmentController = require('../app/controllers/departmentController')
const ticketController = require('../app/controllers/ticketController')
const authenticateUser = require('../app/middlewares/authenticate')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/accounts', authenticateUser, usersController.account)
router.delete('/users/logout', authenticateUser, usersController.logout)

router.get('/customers', authenticateUser, customerController.list)
router.post('/customers', authenticateUser, customerController.create)
router.get('/customers/:id', authenticateUser, customerController.show)
router.put('/customers/:id', authenticateUser,  customerController.update)
router.delete('/customers/:id', authenticateUser, customerController.destroy)


router.get('/employees', authenticateUser, employeeController.list)
router.post('/employees', authenticateUser, employeeController.create)
router.get('/employees/:id', authenticateUser, employeeController.show)
router.put('/employees/:id', authenticateUser, employeeController.update)
router.delete('/employees/:id', authenticateUser, employeeController.destroy)


router.get('/departments', authenticateUser, departmentController.list)
router.post('/departments', authenticateUser, departmentController.create)
router.get('/departments/:id', authenticateUser, departmentController.show)
router.put('/departments/:id', authenticateUser, departmentController.update)
router.delete('/departments/:id', authenticateUser, departmentController.destroy)


router.get('/tickets', authenticateUser, ticketController.list)
router.post('/tickets', authenticateUser, ticketController.create)
router.get('/tickets/:id', authenticateUser, ticketController.show)
router.put('/tickets/:id', authenticateUser, ticketController.update)
router.delete('/tickets/:id', authenticateUser, ticketController.destroy)




module.exports = router