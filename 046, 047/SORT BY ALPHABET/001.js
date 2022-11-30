//dom nodes & sources
const countries = [
  "iran",
  "australia",
  "brazil",
  "USA",
  "germany",
  "finland",
  "china",
  "norway",
  "England",
  "italy",
  "georgia",
  "UAE",
  "argentina",
  "jerman",
];
let root = document.getElementById("root");

//function
function sortNames() {
  let countrylow = countries.map(function (country) {
    return country.toLowerCase();
  });

  countrylow.sort();

  for (let a = 97; a < 122; a++) {
    let countrys = countrylow.filter((country) => country.charCodeAt(0) == a);
    console.log(countrys);
    if (countrys.length > 0) {
      let template = `
    <h2>${String.fromCharCode(a).toUpperCase()}<span>(${
        countrys.length
      })</span></h2>
    <p>${countrys.join("<br>")}</p>`;
      root.innerHTML += template;
    }
    countrys = [];
  }
}

//events
sortNames();
