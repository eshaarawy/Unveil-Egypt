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
	if (city == "Luxor & Aswan")
		city_path = "Luxor";
	else {
		city_path = city;
	}
	res.render("cities", {city: city, city_path: city_path});

})

app.get("/travel-tips", function(req, res){
	res.render("travel-tips");
})

app.get("/login", function(req, res){
	res.render("login");
})

app.get("/register", function(req, res){
	res.render("register");
})

app.post("/", function(req, res){
  city = req.body.city;
  res.redirect("/city");
})
app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
