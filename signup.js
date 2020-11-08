const express=require("express");
const router = express.Router()


var knex = require('./connection')


router.post("/post/signup",(req,res)=>{
    res.send(req.body)
    knex("users2").insert(req.body).then(()=>{
        console.log("signup success");
    }).catch((err)=>{
        console.log(err);
    })
    
        
})



module.exports = router;