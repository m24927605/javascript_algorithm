const {isSorted}=require('./utils');

function getMaxNumberLength(arr) {
  let max = 0;
  for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
      max=arr[i];
    }
  }
  return max.toString().length;
}

function getPosition(num, place){
  return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10;
}

function radixSortLSD(arr) {

  const max = getMaxNumberLength(arr); // length of the max digit in the array

  for (let i = 0; i < max; i++) {
    let buckets = Array.from(Array(10), () => []);
    for (let j = 0; j < arr.length; j++) {
      buckets[getPosition(arr[j], i)].push(arr[j]); // pushing into buckets
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

let arr = [10,15,1,60,5,100,25,50];
console.log(radixSortLSD(arr));