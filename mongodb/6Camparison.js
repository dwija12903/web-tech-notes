// Camparison operator

// 1. $eq
// 2. $gt
// 3. $gte
// 4. $lt
// 5. $lte
// 6. $ne
// 7. $in
// 8. $nin

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
        // const result = await Movies.find({ year: 2000 }); //gets all documents with year 2000
        // const result = await Movies.find({ year: { $gt: 2000 } }); //gets all documents with year greater than 2000
        // const result = await Movies.find({ year: { $gte: 2000 } }); //gets all documents with year greater than or equal to 2000
        // const result = await Movies.find({ year: { $lt: 2000 } }); //gets all documents with year less than 2000
        // const result = await Movies.find({ year: { $lte: 2000 } }); //gets all documents with year less than or equal to 2000
        // const result = await Movies.find({ year: { $ne: 2000 } }); //gets all documents with year not equal to 2000
        // const result = await Movies.find({ year: { $in: [2000, 2001] } }); //gets all documents with year in 2000 and 2001
        const result = await Movies.find({ year: { $nin: [2000, 2001] } }); //gets all documents with year not in 2000 and 2001
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getDocuments();