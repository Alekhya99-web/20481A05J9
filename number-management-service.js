const express = require('express');
const axios = require('axios');
const { isValidURL } = require('url');

const app = express();
const PORT = 8008;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/numbers', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  // Check if the URL parameter is an array
  const urls = Array.isArray(url) ? url : [url];

  const responseData = [];

  try {
    for (const url of urls) {
      if (isValidURL(url)) {
        const response = await axios.get(url);
        responseData.push(response.data);
      }
    }

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Number Management Service running on port ${PORT}`);
});
