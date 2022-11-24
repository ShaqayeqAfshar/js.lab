//DOM nodes
let head = document.querySelector("header");
console.log(head)

//function
function changeHeaderPosition(e){
    if(e.wheelDeltaY > 0){
        head.classList.add("sticky")
    }
    else{
        head.classList.remove("sticky");
        
    }
}


//events
window.addEventListener("wheel", changeHeaderPosition);
