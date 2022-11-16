let rand = Math.floor(Math.random()*10);

if (rand<3){
    document.body.textContent = rand;
    document.body.style.background ="red"
}
else if (rand>=3 && rand<7){
    document.body.textContent = rand;
    document.body.style.background = "yellow";
}
else{
    document.body.textContent = rand;
    document.body.style.background = "green";
}