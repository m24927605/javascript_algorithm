const {isSorted}=require('./utils');

function radixSortLSD(array) {
  const counter = [
    []
  ]; // Radix sort Array container to hold arrays from 0th digit to 9th digits
  let max = 0,
    mod = 10,
    dev = 1; //max
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  // determine the large item length
  let maxDigitLength = (max + '').length;
  console.log(`max + ''`,max + '')
  for (let i = 0; i < maxDigitLength; i++, dev *= 10, mod *= 10) {
    
    for (let j = 0; j < array.length; j++) {
      let bucket = Math.floor((array[j] % mod) / dev); // Formula to get the significant digit
      if (counter[bucket] === undefined) {
        counter[bucket] = [];
      }
      counter[bucket].push(array[j]);
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j++) {
      let value = undefined;
      if (counter[j] !== undefined) {
        while ((value = counter[j].shift()) !== undefined) {
          array[pos++] = value;
        }
      }
    }
  }
  return array;
};

let arr = [10,15,1,60,5,100,25,50];
console.log(radixSortLSD(arr));