const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/users", { //Connecting with local database
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("mongodb connected");
})

.catch(()=>{
  console.log("Failed to connect");
});

const touristSchema = new mongoose.Schema({ //Creating new schema for tourist
  first: {
    type: String,
    required: true
  },
  last:{
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const guideSchema = new mongoose.Schema({ //Creating new schema for tourguide
  first: {
    type: String,
    required: true
  },
  last:{
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  residence: {
    type: String,
    required: true
  }
});

//Creating collection models
const tourist = new mongoose.model("Tourist", touristSchema);
const tour = new mongoose.model("Tour", guideSchema);

//Exporting tot app.js file
module.exports = {
  tourist,
  tour
};
