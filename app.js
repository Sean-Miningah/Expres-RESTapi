const express = require('express');

const app = express();

app.listen(3000, () => console.log("Server is running ...."));

// Routes
app.get('/', (req, res) => {
	res.send("Hello World");
});

app.get('/posts', (req, res) => {
	res.send('We are on Posts');
});
