const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;
require('dotenv').config();

app.use('/data/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CRYPTO_API_KEY,
        },
      },
    );

    if (response) {
      const data = response.data;
      res.send(data);
    }
  } catch (ex) {
    res.send(ex);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
