const express = require('express');
const fileController = require('./fileController');
const filename = 'test.txt';
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const questionRouter = require('./questionRouter');
const answerQuestion = require('./answerQuestion');
const statisticRouter = require('./statisticRouter');
const apiRouter = require('./apiRouter');
let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// app.use(express.static(__dirname + '/public'));
app.use('/', answerQuestion);
app.use('/ask', questionRouter);
app.use('/api', apiRouter);
app.use('/question', questionRouter);
app.use('/statistic', statisticRouter);

app.get('/about', (req, res) => {
  let questionList = [{ id : 1, question : 'test'}, {id : 2, question : 'test1'}]
  res.render('about',{ questionList });
});

app.listen(6969, () => {
  console.log('Server is up');
});
