require('dotenv').config();

const mongoString = process.env.DATABASE_URL
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000

// Middlewares
app.use(express.json());


// Database Connection
await mongoose.connect(mongoString, {useNewUrlParser: true}, () => 
  console.log('connected to DB!')
);

// App is running, port is open
app.listen(PORT, () => console.log("Server is running ...."));

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
// Routes
app.get('/', (req, res) => {
	res.send("Hello World");
});

