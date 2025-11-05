const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// route
app.get('/', (req, res) => {
  res.send('API is running.....');
})


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
})