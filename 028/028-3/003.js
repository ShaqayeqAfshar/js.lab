
let num_1 = Number(prompt("Enter number 1"));
let num_2 = Number(prompt("Enter number 2"));
let num_3 = Number(prompt("Enter number 3"));


if (num_1 + num_2 > num_3  && num_1 + num_3 > num_2 && num_2 + num_3 > num_1){
    alert("it's a triangle")
}
else{
    alert("it's not a triangle")
}

/*
let a = Number(prompt("enter 1"));
let b = Number(prompt("enter 2"));
let c = Number(prompt("enter 3"));

if (a+b>c && a+c>b && b+c>a){
    alert("yes")
}
else{
    alert("no")
}
*/