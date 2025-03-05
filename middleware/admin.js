/**
 const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD} = require("../config");      //here we importing the password for the admin from the config.js file to save the circular 

function adminMiddleware ( req,res , next) {
    const token = req.header.token ;
    const decoded = jwt.verify(token , JWT_ADMIN_PASSWORD );      //verifying the token
    if(decoded){
        req.adminId = decoded.id;                 //here if it verifies the token with the given id ,then it will be next to continue
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
 */


// this below code is pulled by the chatgpt & above hkirat code is having some problem to run 
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);
        req.adminId = decoded.id; // Attach decoded admin ID to the request
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}

module.exports = { adminMiddleware };
