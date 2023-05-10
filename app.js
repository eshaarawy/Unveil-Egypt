const express = require("express");
const bodyParser = require("body-parser");
const {tourist, tour, rate} = require("./mongodb");
const {historical, souv, traditional, fancy, religious, park, nile, folk, fast} = require("./text");

const app = express();
var city;
app.set("view engine", 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// GET REQUESTS

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/text", function(req, res){
	res.render("text", {
		title: "Historical Monuments",
		listItems: fancy
	})
})

app.get("/city", function(req, res){
	if (city == "Luxor & Aswan")
		city_path = "Luxor";
	else {
		city_path = city;
	}
	res.render("cities", {city: city, city_path: city_path});
})

app.get("/activities", function(req, res){
	res.render("activities");
})

app.get("/monuments", function(req, res){
	res.render("monuments");
})

app.get("/historical-monuments", function(req, res){
	res.render("text", {
		title: "Historical Monuments",
		listItems: historical
	})
})

app.get("/religious-monuments", function(req, res){
	res.render("text", {
		title: "Religious Monuments",
		listItems: religious
	})
})

app.get("/nile", function(req, res){
	res.render("text", {
		title: "Nile River Cruising",
		listItems: nile
	})
})

app.get("/sovenirs", function(req, res){
	res.render("text", {
		title: "Sovenirs",
		listItems: souv
	})
})

app.get("/parks", function(req, res){
	res.render("text", {
		title: "Visiting Parks",
		listItems: park
	})
})

app.get("/folks", function(req, res){
	res.render("text", {
		title: "Attending Folks Shows",
		listItems: folk
	})
})

app.get("/fancy", function(req, res){
	res.render("text", {
		title: "Fancy Food",
		listItems: fancy
	})
})

app.get("/fast", function(req, res){
	res.render("text", {
		title: "Fast Food",
		listItems: fast
	})
})
app.get("/restaurants", function(req, res){
	res.render("rest-slider")
})
app.get("/traditional", function(req, res){
	res.render("text", {
		title: "Traditional Food",
		listItems: traditional
	})
})

app.get("/city/restaurants", function(req, res){
	res.render("rest-slider");
})

app.get("/history", function(req, res){
	res.render("His-text");
})

app.get("/fancy", function(req, res){
	res.render("fancy");
})

app.get("/fast", function(req, res){
	res.render("fast");
});

app.get("/traditional", function(req, res){
	res.render("rest-text");
});

app.get("/folk", function(req, res){
	res.render("folk");
});

app.get("/nile", function(req, res){
	res.render("Nile-text");
});

app.get("/souvenirs", function(req, res){
	res.render("souv");
});

app.get("/park", function(req, res){
	res.render("park");
});
app.get("/religious", function(req, res){
	res.render("Rel-text");
});

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

app.get("/request-guide", function(req, res){
	res.render("explore");
})

// POST REQUESTS

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
