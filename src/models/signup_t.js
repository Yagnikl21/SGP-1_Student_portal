const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    teacherName: {
        type:String,
        require:true
    },
    teacherEmail: {
        type:String,
        require:true,
        unique:true
    },
    password_t: {
        type:String,
        require:true
    },
    subject:{
        type:String,
        require:true
    }
})

const teacherDetails = new mongoose.model("details_t",teacherSchema);
module.exports= teacherDetails;