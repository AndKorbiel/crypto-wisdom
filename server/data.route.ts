const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.get('/get', async (req, res) => {
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
      res.status(200).send(data);
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;
