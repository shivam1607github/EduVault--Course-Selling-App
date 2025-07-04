require('dotenv').config()         //dotenv code
console.log("MONGO_URL:", process.env.MONGO_URL);  // Debugging output
const express = require( "express");
const cors = require('cors');      // <--- ADD THIS LINE
const mongoose = require( "mongoose");
const { userRouter } = require ("./routes/user.js");     //express - routers 
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const app = express();
app.use(cors());                   // <--- AND THIS LINE
app.use(express.json());

app.use("/api/v1/user" ,userRouter);
app.use("/api/v1/admin" ,adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){    // this is the function we called so that backend should connect to the database first and then only its works 
    await mongoose.connect(process.env.MONGO_URL);         //here,( process.env.MONGO_URL )  is the enviornment variable  to import the mongo connection url form the .env file
    app.listen(3000);
    console.log("listening to the port ");
}
main()

