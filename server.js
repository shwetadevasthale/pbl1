//importing packages

const express=require('express');
const admin=require('firebase-admin');
const bcrypt=require('bcrypt');
const path=require('path');

//declare static path

let staticPath=path.join(__dirname,"public");

//initializing express.js

const app=express();

//midlearners
app.use(express.static(staticpath));
app.use(express.json());

//routes
//home route

app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"public","index.html"));
})
 //signup route

 app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,"public","signup.html"));
 })

 app.post('/signup',(req,res)=>{

    let{name,email,password,number,tac,notification}=req.body;

    //form validation
    if(name.length<3){
        return res.json('alert': 'name must be 3 letters long')
    }

    else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length < 8){
        showAlert('password should be 8 letters long');
    } else if(!number.value.length){
        showAlert('enter your phone number');
    } else if(!Number(number.value) || number.value.length < 10){
        showAlert('invalid number, please enter valid one');
    } else if(!tac.checked){
        showAlert('you must agree to our terms and conditions');
    } else{
        // submit form
        loader.style.display='block';
        sendData('/signup',{
           
            name:name.value,
            email:email.value,
            password:password.value,
            number: number.value,
            tac:tac.checked,
           notification:notification.checked,
           seller:false




        })
    }

     console.log(req.body);
     res.json('data recieved');
 })


//404 route
app.get('/404',(req,res)=>{
    res.sendFile(path.join(staticPath,"404.html"));
})

app.listen(3000,()=>{
    console.log('listening on part 3000.....');
})