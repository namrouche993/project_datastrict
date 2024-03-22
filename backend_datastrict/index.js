const express = require('express');
const cors = require('cors'); // Import the cors package


const app = express();
const port = 5000;

app.use(cors({
  //origin: 'http://localhost',
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Fallback to localhost:3000 if the environment variable is not set
  credentials: true
}));  // Use the cors middleware!!!!!!




   app.get('/', (req, res) => {
    res.send('Hello from Express!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  