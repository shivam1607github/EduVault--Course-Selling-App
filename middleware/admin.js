const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD} = require("../config");      //here we importing the password for the admin from the config.js file to save the circular 

function adminMiddleware ( req,res , next) {
    const token = req.body.token ;
    const decoded = jwt.verify(token , JWT_ADMIN_PASSWORD );      //verifying the token
    if(decoded){
        req.user.Id = decoded.id;                 //here if it verifies the token with the given id ,then it will be next to continue
        next();
    }else{
        res.status(403).json({
            message : "you are not signed in "     //if not verify then it would give this message
        })
    }
}

module.exports = {
    adminMiddleware : adminMiddleware              //exporting the usermiddleware
}