function Random(min, max) {
  let result = Math.floor(Math.random() * (max - min) + min);

  return result;
}
let pass = "";
for (let i = 0; i < 8; i++) {
  if (Math.random() * 62 < 10) {
    pass += String.fromCharCode(Random(48, 57));
  } else {
    if (Math.random() < 0.5) pass += String.fromCharCode(Random(65, 90));
    else pass += String.fromCharCode(Random(97, 122));
  }
}
console.log(pass);
