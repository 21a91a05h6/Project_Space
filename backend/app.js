//console.log("App running");
import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import multer from 'multer';
import bodyParser from 'body-parser'; //npm i body-parser
import cors from 'cors';  //npm i cors
import customer from './models/customer.js';
import driver from './models/driverinfo.js';
import contact from './models/contact.js';
import userreq from './models/userreq.js';
import maininfo from './models/maininfo.js';
import registration from './models/registration.js';
import authenticate from './models/auth.js';

//const express=require('express');
// const app=express();
// mongoose.connect('mongodb+srv://21a91a05h6:tCzM401u6J8ISh4K@cluster0.dokd585.mongodb.net/Work?retryWrites=true&w=majority')
// .then(() => app.listen(5000))
// .then(() =>console.log("Connected to Database & Listining to localhost 5000"))
// .catch((err) => console.log(err));
//console.log("testing!!"); 
//const express=require('express)
const app=express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://21a91a05h6:QqEtic9RcXTGtgOL@cluster0.dokd585.mongodb.net/Work?retryWrites=true&w=majority') 
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listining to localhost 5000")
)
.catch((err) => console.log(err));
//http://localhost:2222/adddata

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/bookinginfo',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {fname,lname,email,phone,fadd,tadd,persons,lugg,bookdate,time,cname,cprice,comments,payment}=req.body.formdata;
    const cust=new customer({
        fname,
        lname,
        email,
        phone,
        fadd,
        tadd,
        persons,
        lugg,
        bookdate,
        time,
        cname,
        cprice,
        comments,
        payment
    })
    cust.save()
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'polisettisridivyaprabha@gmail.com',
        pass: 'bais ntrv ergs jenq'
      }
    });
    
    var mailOptions = {
      from: 'polisettisridivyaprabha@gmail.com',
      to: email,
      subject: fname+' '+lname+' your '+cname+' reservation is confirmed!',
      text: 'Dear '+fname+','+'\n\nWe are pleased to inform you that your car reservation for a '+cname+' on '+bookdate+' at '+fadd+' has been confirmed.\n\nWe will contact you back with the details of your driver.\n\nWe are pleased to have you aboard.\nThank you for choosing Rent Car Service!!!.\n\nSincerely,\nRent Car Service.',
      // attachments: [
      //     {
      //     filename: req.profile+".jpg",
      //     contentType:'image/jpg',
      //     path:'public/images/'+profile
      //     }
      //     ]
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return res.send({"carbookinginfos":cust,msg:"Reserved Successfully"})
    // res.send({"msg":"success"})
})

app.get('/getcustomerinfo',async(req,res,next)=>{
    let customers;
    try{
        customers=await customer.find();//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!customers){
        return res.status(404).json({message:"No information Found."})
    }
    return res.status(200).json({customers})
})

app.post('/driverinfo',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {name,age,email,phno,exp,add}=req.body.formdata;
    const drive=new driver({
        name,
        age,
        email,
        phno,
        exp,
        add,
    })
    drive.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'polisettisridivyaprabha@gmail.com',
          pass: 'bais ntrv ergs jenq'
        }
      });
      
      var mailOptions = {
        from: 'polisettisridivyaprabha@gmail.com',
        to: email,
        subject: 'Thank you for your application for the driver position at Rent Car Service',
        text: 'Dear '+name+','+'\n\nI am writing to confirm that we have received your application for the Driver position at Rent Car Service.\n\nOur hiring team is currently reviewing all applications, and we will be in touch with qualified candidates to schedule interviews in the coming weeks. In the meantime, please do not hesitate to contact us if you have any questions or need to update your information.\n\nThank you again for your interest in Rent Car Service. We look forward to learning more about you.\n\nSincerely,\nRent Car Service',
        // attachments: [
        //     {
        //     filename: req.profile+".jpg",
        //     contentType:'image/jpg',
        //     path:'public/images/'+profile
        //     }
        //     ]
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return res.send({"driverinfos":drive,msg:"Submitted Successfully. A confirmation mail will be sent to your respective email, please do check it!"})
    // res.send({"msg":"success"})
})

app.post('/contactinfo',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {name,email,message}=req.body.formdata;
    const cont=new contact({
        name,
        email,
        message,
    })
    cont.save()
    return res.send({"contactinfos":cont,msg:"Message sent Successfully"})
    // res.send({"msg":"success"})
})

