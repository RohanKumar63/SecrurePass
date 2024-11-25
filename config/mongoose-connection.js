// const mongoose = require('mongoose');
// const dbgr = require("debug")("development:mongoose");

// const config = require("config");

// mongoose
// .connect(`${config.get("MONGODB_URI")}` , {useNewUrlParser: true, useUnifiedTopology: true  })
// .then(function(){
//     console.log("connected");
// })
// .catch(function(err){
//     console.log(err);
// })

// module.exports = mongoose.connection;


//........................................updated code................................................

const mongoose = require('mongoose');
const debug = require("debug")("development:mongoose");
const config = require("config");

// Fetch the MongoDB URI from the configuration
const MONGODB_URI = config.get("MONGODB_URI");

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

module.exports = mongoose.connection;
