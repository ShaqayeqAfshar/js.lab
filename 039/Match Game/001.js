//dom nodes
let boxes = document.querySelectorAll("section > div");
let counter = 0;
let openCards = [];
let matched = 0;

//function
function matchGame() {
  counter++;
  this.classList.add("show");
  openCards.push(this);
  if (counter == 2) {
    if (openCards[0].innerHTML == openCards[1].innerHTML) {
        matchCards();
    } else {
        disableAllCards();
        unMatchCards();
    }
  }



  function matchCards(){
    openCards[0].classList.add("green");
    openCards[1].classList.add("green");
    openCards.length = 0;
    counter = 0;
    matched++
    if (matched == 8){
        setTimeout(function(){
            alert("you win!!!")

        },200)
    }
  }

  function unMatchCards(){
    openCards[0].classList.add("red");
    openCards[1].classList.add("red");
  setTimeout(function () {
    for (let i = 0; i < openCards.length; i++) {
      openCards[i].classList.remove("show");
      openCards[i].classList.remove("red");
    }
    openCards.length = 0;
    counter = 0;
    enableAllCards();
  }, 1000);
  }

  function disableAllCards() {
    for (const box of boxes) {
      box.classList.add("disable");
    }
  }

  function enableAllCards() {
    for (const box of boxes) {
      box.classList.remove("disable");
    }
  }

  
}

//events
for (const box of boxes) {
  box.onclick = matchGame;
}
