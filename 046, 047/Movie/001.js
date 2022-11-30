//DOM node
let root = document.getElementById("root");
let themebtn = document.getElementById("themebtn");
let theme = localStorage.getItem("theme");

// AJAX
let req = new XMLHttpRequest();
req.open("GET", "https://swapi.dev/api/films");
req.addEventListener("load", getData);
req.send();



//function

function getData() {
    let data = JSON.parse(req.response);
    let datas = data.results;
    render(datas);
    console.log(datas);
}




function render(datas) {
  let template = datas
    .map(data => 
      (`
    <div class="col-3 mb-3">
    <div class="card bg-dark text-white m-2 p-2 d-flex justify-content-center align-itemes-center"  style = " height :315px">
      <h2>Movie name : <span>${data.title}</span></h2>
      <p>Episode : <span>${data.episode_id}</span></p>
      <p>edited : <span>${data.edited}</span></p>
      <p>producer : <span>${data.producer}</span></p>
      <a class = "btn btn-secondary" href="${data.url}">Click here to download</a>
    </div>
  </div> 
      `
      ))
    .join("");
    root.innerHTML += template;
}



//function themes
function DarkMode(){
    document.body.style.background = "black";
    localStorage.setItem("theme" , "dark");
    themebtn.textContent = "Light Mode";
    themebtn.setAttribute("onclick" , "LightMode()")
}
function LightMode(){
    document.body.style.background = "white";
    localStorage.setItem("theme" , "light");
    themebtn.textContent = "Dark Mode";
}



if (theme == "light"){
    LightMode()
}
else{
    DarkMode()
}