const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

app.use('/data/', async (req, res) => {
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        },
      });

      if (response) {
        const data = response.data;
        res.send(data);
      }
    } catch (ex) {
      res.send(ex);
    }

  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})