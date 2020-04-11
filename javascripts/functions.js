// jshint esversion: 7

// Req. 3-b
let arrAvg = arr => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

// Req. 3-c
let maxSoFar,
  result = "",
  arrMax = arr => {
    arr.forEach(elem => {
      if (elem > maxSoFar) {
        elem = arrMax;
      }
      result = arrMax;
    });
  };

// Req. 3-d

let sumEvens = arr => {
  for (var evens of arr) {
    sumEvens = sumEvens + i;
  }
};
