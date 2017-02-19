const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, function() {
  console.log('Server is listening on port ', port);
});
