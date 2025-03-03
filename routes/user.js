
const {Router} = require("express");
const { userModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "shivam1607"     // for the user.js i am giving a different password password as so on--

const userRouter = Router();

userRouter.post("/signup" , async function (req,res){
    const {email , password , firstName , lastName } = req.body;   //todo :- adding a zod validation
    //todo :- hash the password so the plaintext passwrd is not stored in database
   // try{
        await userModel.create({
            email : email,
            password : password ,
            firstName : firstName,
            lastName : lastName
        })
   // } catch(e){
   //     console.log("the credentials are invalids");
   // }
  
    
    res.json({
    message : "signup done!!"
    })
})

userRouter.post("/signin" , async function (req,res){
    const { email , password} = req.body;

    const user =await  userModel.findOne({    //let the user signin    //findOne - it is used to call only registered user not all users
        email : email,
        password : password
    });
    if(user){
        const token = jwt.sign({         //return the user token
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token : token
        })
    }else{
        res.json({
            message : "incorrect credentials"     //if the users - credential is wrong u wont be signed in
            })
    }
    
})

userRouter.get("/purchases" , function (req,res){
    res.json({
    message : "signup done!!"
    })
})


module.exports ={
    userRouter : userRouter
}