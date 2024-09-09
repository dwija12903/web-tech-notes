const express = require('express');
const timeout = require('connect-timeout');

const app = express();
app.use('/api', timeout(5000));

app.get('/api', (req, res, next) => {
    res.send('Hello, Dwija this is the /api route!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
