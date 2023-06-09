const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required : true
    },
    lastName : {
        type:String,
        
    },
    contact : {
        type:Number,    
        required : true
    },
    course : {
        type:String,
        required : true
    }
})

const StudentModel = mongoose.model("Student",StudentSchema)

module.exports = StudentModel;