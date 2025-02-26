
const express = require( "express");
const mongoose = require( "mongoose");
const { userRouter } = require ("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const app = express();

app.use("/api/v1/user" ,userRouter);
app.use("/api/v1/admin" ,adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://shivampandeysbm1607:shivam1607@cluster0.e7iqg.mongodb.net/EduVault");
    app.listen(3000);
    console.log("listening to the port ");
}
main()

