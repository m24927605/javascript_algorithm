
const {isSorted}=require('./utils');

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; 
  }
  //Pick the value in the middle of the array as a pivot.
  const pivotIndex = Math.floor(arr.length / 2);
  //Delete the pivot value in the array.
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  //separate the array by the pivot value
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < pivot) {
      left.push(arr[i]);
　　 } else {
      right.push(arr[i]);
　　 }
  }

  //recursive doing quickSort
  return quickSort(left).concat([pivot], quickSort(right));
};

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(quickSort(arr));
console.log(isSorted(quickSort(arr)));