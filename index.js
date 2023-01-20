const express=require("express");
const pageRoutes = require("./route/pageRoute");
const app=express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/',pageRoutes);
app.listen(3000, () => {
    console.log("listening on port 3000");
});