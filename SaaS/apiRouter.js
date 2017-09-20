const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');
const filename = 'question.json';
const questionModel = require('./questionSchema');
const questionController = require('./questionController');
const { answerQuestion, getQuestionById, addNewQuestion, getRandomQuestion } = require('./questionController');

let listQuestion = fileController.getElements();

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

Router.post('/question', (req, res)=>{
  console.log(listQuestion.length);
  let NewQuestion = {
    id: guid(),
    question: req.body.question,
    yes: 0,
    no: 0
  }

  let data;
  if(listQuestion.length==0) {
    data = JSON.stringify(NewQuestion);
  }else{
    data = ",\n" + JSON.stringify(NewQuestion);
  }
  fileController.appendQuestion(filename, data);
  questionModel.create(NewQuestion, (err, question) =>{
    if(err){
      console.log(err.message);
    } else {
      console.log(question);
    }
  });
  res.redirect(`/ask`);

});
module.exports = Router;
