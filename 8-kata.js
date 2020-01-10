const multiplicationTable = maxValue => {
  let str = "";
  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue; j++) {
      str += ((i + 1) * (j + 1)) + " ";
    }
    str += "\n";
  }
  return str;
};




console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
