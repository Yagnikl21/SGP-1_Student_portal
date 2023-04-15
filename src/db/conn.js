const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Yagnik_21:yagnik23@cluster0.z4m8ee2.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true
 })
    .then(() => console.log("connection sucessful"))
    .catch((err) => console.log("Erroe accurse"));
