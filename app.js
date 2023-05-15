// Importing Requried Libraries and installations
const express = require("express");
const bodyParser = require("body-parser");
const {tourist, tour} = require("./mongodb");
const {historical, souv, traditional, fancy, religious, park, nile, folk, fast} = require("./text");
let alert = require('alert');

const app = express();
var city;
var username='';
var signed = false;
app.set("view engine", 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// GET REQUESTS
app.get("/", function (req, res) { // home page
	res.render("home", {signed: signed, username: username});
});

app.get("/text", function(req, res){
	res.render("text", {
		title: "Historical Monuments",
		listItems: fancy
	})
})

app.get("/city", function(req, res){ //Search for city results page
	if (city == "Luxor & Aswan")
		city_path = "Luxor";
	else {
		city_path = city;
	}
	res.render("cities", {username: username, signed: signed, city: city, city_path: city_path});
})

app.get("/activities", function(req, res){ //Activities Page
	res.render("activities", {signed: signed, username: username});
})

app.get("/monuments", function(req, res){ //Monuments Page
	res.render("monuments", {signed: signed, username: username});
})

app.get("/historical-monuments", function(req, res){ //Historical Places page
	res.render("text", {
		title: "Historical Monuments",
		listItems: historical,
		username: username,
		signed: signed
	})
});

app.get("/religious-monuments", function(req, res){ //Religious Places page
	res.render("text", {
		title: "Religious Monuments",
		listItems: religious,
		username: username,
		signed: signed
	})
})

app.get("/nile", function(req, res){ //Nile River Cruising Places page
	res.render("text", {
		title: "Nile River Cruising",
		listItems: nile,
		username: username,
		signed: signed
	})
})

app.get("/sovenirs", function(req, res){ //Sovenirs Places page
	res.render("text", {
		title: "Sovenirs",
		listItems: souv,
		username: username,
		signed: signed
	})
});

app.get("/parks", function(req, res){ //Park places page
	res.render("text", {
		title: "Visiting Parks",
		listItems: park,
		username: username,
		signed: signed
	})
})

app.get("/folks", function(req, res){ //Attending Folks places page
	res.render("text", {
		title: "Attending Folks Shows",
		listItems: folk,
		username: username,
		signed: signed
	})
})

app.get("/fancy", function(req, res){ //Fancy restaurants places
	res.render("text", {
		title: "Fancy Food",
		listItems: fancy,
		username: username,
		signed: signed
	})
})

app.get("/fast", function(req, res){ //Fast restaurants places
	res.render("text", {
		title: "Fast Food",
		listItems: fast,
		username: username,
		signed: signed
	})
})

app.get("/traditional", function(req, res){ //Traditional restaurants places
	res.render("text", {
		title: "Traditional Food",
		listItems: traditional,
		username: username,
		signed: signed
	})
})

app.get("/restaurants", function(req, res){ //restaurants page
	res.render("rest-slider", {signed: signed, username: username});
})

app.get("/travel-tips", function(req, res){ //Travel Tips
	res.render("travel-tips", {signed: signed, username: username});
})

app.get("/login", function(req, res){ //Login Page
	res.render("login", {signed: signed, username: username});
})

app.get("/register", function(req, res){ //Register as tourist or as a tour guide?
	res.render("register", {signed: signed, username: username});
})

app.get("/register/tourguide", function(req, res){ //TourGuide Registraion
	res.render("tour-guide", {signed: signed, username: username});
})

app.get("/register/tourist", function(req, res){ //tourist Registration
	res.render("tourist", {signed: signed, username: username});
})

app.get("/request-guide", function(req, res){ //Search for tourguide
	if (signed)
		res.render("explore", {signed: signed, username: username});
	else {
		res.render("login", {signed: signed, username: username})
	}
})

app.get("/signout", function(req, res){ //Signout
	signed = false;
	username = '';
	res.redirect("/");
})
// POST REQUESTS

app.post("/tourist-signup", async(req, res)=>{ //Inserting tourist data into database
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
	res.render("home", {signed: signed, username: username});
})

app.post("/guide-signup", async(req, res)=>{ //Inserting tourguide data into database
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
	res.render("home", {signed: signed, username: username});
})

app.post("/login", async (req, res)=>{ //Loging search in database.
	try {
		const check= await tourist.findOne({mail: req.body.mail})

		if (check.password === req.body.password){
			username = check.first;
			signed = true;
			res.redirect("/");
		}
		else {
			alert("Wrong Password")
		}
	}
	catch {
		alert("Wrong Details");
	}
})

app.post("/explore", function(req, res){ //Searching for tourguide in database
	const salary = req.body.salary;
	const age = req.body.age;
	const city = req.body.City;
	const preferredGender = req.body.gender;
	const language = req.body.language;

	// Construct a MongoDB query based on the form data
	const query = {};
	if (city) query.residence = city;
	if (preferredGender) query.gender = preferredGender;

	tour.find(query).then((data) => {
				res.render("data", {results: data, username: username, signed: signed})
			})
});

app.post("/", function(req, res){ //Searching for city in home page
  city = req.body.city;
  res.redirect("/city");
});

app.listen(3000, function(){ //Listening on port 3000 locally
	console.log("Listening on Port 3000");
});
