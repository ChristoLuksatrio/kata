let calculateChange = (total, cash) => {
  let obj = {};
  let finalChange = {};

  let twentyDollar = "";
  let tenDollar = "";
  let fiveDollar = "";
  let twoDollar = "";
  let oneDollar = "";
  let quarter = "";
  let dime = "";
  let nickel = "";
  let penny = "";

  let change = cash - total;


  
  if ((change / 2000) > 0) {
    obj.twentyDollar = Math.trunc((change / 2000))
    left = Math.trunc((change / 2000));
    change = change - (2000 * left);
  } 
  
  if ((change / 1000) > 0) {
    obj.tenDollar = Math.trunc((change / 1000))
    left = Math.trunc((change / 1000));
    change = change - (1000 * left);
  } 
  
  if ((change / 500) > 0) {
    obj.fiveDollar = Math.trunc((change / 500))
    left = Math.trunc((change / 500));
    change = change - (500 * left);
  }

  if ((change / 200) > 0) {
    obj.twoDollar = Math.trunc((change / 200));
    left = Math.trunc((change / 200));
    change = change - (200 * left);
  }
  
  if ((change / 100) > 0) {
    obj.oneDollar = Math.trunc((change / 100))
    left = Math.trunc((change / 100));
    change = change - (100 * left);
  }
  
  if ((change / 25) > 0) {
    obj.quarter = Math.trunc((change / 25))
    left = Math.trunc((change / 25));
    change = change - (25 * left);
  } 
  
  if ((change / 10) > 0) {
    obj.dime = Math.trunc((change / 10))
    left = Math.trunc((change / 10));
    change = change - (10 * left);
  }
  
  if ((change / 5) > 0) {
    obj.nickel = Math.trunc((change / 5))
    left = Math.trunc((change / 5));
    change = change - (5 * left);
  }
  
  if ((change / 1) > 0) {
    obj.penny = Math.trunc((change / 1))
  }

  let objArray = Object.keys(obj);

  for (i of objArray) {
    if (obj[i] === 0) {
      delete obj[i];
    }
  }

  return obj;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }


// Twenty dollars = 2000
// Ten dollars = 1000
// Five dollars = 500
// Two dollars = 200
// One dollar = 100
// Quarter (25¢) 
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)