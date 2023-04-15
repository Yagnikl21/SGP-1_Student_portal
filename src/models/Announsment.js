const mongoose = require("mongoose");

const Message = new mongoose.Schema({
    standard : {
        type : Number,
        require : true
    },

    message : {
        type : String,
        require : true
    }
})

const Announsment = new mongoose.model("Alert",Message);
module.exports= Announsment;
