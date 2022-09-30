function sum() {
  let input = +prompt("enter a number ");
  let summ = input;
  while (input != 0) {
    input = +prompt("enter a number ");
    summ += input;
  }
  alert(summ);
}
