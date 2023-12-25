/*
var express = require('express');
var router = express.Router();

/* GET home page. *
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// ...other middleware and route definitions

// Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Visitor Management System API',
      version: '1.0.0',
      description: 'API documentation for Visitor Management System',
    },
  },
  // Path to files containing OpenAPI specifications (e.g., your routes)
  apis: ['./admin.js', './visitor.js', './generatepass.js', './checkpass.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
