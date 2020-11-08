const express=require("express");
const router = express.Router()



router.delete("/delete",(req,res)=>{
    var decoded = jwt.verify(req.headers.authorization, 'yousuf');
    console.log(decoded.email)
    knex('users2')
    .where({email:decoded.email})
    .del(req.body).then((data)=>{
      console.log("data deleted succesfully");
    }).catch((err)=>{
      console.log(err);
  
    })
  
  })