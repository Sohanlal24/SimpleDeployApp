require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// demo/screenshots
const gibberishData = [
    { id: 1, name: "FlibberCloud", status: "Blorp" },
    { id: 2, name: "ZorboStorage", status: "Wibble" },
    { id: 3, name: "QuantumNimbus", status: "Plorp" },
    { id: 4, name: "MegaFog", status: "Snizzle" },
];

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/CreativeApp', (req, res) => {
    res.send('New Application with Express');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login at CreativeApp</h1>');
});

app.get('/CreativeApp2', (req, res) => {
    res.send('<h2>Creative App 2</h2>');
});

// Route
app.get('/cloud-info', (req, res) => {
    let html = '<h1>Cloud Data (Demo)</h1><ul>';
    gibberishData.forEach(item => {
        html += `<li>${item.name} - Status: ${item.status}</li>`;
    });
    html += '</ul>';
    res.send(html);
});

app.listen(port, () => {
    console.log(`CreativeApp listening on port ${port}`);
});

    console.log(`CreativeApp listening on port ${port}`);
});
