const express = require('express');
const logger = require('morgan');

const PORT = process.env.PORT || 8080;
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

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});
