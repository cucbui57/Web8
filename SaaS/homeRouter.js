const express = require('express');
const fileController = require('./fileController.js');
const filename = 'question.txt';

const getQuestionById = (id) => {
  let questionList = fileController.getElements();

  try {
    return questionList[id];
  } catch (err) {
    console.log(err);
    return null;
  }
}

let Router = express();
let listQuestion = fileController.getElements();
Router.get('/', (req, res) => {
  // console.log(listQuestion.length);
  data = listQuestion[Math.floor(Math.random() * listQuestion.length)];
  // console.log(data._id);
  question = JSON.stringify(data.question);
  res.render('home', {
    question: question,
    link: `/api/question/${data.id}`
  });
});
Router.post('/api/question/:id', (req, res) => {
  let question = getQuestionById(id);
  if(req.body.choice === 'yes') {
    question.yes+=1;
  } else{
    // listQuestion[req.params.id].no += 1;
    question.no+=1;
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
  fileController.saveFile('question.json', tmp);
  res.redirect(`/`);
});

module.exports = Router;
