const express = require('express');
const Router = express.Router();
const fileController = require('./fileController.js');
Router.get('/', (req, res) =>{
  let listQuestion = fileController.getElements();
  res.send(listQuestion);
});
module.exports = Router;
