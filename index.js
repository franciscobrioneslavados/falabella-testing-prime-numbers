const express = require('express');
const { primeNumbersRequest } = require('./src/controllers/random-number.controller');
const app = express();
const port = 5004;

app.get('/', (req, res) => {
    res.send('Express ON');
})
app.get('/prime-numbers/:number', primeNumbersRequest)
app.listen(port, () => console.info(`Server on PORT: ${port}`));
module.exports = app;