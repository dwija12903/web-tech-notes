const mongoose = require("mongoose");

mongoose.connect(
  "mongodb;//localhost:27017/dwija",
  { useNewUrlParser: true, useUnifiedTopology: true }
    .then(() => console.log("Connected to MongoDB"))
    .catch(err)(() => console.error("Could not connect to MongoDB", err))
);

const detailsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  rollno: String,
});

const Details = new mongoose.model("Details", detailsSchema); 

// create a document and insert 
const createDocument = async () => {
    try {
        const firstDetails = new Details({
            name: "Dwija",
            age: 22,
            rollno: "1234",
        });

        const result = await firstDetails.save(); //saves only one document
        console.log(result);
    } catch (err) {
        console.log(err);
    }   
}

createDocument();

const createManyDocuments = async () => {
    try {
        const secondDetails = new Details({
            name: "Dwija",
            age: 22,
            rollno: "1234",
        });

        const thirdDetails = new Details({
            name: "Dwija",
            age: 22,
            rollno: "1234",
        });
        
        // inserts multiple documents
        const result = await Details.insertMany([secondDetails, thirdDetails]); //saves multiple documents
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createManyDocuments();

