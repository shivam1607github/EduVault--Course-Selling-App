const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shivampandeysbm1607:shivam1607@cluster0.e7iqg.mongodb.net/EduVault")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema  = new Schema({
    email : { type :String , unique : true },
    password : String,
    firstName : String ,
    lastName : String 

});

const adminSchema  = new Schema({
    email : { type :String , unique : true },
    password : String,
    firstName : String ,
    lastName : String
});

const purchaseSchema  = new Schema({
    email : { type :String , unique : true },
    password : String,
    firstName : String ,
    lastName : String,
    creatorId : ObjectId,
    imageUrl : String,
    
});

const courseSchema  = new Schema({
    userId: ObjectId,
    courseId: ObjectId

});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);
const courseModel = mongoose.model("course",courseSchema);

module.exports ={
    userModel,
    adminModel,
    purchaseModel,
    courseModel

}
