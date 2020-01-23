const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const customerSchema = new Schema({
     name : {
         type : String,
         required : true,
         minlength : 5,
         maxlength : 20
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
                 return 'Invalid Email Format'
             }
         }
    },
     mobile : {
        type : String,
        unique : true,
        required : true,
        minlength : 10,
        maxlength : 10
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

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer