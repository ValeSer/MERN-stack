// our backend framework
const express = require('express');
// our ORM (Object-Relational Mapper) to interact with the database
const mongoose = require('mongoose');
// it will allow us to take requests and get data from the body
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

//Use Routes
//anything that goes to api/items should refer to the items variable
app.use('/api/items', items);

//initialise express in a variable
const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo (we can also use a local one)
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));
