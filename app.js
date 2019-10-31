const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
    res.render("assignment.html");
});

app.get("/About", function(req, res) {
    res.render("About.html");
});

app.get("/Contact", function(req, res) {
    res.render("Contact.html");
})



//server listener
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Running Express Server..."); 
});