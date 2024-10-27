const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
