// Logical Operators
// Logical operators are used to determine the relationship between elements in a query. They are used to define the logic between the query expressions.

// 1. $and
// 2. $or
// 3. $not
// 4. $nor

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dwija', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const moviesSchema = new mongoose.Schema({
    name: String,
    actor: String,
    actress: String,
    year: Number,
});

const Movies = new mongoose.model('Movies', moviesSchema);

const getDocuments = async () => {
    try {
        // const result = await Movies.find({ $and: [{ actor: 'Amitabh Bachchan' }, { year: 2000 }] }); //gets all documents with actor Amitabh Bachchan and year 2000
        // const result = await Movies.find({ $or: [{ actor: 'Amitabh Bachchan' }, { year: 2000 }] }); //gets all documents with actor Amitabh Bachchan or year 2000
        // const result = await Movies.find({ $not: { actor: 'Amitabh Bachchan' } }); //gets all documents with actor not Amitabh Bachchan
        const result = await Movies.find({ $nor: [{ actor: 'Amitabh Bachchan' }, { year: 2000 }] }); //gets all documents with actor not Amitabh Bachchan and year not 2000
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}