const express = require('express');  
const cors = require('cors'); // Import CORS middleware  
require('dotenv').config(); // Load environment variables  
const locationsRouter = require('./routes/locationsRouter'); // Make sure the path is correct  
const db =  require('./Models/db');  

const app = express();  
const port = process.env.PORT || 4000;  

// Middleware to parse JSON requests  
app.use(express.json());  
app.use(cors()); // Enable CORS (optional)  

// Basic route  
app.get('/', (req, res) => {  
  res.send('Hello World!');  
});  

// Use the locations router  
app.use('/user', locationsRouter);  

// Start the server  
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`);  
});