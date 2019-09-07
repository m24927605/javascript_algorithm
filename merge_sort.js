const {isSorted}=require('./utils');

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  // return once we hit an array with a single item
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2) 
  const leftArr = arr.slice(0, middle) 
  const rightArr = arr.slice(middle)
  console.log('leftArr',leftArr);
  console.log('rightArr',rightArr);
  return merge(mergeSort(leftArr),mergeSort(rightArr))
}

// compare the arrays item by item and return the concatenated sortedArr
function merge (leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    console.log(`${leftArr[0]} compare with ${rightArr[0]}`)
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  console.log('**sortedArr**',[...sortedArr,...leftArr,...rightArr]);
  return [...sortedArr,...leftArr,...rightArr];
}

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(mergeSort(arr));
