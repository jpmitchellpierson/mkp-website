const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.load();

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.use(express.static(__dirname));