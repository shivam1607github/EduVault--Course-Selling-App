

const { Router} = require("express");
const courseRouter = Router();
    courseRouter.post("/purchase" , function (req,res){
        res.json({
        message : "signup done!!"
        })
    })
    
    courseRouter.get ("/preview" , function (req,res){
        res.json({
        message : "signup done!!"
        })
    })


module.exports = {
    courseRouter : courseRouter
}