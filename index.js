const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Dummy user data (replace with a proper authentication system)
const users = [
  { username: 'danial', password: '1234', role: 'admin' },
  { username: 'nave', password: '1234', role: 'admin' },
  { username: 'visitor1', password: 'visitorpass1', role: 'visitor' },
  // ...other users
];

// Swagger definition
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Visitor Management API',
      version: '1.0.0',
      description: 'API for managing users and visitors in a visitor management system',
    },
    servers: [{ url: `http://localhost:${port}` }],
  },
  apis: ['index.js'], // Include the file(s) containing API definitions
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate a user based on username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully authenticated
 *       401:
 *         description: Invalid credentials
 */
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy authentication (replace with a proper authentication system)
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send('Invalid username or password.');
  }
});

// TODO: Implement other endpoints for user and visitor management as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
