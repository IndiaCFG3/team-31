const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./config/mongoose');
const port = 8000;

const Chart = require("chart.js"); 
// const CronJob = require('./config/cronJob');

app.use(express.static('views'));

app.use(express.urlencoded());
app.use(cookieParser());

// telling app to use routes
app.use('/', require('./routes/auth'));

app.set('view engine', 'ejs');   
app.set('views', './views');

app.listen(port , function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})


// const expressLayouts = require('express-ejs-layouts');

