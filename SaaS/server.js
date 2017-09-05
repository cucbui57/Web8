const express = require('express');
const fileController = require('./fileController');
const filename = 'test.txt';
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const questionRouter = require('./questionRouter');

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
  // JSON

  // let jsonObject = {
  //   proa: 'propa',
  //   prob: 'propb'
  // }
  //
  // let jsonString = JSON.stringify(jsonObject);
  // jsonObject = JSON.parse(jsonString);
  // res.send(jsonObject);
  // res.sendFile(__dirname + '/public/homework.html');
  res.render('home');
});

app.use('/question', questionRouter);

app.get('/about', (req, res) => {
  let questionList = [{ id : 1, question : 'test'}, {id : 2, question : 'test1'}]
  res.render('about',{ questionList });
});

app.get('/readFile', (req, res) => {
  fileController.readFile(filename, (data) => {
    res.send(`<html>
      <head>
      <style>
        .menu{
          background-color: #D5B0AC;
          color: #402E2A;
          font-weight: bold;
          text-align: center;
        }

        span:hover{
          background: #9CD08F;
          color: #FFFFFF;
          cursor: pointer;
        }

        .menu_horizontal{
          /*height: 37px;*/
          position: fixed;
          width: 100%;
        }

        .menu_horizontal span{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 30px;
        }

        a{
          color: black;
          text-decoration: none;
        }

        p{
          padding-top: 5%;
          text-align: center;
          font-weight: bold;
        }
      </style>

      </head>
      <body>
        <nav class="menu menu_horizontal" id="">
          <span><a href=""> Trang chủ</a></span>
          <span><a href="about"> About me</a></span>
          <span><a href="readFile"> Read File</a></span>
        </nav>
        <p>${data}</p>
      </body>
    </html>
    `)
  });
});


app.listen(6969, () => {
  console.log('Server is up');
});
