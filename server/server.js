const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {connectDB} = require('./config/db');
const {auth} = require('./middleware/auth.js');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser());

connectDB();

app.get('/',function(req,res){
    res.send('Server is running');
})

//MIDDLEWARE
const User = require('./routes/userRoute');
const Basic = require('./routes/basicRoute');

//SERVER ROUTES
app.use('/user',User);
app.use('/goal',Basic);

//Server Listening
const PORT = process.env.PORT;
app.listen(PORT,function(){
    console.log('Server is running on port '+PORT);
})

