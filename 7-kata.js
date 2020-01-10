let camelCase = (input) => {
  let arr = input.split('');
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      newarr += arr[i];
    } else {
      i += 1;
      newarr += arr[i].toUpperCase();
    }
  }
  return newarr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
