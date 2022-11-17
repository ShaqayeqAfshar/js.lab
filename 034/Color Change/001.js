//dom nodes
let divs = document.querySelectorAll("section > div");
let counter = 0;
//function
function color(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    if (!this.style.background){
        this.style.background = `rgb(${red},${green},${blue})`
        counter++
        if (counter == 16){
            alert("Yooohoooo!!!!!")
        }
    }
    
    

}

//events
for (const div of divs) {
    div.onclick = color;
}