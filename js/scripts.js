function substituteNumbers(num) {
  let countUp = [];
    for(let i = 0; i < num; i++) {
      countUp.push(i.toString());
  }
  const newCount = countUp.map(function(element) {
    if(element.includes("3")) {
      return "Won't you be my neighbor?";
    } else if(element.includes("2")) {
      return "Boop!";
    } else if(element.includes("1")) {
      return "Beep!";
    } else return element;
  });
  return newCount;
}

