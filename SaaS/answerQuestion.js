const express = require('express');
const fileController = require('./fileController.js');
const filename = 'question.txt';

let Router = express();
let listQuestion = fileController.getElements();
Router.get('/', (req, res) => {
  console.log(listQuestion.length);
  data = listQuestion[Math.floor(Math.random() * listQuestion.length)];
  console.log(data.id);
  question = JSON.stringify(data.question);
  res.render('home', {
    question: question,
    link: `/api/question/${data.id}`
  });
});
Router.post('/api/question/:id', (req, res) => {
  listQuestion= fileController.getElements();
  if(req.body.choice === 'yes') {
    listQuestion[req.params.id].yes += 1;
  } else{
    listQuestion[req.params.id].no += 1;
  }
  let tmp="";
  for(i = 0; i < listQuestion.length; i++) {
    if(i == 0) {
      tmp += JSON.stringify(listQuestion[0]);
    }
    else{
      tmp += ",\n" + JSON.stringify(listQuestion[i]);
    }
  }
  fileController.saveFile('question.txt', tmp);
  res.redirect(`/`);
});

module.exports = Router;
