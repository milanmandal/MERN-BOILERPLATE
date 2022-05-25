const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser());

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

app.get('/',function(req,res){
    res.send('Server is running');
})

const User = require('./routes/userRoute');
app.use('/user',User);

const PORT = process.env.PORT;
app.listen(PORT,function(){
    console.log('Server is running on port '+PORT);
})

