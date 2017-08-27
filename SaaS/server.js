const express = require('express');

let app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, is it me you looking for');
// });

// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
  console.log(__dirname);
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css');
});

app.get('/about',(req, res) => {
  res.send(`<h1>Cuc<h1>`);
});

app.listen(6969, () => {
  console.log('server is up');
});
