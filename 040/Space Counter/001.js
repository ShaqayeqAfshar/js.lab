let matn = " Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
let counter = 0;

function spaceCounter(str){
let matnArr = matn.split("");
for (const i of matnArr) {
    if (i==" "){
        counter++
    }
}
console.log(counter)
counter = 0;
}