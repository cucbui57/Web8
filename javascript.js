// function aRose(){
//   console.log("Sweet");
// }
//
// var anotherName  = aRose;
//
// typeof(anotherName) // function
// anotherName(); // Sweet
//
// function multiplyBy3(num){
//   return num*3;
// }
//
// function multiplyBy6(num){
//   return num*6;
// }
//
// function transformNumberWith(num, transformer) {
//   return transformer(num);
// }
//
// var c = transformNumberWith(3, multiplyBy3); // 9
// var d = transformNumberWith(3, multiplyBy6); // 18
//
// console.log(c);
// console.log(d);

//
function countDown2(time) {
  var v = [];
  for(var i = time; i >= 0; i--) {
    var j = 0;
    v.push(i);
    setTimeout(function(){
      console.log(v[j]);
      j++;
    }, (time- i) * 1000);
  }
}

function countDown(time) {
  for(var i = time; i >= 0; i--) {
    setTimeout(function(){
      console.log(time);
      time--;
    }, (time - i) * 1000);
  }
}

function countDown3(time) {
  setTimeout(function(){
    console.log(time);
    if(time > 0) countDown3(time-1);
  }, time*1000);
}

function countDown4(time) {

}

countDown3(5) {

};

function createWebsiteCounter() {
    var numberOfVisitor= 0;
    function setNumberOfVisitor(num) {
      if(num > 0) numberOfVisitor = num;
    }

    function getNumberOfVisitor() {
      return numberOfVisitor;
    }

    return {
      getNumberOfVisitor : getNumberOfVisitor,
      setNumberOfVisitor : setNumberOfVisitor
    }
}

var myWebsite = createWebsiteCounter;
myWebsite.getNumberOfVisitor();
