const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");      //here we importing the password for the user from the config.js file to save the 

function userMiddleware ( req,res , next) {
    const token = req.body.token ;
    const decoded = jwt.verify(token , JWT_USER_PASSWORD );      //verifying the token 
    if(decoded){
        req.userId = decoded.id;                 //here if it verifies the token with the given id ,then it will be next to continue 
        next();
    }else{
        res.status(403).json({
            message : "you are not signed in "     //if not verify then it would give this message 
        })
    }
}

module.exports = {
    userMiddleware : userMiddleware              //exporting the usermiddleware 
}