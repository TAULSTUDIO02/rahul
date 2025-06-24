const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const SETTINGS_FILE = './scoreboard-settings.json';

app.use(cors());
app.use(express.json());

// Get settings
app.get('/settings', (req, res) => {
    if (fs.existsSync(SETTINGS_FILE)) {
        res.json(JSON.parse(fs.readFileSync(SETTINGS_FILE)));
    } else {
        res.json({});
    }
});

// Save settings
app.post('/settings', (req, res) => {
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(req.body, null, 2));
    res.json({ status: 'ok' });
});

app.listen(3001, () => console.log('Settings server running on port 3001'));
