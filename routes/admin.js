const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../routes/db")

adminRouter.post("/purchase" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})

adminRouter.get ("/preview" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})

adminRouter.post("/course" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})

adminRouter.put("/course" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})

adminRouter.get("/course/bulk" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})

module.exports ={
    adminRouter :adminRouter
}