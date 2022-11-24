//DOM nodes
let section = document.querySelectorAll("section");

//function
function scrollSection(e){
    if (e.wheelDeltaY < 0 && section[section.length-1] !== e.target){
        e.target.classList.add("scrollUp");
    }
    else{
        if( section[0] !== e.target)
            e.target.previousElementSibling.classList.remove("scrollUp")
    }
}





//events
window.addEventListener("wheel",scrollSection);

