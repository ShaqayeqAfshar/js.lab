//DOM nodes
let sections = document.querySelectorAll("section");
let index = 0;

//function
function changeSection(e){
    if(e.key == 'ArrowUp' && index !== sections.length-1){
        sections[index].classList.add("scrollUp");
        index++;
    }
    else{
        if( index !== 0){
            sections[index-1].classList.remove("scrollUp");
            index--    
        }
    }
}

//events
window.addEventListener("keydown", changeSection)
