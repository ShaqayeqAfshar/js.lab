//DOM nodes
let prizes = ["مداد رنگی", "دوچرخه", "آیفون 13", "پوچ", "دوباره بچرخون"];
h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let counter = 0;
//function
function prize(){
    
    let rand = Math.floor(Math.random()*prizes.length);
    h1.textContent = prizes[rand];
    if(rand !== 4){
        counter++
    }
    if(counter == 3){
        btn.setAttribute("disabled",true);
    }
}

//event
btn.onclick = prize;