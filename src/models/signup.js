const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {
        type:String,
        require:true
    },
    parentsName: {
        type:String,
        require:true
    },
    studentEmail: {
        type:String,
        require:true,
        unique:true
    },
    parentsEmail: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type:String,
        require:true
    },
    standard:{
        type:Number,
        require:true
    },
    attendance:{
        type:Number,
    }
})

const studentDetails = new mongoose.model("Details",studentSchema);
module.exports= studentDetails;
