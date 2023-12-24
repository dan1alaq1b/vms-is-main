const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const ejs = require('ejs');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Dummy user data (replace with a proper authentication system)
const users = [
   { username: 'user1', password: 'password1' },
   { username: 'user2', password: 'password2' },
 ];
 
// Routes
app.get('/', (req, res) => {
   res.render('login');
 });
 
 app.post('/login', (req, res) => {
   const { username, password } = req.body;
 
   // Dummy authentication (replace with a proper authentication system)
   const user = users.find((user) => user.username === username && user.password === password);
 
   if (user) {
     res.send(`Welcome, ${username}!`);
   } else {
     res.send('Invalid username or password.');
   }
 });
 

//app.use(express.json())
/*
app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
*/

// Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
 });