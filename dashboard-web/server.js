const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const SETTINGS_PATH = path.join(__dirname, 'public', 'dashboard-settings.json');

// Serve settings
app.get('/dashboard-settings.json', (req, res) => {
  fs.readFile(SETTINGS_PATH, 'utf8', (err, data) => {
    if (err) return res.status(404).json({});
    res.type('json').send(data);
  });
});

// Save settings
app.post('/dashboard-settings.json', (req, res) => {
  fs.writeFile(SETTINGS_PATH, JSON.stringify(req.body, null, 2), err => {
    if (err) return res.status(500).json({ error: 'Failed to save' });
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
