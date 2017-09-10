//let  bleast stop
//var  function stop
const fileController = require('./fileController');
const filename = 'test.txt';

fileController.readFile(filename, (data) => {
  console.log(`Call back ${data}`);
});
// console.log(`Day la ${result}`);
console.log('Hello World');
module.exports = Router;
