const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const SHEET_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1dZk7-7isdatJaaJTB2URx8IBl4KivN58Q-JppJaz8ak/values/Sheet7?alt=json&key=AIzaSyBWCxdpnH0OtdtznfKDR4_6RWT8SyUDDus';

let cache = null;
let lastFetch = 0;
const CACHE_DURATION = 5000; // 5 seconds

app.use(express.static('public'));

app.get('/sheet', async (req, res) => {
  const now = Date.now();
  if (!cache || now - lastFetch > CACHE_DURATION) {
    try {
      const response = await fetch(SHEET_URL);
      const data = await response.json();
      cache = data;
      lastFetch = now;
    } catch (err) {
      return res.status(500).json({ error: 'Failed to fetch sheet' });
    }
  }
  res.json(cache);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
