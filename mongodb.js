const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("mongodb connected");
})

.catch(()=>{
  console.log("Failed to connect");
});

const touristSchema = new mongoose.Schema({
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

const guideSchema = new mongoose.Schema({
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

const guideSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true
  },
  rate:{
    type: Number,
    required: true
  }
});

const tourist = new mongoose.model("Tourist", touristSchema);
const tour = new mongoose.model("Tour", guideSchema);
const rate = new mongoose.model("Model", rateSchema);

module.exports = {
  tourist,
  tour,
  rate
};
