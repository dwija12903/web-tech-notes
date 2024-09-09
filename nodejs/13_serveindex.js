const express = require('express');
const serveIndex = require('serve-index');

const app = express();

const directoryPath = 'E:/VS studio/Nodejs/AWT Lab_21BCP333/24.1.24';

app.use(express.static(directoryPath));
app.use(serveIndex(directoryPath, { icons: true }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
