const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const axios = require('axios');
const fileUpload = require('express-fileupload');
app.use(fileUpload());

require("./db/conn");

const studentDetails = require("./models/signup");
const teacherDetails = require("./models/signup_t");
const { response } = require('express');
const upload=require("./models/upload");
const annou = require("./models/Announsment");
const { connect } = require('http2');
const Collection = require('mongoose');
const Announsment = require('./models/Announsment');

const port = process.env.PORT || 8080;

const static_path= path.join(__dirname,"../public");
const template_path= path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "ejs");
app.set("views", template_path);
// app.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup", async (req,res)=>{
    try{
        const a =0;
       const details_of_student = new studentDetails({
            studentName : req.body.s_name,
            parentsName : req.body.p_name,
            studentEmail : req.body.s_email,
            parentsEmail : req.body.p_email,
            password : req.body.password,
            standard : req.body.std,
            attendance : a
        })
       const signup = await details_of_student.save();
       res.status(201).render("login"); 
    } catch(error){
        res.status(400).send(error);
    }
})

app.get("/signup_t",(req,res)=>{
    res.render("signup_t");
})

app.post("/signup_t", async (req,res)=>{
    try{
       const details_of_teacher = new teacherDetails({
            teacherName : req.body.t_name,
            teacherEmail : req.body.t_email,
            password_t : req.body.password_t,
            subject : req.body.subject
        })
       const signup_t = await details_of_teacher.save();
       res.status(201).render("login_t"); 
    } catch(error){
        res.status(400).send(error);
    }
})


app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await studentDetails.findOne({studentEmail:email});
        if(userEmail.password === password)
        {
            res.status(201).render("option_"+userEmail.standard);
        }
        else
        {
            res.send("Invalid Email or Password");
        }

    } catch (error) {
        res.status(400).send("invalid Email and password");
    }
})

app.get("/option",(req,res)=>{
    res.render("option");
})


app.get("/login_p",(req,res)=>{
    res.render("login");
})

app.post("/login_p", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await studentDetails.findOne({parentsEmail:email});
        if(userEmail.password === password)
        {
            res.status(201).render("option");
        }
        else
        {
            res.send("Invalid Email or Password");
        }
    } catch (error) {
        res.status(400).send("invalid Email and password");
    }
})

app.get("/login_t",(req,res)=>{
    res.render("login_t");
})

app.post("/login_t", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userEmail = await teacherDetails.findOne({teacherEmail:email});
        if(userEmail.password_t === password)
        {
            res.status(201).render("option");
            
        }
        else
        {
            res.send("how are you");
        }

    } catch (error) {
        res.status(400).send("Hello");
    }
})

app.get("/Attendance",(req,res)=>{
    studentDetails.find({}, function(err, data) {
        // note that data is an array of objects, not a single object!
        res.render('Attendance', {
            user : req.user,
            Details: data
        });
    });
    
})

const upadetAttendance = async (_id)=> {
    const ate = a;
    // if(p==1){
        a++;
    // }
    const result = await studentDetails.updateOne({_id},{
        $set : {
            attendance : a
        }
    });
}

app.get("/Announsment",(req,res)=>{
    res.render("Announsment");
})

app.post("/Announsment", async(req,res)=>{
    try{
       const ann = new annou({
            standard : req.body.std,
            message : req.body.message
        })
       const Message = await ann.save();
       res.status(201).render("Announsment"); 
    } catch(error){
        res.status(400).send(error);
    }
})

app.get("/Announsment_s",(req,res)=>{
    Announsment.find({}, function(err, data) {
        // note that data is an array of objects, not a single object!
        res.render('Announsment_s', {
            user : req.user,
            Alert: data
        });
    });
})

app.get("/Material_c_8",(req,res)=>{
    res.render("Material_c_8");
})

app.get("/Material_8_M",(req,res)=>{
    res.render("Material_8_M");
})

app.get("/Material_8_E",(req,res)=>{
    res.render("Material_8_E");
})

app.get("/Material_8_S",(req,res)=>{
    res.render("Material_8_S");
})

app.get("/Material_c_9",(req,res)=>{
    res.render("Material_c_9");
})

app.get("/Material_9_M",(req,res)=>{
    res.render("Material_9_M");
})

app.get("/Material_9_E",(req,res)=>{
    res.render("Material_9_E");
})

app.get("/Material_9_S",(req,res)=>{
    res.render("Material_9_S");
})

app.get("/Material_c_10",(req,res)=>{
    res.render("Material_c_10");
})

app.get("/Material_10_M",(req,res)=>{
    res.render("Material_10_M");
})

app.get("/Material_10_E",(req,res)=>{
    res.render("Material_10_E");
})

app.get("/Material_10_S",(req,res)=>{
    res.render("Material_10_S");
})



app.listen(port, (req, res) => {
    console.log('server is listening ');
})
app.get("/upload",(req,res)=>{
    res.render("upload");
})

app.get("/aboutus",(req,res)=>{
    res.render("aboutus");
})

app.post('/upload',async(req,res)=>{
    // Get the file that was set to our field named "image"
    // const { image } = req.files;

    // // If no image submitted, exit
    // if (!image) return res.sendStatus(400);

    // // Move the uploaded image to our upload folder
    // image.mv(__dirname + '/upload/' + image.name);

    // res.sendStatus(200);
    try{
        const UPLOADMETH= new upload({
            upload:req.body.image,
            Std:req.body.std
        })
        const UP = await UPLOADMETH.save();
       res.status(201).render("index"); 
    } catch(error){
        res.status(400).send(error);
    }

});
