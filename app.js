const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

//Passport COnfig
require('./config/passport')(passport);



//Load Routes
const auth = require('./routes/auth');

//load keys
const keys = require('./config/keys');


//Mongoose connect
mongoose.connect()


const app = express();

app.get('/', (req, res) => {
    res.send('It Works!');
});

app.use('/auth', auth);
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
