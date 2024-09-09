const express = require('express');
const compression = require('compression');

const app = express();
const PORT = 3000;

app.use(compression());
app.use(express.static('files'));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

