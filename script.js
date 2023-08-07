import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(express.static("public"));
//app.get("/",(req,res)=>{
   // res.render("home.ejs");//
//})//
app.use(bodyParser.urlencoded({extended:true}));
function gettingInput(req,res,next){
    var value=req.body["task"];
    next();
}
app.use(gettingInput);
app.post("/add",(req,res)=>{
    res.send("hello");
})
app.get("/",(req,res)=>{
    const today=new Date();
    let day=today.getDay();
    let date=today.getDate();
    let month=today.getMonth();
    const dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dateName=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    res.render("home.ejs",{
       dayType: dayName[day],
       datetype:date,
       monthtype:dateName[month],
    })
})
app.listen(port,()=>{
    console.log("listening on port 3000");
});
