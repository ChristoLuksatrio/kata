let repeatNumbers = data => {
  let message = [];
  for (let i = 0; i < data.length; i++) { // this loops twice for sure
    let result = "";
    for (let j = 0; j < data[i][1]; j++) {
      result += data[i][0];
    }
    message.push(result);
  }
  return message.join(', ');
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
