const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://localhost:27017/dwija", //connects to the database named dwija
  { useNewUrlParser: true, useUnifiedTopology: true }
  .then(() => console.log("Connected to MongoDB")) //when connected successfully 
  .catch((err) => console.error("Could not connect to MongoDB", err)) // when error occurs
);
