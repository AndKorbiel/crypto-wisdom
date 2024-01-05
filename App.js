const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;
require('dotenv').config();

const data = require('./server/data.route.ts');
app.use('/data/', data);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
