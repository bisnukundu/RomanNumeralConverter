console.clear();
let obj = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  let remains = num;
  let lessValue = 0;

  let final = "";

  console.log(final);

  while (true) {
    let less = Object.values(obj).find((e) => {
      return e <= remains;
    });

    lessValue = less;
    let ba = getRoman(lessValue, remains);
    remains = ba.remains;

    final += ba.roman1.repeat(ba.romanPrintTime)
    
    if (remains == 0) {
      return final;
    }
  }
    
}

console.log(convertToRoman(9));

function getRoman(lessNumber, num) {
  //  find valu of roman value.

  let afterActualNumber = num % lessNumber;
  let beforeActualNumberArray = [];
  let total = 0;

  for (let i = 1; i < 10; i++) {
    if (lessNumber * i <= num) {
      beforeActualNumberArray.push(lessNumber * i);
    }
  }

  let roman1 = Object.keys(obj).find((key) => {
    return obj[key] == lessNumber;
  });

  let romanPrintTime = Math.max(...beforeActualNumberArray) / lessNumber;
  

  return { roman1, romanPrintTime, remains: afterActualNumber };
}


