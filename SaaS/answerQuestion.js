const express = require('express');
const fileController = require('./fileController.js');
const filename = 'question.txt';

let Router = express();
Router.get('/', (req, res) => {
  let listQuestion = fileController.getElements();
  console.log(listQuestion);
  data = listQuestion[Math.floor(Math.random() * listQuestion.length)];
  // console.log(data.id);/
  question = JSON.stringify(data.question);
  res.render('home', {
    question: question,
    link: `/api/question/${data.id}`
  });
});

module.exports = Router;
