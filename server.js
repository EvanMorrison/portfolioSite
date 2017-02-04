const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, '/dist')));

app.listen(port, function() {
  console.log('Server is listening on port ', port);
});
