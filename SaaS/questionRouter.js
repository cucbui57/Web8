const express = require('express');
const Router = express.Router();
const fileController = require('./fileController');
const question = 'question.txt';

Router.get('/', (req, res) =>{
  // console.log(req.query);
  res.render('addQuestion');
});

module.exports = Router;
