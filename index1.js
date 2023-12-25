const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/admin', require('./admin'));
app.use('/visitor', require('./visitor'));
app.use('/admin', require('./generatepass'));
app.use('/visitor', require('./checkpass'));

app.get('/', (req, res) => {
  res.send('Welcome to the Visitor Management System!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
