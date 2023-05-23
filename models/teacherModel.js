const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }
})

const TeacherModel = mongoose.Schema("Teacher",TeacherSchema)

module.exports = TeacherModel;