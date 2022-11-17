//DOM nodes
let img1 = document.getElementById("autumn");
let img2 = document.getElementById("summer");

function changeSRC(){
    let autumn = img1.getAttribute("src");
    let summer = img2.getAttribute("src");
    img1.setAttribute("src",summer);
    img2.setAttribute("src",autumn);

}