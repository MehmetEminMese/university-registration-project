const pageRoutes = require("../controller/pageController.js");
const express=require("express");
const router=express.Router();
router.route('/').get(pageRoutes.getIndexPage);
module.exports=router;