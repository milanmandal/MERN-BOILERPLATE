const mongoose = require('mongoose');

const connectDB = ()=>{
    const MongoURI = process.env.ATLAS_URI;

    mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to database")
    })
    .catch(err => {
        console.log("Not Connected to Database")
        console.log(err);
    });

    mongoose.connection.on('open', () => {
        console.log("Connection established to database")
    })
}

module.exports = {connectDB};
