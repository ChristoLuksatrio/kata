const urlDecode = function(text) { 
  obj = {};
  str = text.replace(/%20/g, ' ').split('&');

  for (i of str) {
    i.split('')
    for (let j = 0; j < i.length; j++) {
      if (i[j] === "=") {
        key = i.slice(0, j);
        value = i.slice(j + 1, i.length)
        obj[key] = value;
      }
    }
  }

  return obj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
