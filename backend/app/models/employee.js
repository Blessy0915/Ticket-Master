const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const employeeSchema = new Schema ({
    name : {
        type : String,
        required : true,
        minlength : 4,
        maxlength: 20
    },
    mobile : {
        type : String,
        minlength : 10,
        maxlength : 10,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            message : function(){
                return 'Invalid email Format'
            }
        }
    }, 
    department : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'Department'
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee