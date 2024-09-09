const express = require('express');
const timeout = require('connect-timeout');

const app = express();
const PORT = 3000;

app.use(timeout('30s'));
app.use(express.static('file'));
app.use((req, res, next) => !req.timedout ? next() : res.status(408).send('Request Timeout'));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

