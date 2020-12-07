const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/dsys-angular')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + 'dist/dsys-angular/index.html'))
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
