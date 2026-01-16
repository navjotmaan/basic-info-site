const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'content', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'content', 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'content', 'contact-me.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'content', '404.html'));
});

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('listening to port 8080:');
});