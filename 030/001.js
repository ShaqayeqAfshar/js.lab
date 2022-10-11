

let rand = Number(Math.floor(Math.random() * 10));

document.body.style.background = `URL(./img/${rand}.jpg) no-repeat`;

document.body.style.backgroundSize = "cover";

switch (rand) {
  case 0:
    document.body.textContent ="mountain";
    break;

  case 1:
    document.body.textContent = "water";
    break;

  case 2:
    document.body.textContent = "rain";
    break;

  case 3:
    document.body.textContent = "cat";
    break;

  case 4:
    document.body.textContent = "library1";
    break;

  case 5:
    document.body.textContent = "chaina";
    break;

  case 6:
    document.body.textContent = "library2";
    break;

  case 7:
    document.body.textContent = "niloofar flower";
    break;

  case 8:
    document.body.textContent = "city";
    break;

  case 9:
    document.body.textContent = "The Starry Night";
    break;
}
