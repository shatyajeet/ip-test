const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('combined'));

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  next();
});

app.get('/', (req, res) => {
  let {headers} = req;
  res.json({
    headers
  });
});

app.listen(3000);