const express=require("express");
const router=express.Router();
const userAuthenticate=require("../model/userAuthenticate");
router.route('/user').get(userAuthenticate.getUser);
module.exports= router;