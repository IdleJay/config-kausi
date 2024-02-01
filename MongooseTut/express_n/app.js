const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

app.listen(4000, () => {
    console.log("listening to port")
});