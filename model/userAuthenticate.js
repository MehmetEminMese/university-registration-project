const express=require('express');
const router = express.Router();
const pageRoute = require("../route/pageRoute");
const db = require("../data/db");
const getUser=async function(req,res,next){
    try{
        const[users,]=await db.execute("select username from user_authenticate");
        res.render("user_deneme",{
            username:users[0]
        })
        console.log(username);
    }catch(err){
        console.log(err);
    }
    next();
}
module.exports={
    getUser
}