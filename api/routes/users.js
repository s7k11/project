const express = require('express');

const mongoose = require('mongoose');
const app = express();
const User=require('../model/testquery');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/View',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

router.post('/add',function(req,res){
    // const city=req.body.city
    const email=req.body.email
    const name=req.body.name
    const subject=req.body.subject
    const message=req.body.message
    new User({
        message:message,
        email:email,
        name:name,
        // city:city,
        subject:subject
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
///////////////////////////////////////////login 

router.post('/login',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    let UserChk={
        username:req.body.username,
        password:req.body.password
    }
    User.find({
        username:UserChk.username
    },(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            if(username!=null){
                res.json("Username already exists")
            }
            else{
                if(data.password===password){
                    res.json("working")

                }
            }
        }
    })
})


//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        city : req.body.city,
        address : req.body.address
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;