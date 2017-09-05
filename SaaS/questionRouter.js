const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) =>{
  // res.send({a:'test', b:'test'});
  console.log(req.query);
  res.render('addQuestion');
});

Router.get('/', (req, res) =>{
  // res.send({a:'test', b:'test'});

  console.log(req.body);
  console.log('postQuestion');
});

Router.post('/question',(req, res) =>{
  console.log('post question');

});


Router.get('/:id', (req, res) => {
  console.log(req.params.id);
});

Router.get('/getQuestion', (req, res) => {
  res.send('Get Question');
});

module.exports = Router;
