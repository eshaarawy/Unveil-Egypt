const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var city;
app.set("view engine", 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/city", function(req, res){
  res.render("cities", {city: city});
})


app.post("/", function(req, res){
  city = req.body.city;
  res.redirect("/city");
})
app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
