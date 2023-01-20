const express=require("express");
const pageRoutes = require("./route/pageRoute");
const userRoutes = require("./route/userRoute");
const pageController = require("./controller/pageController");
const dotenv=require("dotenv");
const app=express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
dotenv.config();
app.use('/',pageRoutes);
app.use('/users',userRoutes);
app.listen(3000, () => {
    console.log("listening on port 3000");
});
