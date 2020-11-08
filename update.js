const express=require("express");
const router = express.Router()






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
  