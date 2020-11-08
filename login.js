
var knex = require('./connection')
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router()


router.post("/post/login", (req, res) => {
  let a = false;
  knex.select("*").from('users2').then((data)=>{

    for (i of data){
      if(i.email == req.body.email && i.password == req.body.password){
        a = true;

        let token = jwt.sign({ email: i.email }, 'yousuf');
        console.log(token);

      }
    }
    if (a){
      console.log("login sucess");
    }else{
      console.log("your email or your password is wrong");
    }
  }).catch((err)=>{
    console.log(err);
  })
})


router.put("/update",(req,res)=>{
  var decoded = jwt.verify(req.headers.authorization, 'yousuf');
      console.log(decoded.email)
      knex('users2')
  .where({ email:decoded.email})
  .update(req.body).then((data)=>{
    console.log("update succesfully");
  }).catch((err)=>{
    console.log(err);
  })
})


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


module.exports = router;
