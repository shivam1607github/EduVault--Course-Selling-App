

const {Router} = require("express");

const userRouter = Router();
userRouter.post("/signup" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})

userRouter.post("/signin" , function (req,res){
    res.json({
    message : "signin done!!"
    })
})

userRouter.get("/purchases" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})


module.exports ={
    userRouter : userRouter
}