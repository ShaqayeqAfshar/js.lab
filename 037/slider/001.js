// dom nodes
let place = document.querySelector("div.place");
let city = document.querySelector("div.city");
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")

// source of truth
const IMAGES = ["eram", "ghare", "kiasar", "koroush", "niavaran"];
const PLACES = ["باغ ارم", "قره کلیسا", "کیاسر", "آرامگاه کوروش", "کاخ نیاوران"];
const CITIES = ["شیراز", "آذربایجان غربی", "مازندران", "فارس", "تهران"];
//let index = Math.floor(Math.random()*IMAGES.length)
let index = 1;


//function
function render(index) {
    document.body.style.background = `url(./img/${IMAGES[index]}.jpg)`;
    document.body.style.backgroundSize = 'cover';
    place.textContent = PLACES[index];
    city.textContent = CITIES[index];
}


function nextSlide(){
    debugger;
    prevBtn.classList.remove("disable"); 
    index++
    console.log(index)
    if(index === 4){
        nextBtn.classList.add("disable");
    }
    render(index)
    clearInterval(interval)

}

function prevSlide(){
    nextBtn.classList.remove("disable");

    index--
    console.log(index)
    if(index === 0){
        prevBtn.classList.add("disable");
    
    }
    render(index)
    clearInterval(interval)
}


//events
//render(index);
render(0);
let interval = setInterval(function(){
    index++  
    if(index == 4){
        index = 0;
    }
   
  
    render(index);
      
},1000)


