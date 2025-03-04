const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../routes/db")
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
//bcrypt - hasing password , zod - to validate the

adminRouter.post("/signup" , async function (req,res){
    const {email , password , firstName , lastName } = req.body;   //todo :- adding a zod validation
    //todo :- hash the password so the plaintext passwrd is not stored in database
   // try{
        await adminModel.create({
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

adminRouter.post ("/signin" , async function (req,res){
    const { email , password} = req.body;

    const admin = await  adminModel.findOne({    //let the user signin    //findOne - it is used to call only registered user not all users
        email : email,
        password : password
    });
    if(admin){
        const token = jwt.sign({         //return the user token
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token : token
        })
    }else{
        res.json({
            message : "incorrect credentials"     //if the users - credential is wrong u wont be signed in
            })
    }
})

adminRouter.post("/course" , adminMiddleware , async function (req,res){
    const adminId = req.adminId;
    
    const {title , description , imageUrl , price  } = req.body;

    const course = await courseModel.Create({
    title : title,
    description : description,
    imageUrl : imageUrl,
    price : price,
    creatorId :adminId,


    })
    res.json({
    message : "course created!",
    courseId : course._Id
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