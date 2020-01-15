const makeCase = function(input, casing) {
  if (casing === 'camel') {
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

  if (casing === 'pascal') {
    input = " " + input;
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

  if (casing === 'snake') {
    let arr = input.split('');
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === " ") {
        newarr += '_';
      } else {
        newarr += arr[i]
      }
    }
    return newarr;
  };

  if (casing === 'kebab') {
    let arr = input.split('');
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === " ") {
        newarr += '-';
      } else {
        newarr += arr[i]
      }
    }
    return newarr;
  };

  if (casing === 'title') {
    let arr = input.split('');
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === " ") {
        newarr += arr[i];
        newarr += arr[i + 1].toUpperCase();
        i += 1;
      } else if (i == 0) {
        newarr += arr[i].toUpperCase();
      } else {
        newarr += arr[i];
      }
    }
    // newarr.splice(1, 0, 'T')
    // newarr[0].toUpperCase();
    return newarr;
  };

  if (casing === 'vowel') {
    let arr = input.split('');
    let newarr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
        newarr += arr[i].toUpperCase();
      } else {
        newarr += arr[i];
      }
    }
    return newarr;
  };

  if (casing === 'consonant') {
    let arr = input.split('');
    let newarr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "t" || arr[i] === "h" || arr[i] === "s" || arr[i] === "r" || arr[i] === "n" || arr[i] === "g") {
        newarr += arr[i].toUpperCase();
      } else {
        newarr += arr[i];
      }
    }
    return newarr;
  };

  if (casing[0] === "upper") {
    let arr = input.split('');
    let newarr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === " ") {
        newarr += '_';
      } else {
        newarr += arr[i].toUpperCase();
      }
    }
    return newarr;
  };
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

