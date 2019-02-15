const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
const fruits = require('./fruits');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/fruits', (req, res) => {
  res.json(fruits);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
