//DOM nodes
let btn = document.querySelector("button");
let input = document.querySelector("input");
let root = document.getElementById("root");

let divBtn = document.querySelectorAll("div#btnsdiv button");
let allbtn = document.getElementById("all");
let activebtn = document.getElementById("active");
let completbtn = document.getElementById("completed");
let is = []

let span = document.getElementById("span")





//functions
function todoApp(){
    let li = document.createElement("li");
    let check = document.createElement("i");
    let br = document.createElement("br")
    check.classList.add("fa")
    check.classList.add("fa-check-square")
    li.textContent = input.value;
    root.appendChild(check)
    root.appendChild(li);
    is.push(check);
    check.addEventListener("click", done)
    input.value = "";
    input.focus()
    root.appendChild(br);
    itemLeft()
}

function done(){
    if(![...this.classList].includes("done")){
    this.classList.add("done");
    this.nextSibling.classList.add("done");}
    else{
        this.classList.remove("done");
    this.nextSibling.classList.remove("done");
    }
    itemLeft()
}

function activet(){
    all()
    for (const i of is) {
        if( [...i.classList].includes("done")){
            i.classList.add("hide");
            i.nextSibling.classList.add("hide");
    
    }
    
    }
    itemLeft()
}

function all(){
    for (const i of is) {
        if( [...i.classList].includes("hide")){
            i.classList.remove("hide");
            i.nextSibling.classList.remove("hide");
    
    }
        
    }
    itemLeft()

}

function completed(){
    all()
    for (const i of is) {
        if( ![...i.classList].includes("done")){
            i.classList.add("hide");
            i.nextSibling.classList.add("hide");
    
    }
}
itemLeft()
}

function itemLeft(){
    let counter = 0;
    for (const i of is) {
        if( ![...i.classList].includes("done")){
            counter++
        }
}
span.textContent = counter
}












//events
btn.onclick = todoApp;
activebtn.onclick = activet;
allbtn.onclick = all;
completbtn.onclick = completed;
