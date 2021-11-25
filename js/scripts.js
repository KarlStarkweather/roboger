function substituteNumbers(num) {
  let countUp = [];
  countUp.push("0");
  for(let i = 0; i < num; i++) {
    countUp.push(toString(num));
  }
  return countUp;
}