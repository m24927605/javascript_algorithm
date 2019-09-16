const {isSorted}=require('./utils');

function interpolationSearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (end >= start) {
      let m = Math.floor((key - arr[start]) * (end - start) / (arr[end] - arr[start]) + start);

      if (m > end || m < start) {
          break;
      }

      if (arr[m] === key) {
          return m;
      } else {
          if (key > arr[m]) {
              start = m + 1;
          } else {
              end = m - 1;
          }
      }
  }

  return -1;
}

const arr=[0,1,2,3,4,5,6,7,8,9];
console.log(interpolationSearch(arr,3));