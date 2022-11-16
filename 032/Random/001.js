
//function 1

let min = +prompt("enter your first number:");
let max = +prompt("enter your second number:");


function random (min,max){
let result = Math.floor(Math.random()*(max-min)+min);
document.body.textContent = result;
}
random(min,max)




//function 2

function Random (min,max){
  let result = Math.floor(Math.random()*(max-min)+min);

  return result
  }

  let char = String.fromCharCode(Random(65,90));
console.log(char)