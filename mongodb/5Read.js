const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/dwija",
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

// read a document
const readDocument = async () => {
    try {
        const result = await Details.find();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

readDocument();

// read a document with a specific condition
const readDocumentWithCondition = async () => {
    try {
        const result = await Details.find({ name: "Dwija" });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

readDocumentWithCondition();

