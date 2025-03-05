const JWT_USER_PASSWORD=process.env.JWT_USER_PASSWORD      // for the user.js i am giving a different password password as so on--
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD           //password is should be diffrent from the others routes for the security purpose password
                                                // is for the admin route
module.exports ={
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}


//Her, i replace the real password from the enviorment variable of dotenv with the plain text password to prevent it
// i used process.env.JWT_USER_PASSWORD     ---This is the enviornment variable
// i used process.env.JWT_ADMIN_PASSWORD    