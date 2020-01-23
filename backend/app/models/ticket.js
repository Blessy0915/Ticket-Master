const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ticketSchema = new Schema({
    code : {
        type : String,
        required : true,
        unique : true
    },
    customer : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'Customer'
    },
    department : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'Department'
    },
    employees : [{
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'Employee'
    }],
    message : {
        type : String,
        minlength : 2,
        maxlength : 250
    },
    priority : {
        type : String,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    isPending : {
        type : Boolean,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
    
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket