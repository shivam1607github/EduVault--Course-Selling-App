
const express = require( "express");
const { userRouter } = require ("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const app = express();

app.use("/api/v1/user" ,userRouter);
app.use("/api/v1/admin" ,adminRouter);
app.use("/api/v1/course", courseRouter);



app.listen(3000);


