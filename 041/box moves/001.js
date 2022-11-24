//DOM nodes
let sb = document.getElementById("sb");
let sd = document.getElementById("sd");
let ta = document.getElementById("ta");
let tc = document.getElementById("tc");


//function
function move(e){
 let x = e.clientX;
 let y = e.clientY;
 let width = window.innerWidth;
 let height = window.innerHeight;

 sb.style.transform = `translate(${-(width-x)/10}px,${-(height-y)/15}px)`;
 sd.style.transform = `translate(${(width-x)/15}px,${(height-y)/10}px)`;
 ta.style.transform = `translate(${-(width-x)/20}px,${(height-y)/10}px)`;
 tc.style.transform = `translate(${(width-x)/10}px,${-(height-y)/20}px)`;

}





//events

window.addEventListener("mousemove", move)



