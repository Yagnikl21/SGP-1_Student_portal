const mongoose = require("mongoose");

const TEACHER = new mongoose.Schema({

    upload:{
        type:String,
    },
    Std:{
        type:Number,
        require:true
    }
})

const TEACHERa = new mongoose.model("Announcement",TEACHER);
module.exports= TEACHERa;
