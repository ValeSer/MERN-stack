# MERN-SHOPPING-LIST

Getting to know how MERN works:  MongoDB, Express, React, Node combined

1) Start from backend by building Express API using mongoose to interact with MongoDB

  # SET UP ENVIRONMENT
  - Create a repository on Github
  - Clone repository locally
  - Run npm init
  - Install the necessary libraries:
    - npm i express body-parser mongoose concurrently
    - npm i -D nodemon

  # SET UP DATABASE
  - Sign up to Mongo DB Atlas https://cloud.mongodb.com/
  - Create a database following instructions
  - Connect with the Mongo Shell with:
    - mongodb+srv://<name>:${password}@username-mzcl3.mongodb.net/    <database_name>?retryWrites=true&w=majority
	    // Replace <password> with your password
	    // When entering your password, make sure that any special characters	are URL encoded
  - Create a folder called config and inside a file called keys.js
    In keys.js type:
	   module.exports = {
    	  mongoURI: 'mongodb+srv://<name>:${password}@username-mzcl3.mongodb.net/
        <database_name>?retryWrites=true&w=majority'
	   }
  - in server.js:
	  // DB Config
	   const db = require('./config/keys').mongoURI;

	 //Connect to Mongo
	  mongoose
	     .connect(db)
	     .then(() => console.log('MongoDB Connected...'))
	     .catch(err => console.log(err));

	  const port = process.env.PORT || 5000;

	  app.listen(port, () => console.log(`Server started on port ${port}`));
