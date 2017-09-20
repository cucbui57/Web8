// npm install --save mongoose
const express = require('express');
const fileController = require('./fileController');
const filename = 'test.txt';
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const questionRouter = require('./questionRouter');
const answerQuestion = require('./answerQuestion');
const statisticRouter = require('./statisticRouter');
const apiRouter = require('./apiRouter');
const mongoose = require('mongoose');
const config = require('./config.json');

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use('/', answerQuestion);
app.use('/ask', questionRouter);
app.use('/api', apiRouter);
app.use('/question', questionRouter);
app.use('/statistic', statisticRouter);

mongoose.connect(config.connectionString, (err) =>{
  if(err) {
    console.log(err);
  }else{
    console.log("success");
  }
});

app.listen(config.port, () => {
  console.log('Server is up');
});
