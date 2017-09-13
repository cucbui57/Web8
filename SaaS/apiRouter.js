const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');
const filename = 'question.txt';

let listQuestion = [];
listQuestion = fileController.getElements();

Router.post('/question', (req, res)=>{
  console.log(listQuestion.length);
  let question = {
    id: listQuestion.length,
    question: req.body.question,
    yes: 0,
    no: 0
  }
  let data;
  if(listQuestion.length==0) {
    data = JSON.stringify(question);
  }else{
    data = ",\n" + JSON.stringify(question);
  }
  fileController.appendQuestion(filename, data);
  res.redirect(`/ask`);

});
module.exports = Router;
