const student = {
  name: "Sana",
  family: "Samin",
  score: 100,
  age: 30,
  course: ["NodeJs", "php"],
  phoneNumber: "09121001010",
  studentNumber: "MFT123456S",
  isCertfifcate: true,
  address: {
        city: "Shiraz",
        Province: 'Fars',
        PostaCode: 148898763
    }
};

let Thead = document.getElementById("rootTH")
let Tbody = document.getElementById("rootTD");
let root = document.getElementById("root");
function render() {
  for (let s in student) {
    let th = document.createElement("th");
    let td = document.createElement("td");
    th.textContent = s;
    td.textContent = student[s];
    Tbody.appendChild(td);
    Thead.appendChild(th);
  }
}
render();
