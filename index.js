
const express = require( "express");
const mongoose = require( "mongoose");
const { userRouter } = require ("./routes/user.js");     //express - routers 
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const app = express();
app.use(express.json());

app.use("/api/v1/user" ,userRouter);
app.use("/api/v1/admin" ,adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){    // this is the function we called so that backend should connect to the database first and then only its works 
    await mongoose.connect("mongodb+srv://shivampandeysbm1607:shivam1607@cluster0.e7iqg.mongodb.net/EduVault");
    app.listen(3000);
    console.log("listening to the port ");
}
main()

