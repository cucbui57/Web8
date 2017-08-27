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

module.exports = {
  saveFile,
  readFileSync,
  readFile
}
