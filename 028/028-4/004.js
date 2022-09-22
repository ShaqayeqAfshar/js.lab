let num_1 = Number(prompt("Enter number 1"));
let num_2 = Number(prompt("Enter number 2"));
let num_3 = Number(prompt("Enter number 3"));


if (num_1 > num_2 && num_1 < num_3 || num_1 < num_2 && num_1 > num_3){
    alert("amoung" + num_1 +","+ num_2 +","+ num_3 +" -->"+ "The middle number is:" + num_1)
}
else if(num_2> num_1 && num_2 < num_3 ||num_2< num_1 && num_2 > num_3) {
    alert("amoung" + num_1 +","+ num_2 +","+ num_3 +" -->"+ "The middle number is:" + num_2)
}
else{
    alert("amoung" + num_1 +","+ num_2 +","+ num_3 +" -->"+ "The middle number is:" + num_3)
}