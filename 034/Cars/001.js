//dom nodes
let cars = document.querySelectorAll("div>img");
let big = document.getElementById("big");
let name = document.getElementById("name");
let  p = document.querySelector("p")
let selected = null;
//function
function change(){
    /*if(selected){
        selected.style.border = "";
    }*/
    for (const car of cars) {
        car.style.border = "";
        
    }

   let src = this.getAttribute("src");
   let alt = this.getAttribute("alt");
    this.style.border = "3px solid red"

   big.setAttribute("src", src);
   p.textContent = alt; 
    selected = this;
}

//events
for (const car of cars) {
    car.onclick = change;
}