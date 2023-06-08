const mongoose = require('mongoose');

//Slider model
const UsersModel = mongoose.model("Users", new mongoose.Schema({
    username: String,
    email:String,
    password:String,
    isAdmin:Boolean,
    basketItems:{
        type:Array,
        default:[]
    }
}));

module.exports = UsersModel