app.post('/adduserreq',(req,res,next)=>{
  //performs the action
  console.log(req.body.formdata) //form data from the frontend
  const {name,clg,material,mid,date,cap,itype,desc,brand}=req.body.formdata;
  const ureq=new userreq({
    name,
    clg,
    material,
    mid,
    date,
    cap,
    itype,
    desc,
    brand,
  })
  ureq.save()
  return res.send({"userreqinfo":ureq,msg:"Ticket Raised Successfully"})
  // res.send({"msg":"success"})
})

app.post('/addmaintenancedata',(req,res,next)=>{
  //performs the action
  console.log(req.body.request) //form data from the frontend
  const {mid,material,cap,clg,itype,desc,ldate,ndate,works,remarks}=req.body.request;
  const mainten=new maininfo({
    mid,
    material,
    cap,
    clg,
    itype,
    desc,
    ldate,
    ndate,
    works,
    remarks
  })
 mainten.save()
  return res.send({"maintenancedata":mainten,msg:"Sent to Inventory Successfully"})
  // res.send({"msg":"success"})
})

app.get('/getreqdatabyid/:id', async(req,res,next)=>{
  const _id=req.params.id
  //console.log(_id);
  let reqid;
  try{
      reqid=await userreq.findById(_id);//db.variablename.find()
  }catch(err){
      console.log(err);
  }
  if(!reqid){
      return res.status(404).json({message:"No requests Found."})
  }
  return res.status(200).json({reqid})

})

app.get('/getrequests',async(req,res,next)=>{
  let reqs;
  try{
      reqs=await userreq.find();//db.collectionname.find()
  }catch(err){
      console.log(err);
  }
  if(!reqs){
      return res.status(404).json({message:"No Requests Found."})
  }
  return res.status(200).json({reqs})
})

app.get('/getmaintenancedata',async(req,res,next)=>{
  let main;
  try{
      main=await maininfo.find();//db.collectionname.find()
  }catch(err){
      console.log(err);
  }
  if(!main){
      return res.status(404).json({message:"No New Data Found."})
  }
  return res.status(200).json({main})
})

app.post('/registrations',(req,res,next)=>{
  //performs the action
  //console.log(req.body.formdata) //form data from the frontend
  const {firname,lasname,email,DOB,uname,pass}=req.body.formdata;
  const regi=new registration({
      firname,
      lasname,
      email,
      DOB,
      uname,
      pass
  })
  regi.save()
  return res.send({"registrations":regi,msg:"Registered Successfully"})
  // res.send({"msg":"success"})
})

app.get('/getregistrationdata',async(req,res,next)=>{
  let regi;
  try{
      regi=await registration.find();//db.collectionname.find()
  }catch(err){
      console.log(err);
  }
  if(!regi){
      return res.status(404).json({message:"No registrations Found."})
  }
  return res.status(200).json({regi})
})

app.post('/logincheck',async(req,res,next)=>{
  const {uname,pwd}=req.body.formdata
  //const { uname, pass } = req.body.formdata;

const auth = await authenticate.findOne({ uname:uname, pwd:pwd });
  if (auth) {
      res.json({ msg: 'Login successful',reg:uname });
  } else {
      res.status(201).json({ msg: 'Login failed' });
  }
  // return res.send({"logins":authenticate,msg:"success"})
    //res.send({"msg":"success"})

//performs the action
    // console.log(req.body.formdata) //form data from the frontend
    // const {uname,pwd}=req.body.formdata;
    // const auth=new authenticate({
    //     uname,
    //     pwd
    // })
    // auth.save()
    // return res.send({"userfhlogins":auth,msg:"success"})
    // res.send({"msg":"success"})
})
app.delete('/deleterequest/:id',async(req,res,next)=>{
  let reqdata;
  const id=req.params.id
  try{
      reqdata=await userreq.findByIdAndDelete({_id:id})
  }
  catch(err){
      console.log(err)
  }
  if(!reqdata){
      console.log("no requests found");
  }
  return res.status(200).json({reqdata})
})
app.delete('/deleterequestcomplete/:id',async(req,res,next)=>{
  let indata;
  const id=req.params.id
  try{
      indata=await maininfo.findByIdAndDelete({_id:id})
  }
  catch(err){
      console.log(err)
  }
  if(!indata){
      console.log("no data found");
  }
  return res.status(200).json({indata})
})


// app.use('/testing',(req,res,next)=>{
//     res.send("FSD Drive ready testing!!");
// })
//app.listen(2222)
 
//backend:/api
//http://localhost:2222/api
// app.use('/api',(req,res,next)=>{
//     res.send("Hello World!");
// })

// app.use('/testing',(req,res,next)=>{
//     res.send("testing");
// })

//app.listen(5000);

//backend:/api
//http://localhost:2222/api- it is a local api works only on this PC.