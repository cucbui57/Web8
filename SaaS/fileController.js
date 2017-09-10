const fs = require('fs');

const saveFile = (fileName, data) => {
  fs.writeFileSync(fileName, data);
}

const readFileSync = (fileName) => {
  return fs.readFileSync(fileName, {encoding : 'utf-8'});
}

const readFile = (fileName, callback) => {
  fs.readFile(fileName, {encoding:'utf-8'}, (err,data) => {
    callback(data);
  });
}

const appendQuestion = (fileName, data) => {
  fs.appendFileSync(fileName,data);
}

const getElements =() =>{
  listQuestionString = `[${readFileSync('question.txt')}]`;
  listQuestion = JSON.parse(listQuestionString);
  return listQuestion;
}

module.exports = {
  getElements,
  saveFile,
  appendQuestion,
  readFileSync,
  readFile
}
