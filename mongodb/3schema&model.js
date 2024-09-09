const mongoose = require('mongoose');

//connection
mongoose.connect(
    'mongodb;//localhost:27017/dwija',
    { useNewUrlParser: true, useUnifiedTopology: true }
    .then(()=> console.log('Connected to MongoDB'))
    .catch(err)(()=> console.error('Could not connect to MongoDB', err))
)

// Schema
// to define the shape of documents in a collection
const detailsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    rollno: String
})

// Model
// it is a wrapper on the schema, a class with which we construct documents
const Details = new mongoose.model('Details', detailsSchema); //name of collection and its schema
