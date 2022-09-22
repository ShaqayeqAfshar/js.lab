let weight = prompt("Enter Your Weight(by kg)");
let height = prompt("Enter Your Height (by m)");

let result = weight / height**2;
console.log(result)


if (result <= 18.5 && result > 0){
    alert("You are Undereweight")
}
else if (result < 25 && result > 18.8){
    alert("You have a Normalweight")
}
else if( result >= 25){
    alert("You are Overweight")
}
else{
    alert("Enter valid numbers")
}