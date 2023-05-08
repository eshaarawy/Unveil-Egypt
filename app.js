const express = require("express");
const bodyParser = require("body-parser");
const {tourist, tour, rate} = require("./mongodb");

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

app.get("/register/tourguide", function(req, res){
	res.render("tour-guide");
})

app.get("/register/tourist", function(req, res){
	res.render("tourist");
})

app.get("/test", function(req, res){
	res.render("Registration-form");
})
app.get("/request-guide", function(req, res){
	res.render("explore");
})

app.post("/tourist-signup", async(req, res)=>{
	const data = {
		first: req.body.first,
		last: req.body.last,
		mail: req.body.mail,
		password: req.body.password,
		gender: req.body.gender,
		nationality: req.body.nationality,
		phone: req.body.phone
	}

	await tourist.insertMany([data])
	res.render("home");
})

app.post("/guide-signup", async(req, res)=>{
	const data = {
		first: req.body.first,
		last: req.body.last,
		mail: req.body.mail,
		password: req.body.password,
		gender: req.body.gender,
		phone: req.body.phone,
		residence: req.body.residence
	}

	await tour.insertMany([data])
	res.render("Registration-form");
})

app.post("/", function(req, res){
  city = req.body.city;
  res.redirect("/city");
})

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});
