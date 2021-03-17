const express = require('express');
const {randomNumber} = require('./src/controllers/random-number.controller');
const app = express();
const port = 5003;


app.get('/random-number/:number', randomNumber)
app.listen(port, () => console.info(`Server on PORT: ${port}`));