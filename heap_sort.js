const {isSorted}=require('./utils');

function maxHeap(arr, parentIndex,arrLength) {
  const leftIndex = 2 * parentIndex + 1;
  const rightIndex = leftIndex + 1;
  let max = parentIndex;

  //If the left value is bigger than max value,the left value be the max value.
  if (leftIndex < arrLength && arr[leftIndex] > arr[max]) {
    max = leftIndex;
  }
  //If the right value is bigger than max value,the right value be the max value.
  if (rightIndex < arrLength && arr[rightIndex] > arr[max]) {
    max = rightIndex;
  }

  //If the max value is not parent node value,we exchange the two.
  if (max !== parentIndex) {
    [arr[parentIndex],arr[max]]=[arr[max],arr[parentIndex]];
    //Do again to make a max heap.
    maxHeap(arr,max,arrLength);
  }
}

function heapSort(arr) {   
  const arrLength = arr.length;
  let parentIndex=Math.floor(arrLength / 2);
  let lastChildIndex=arrLength-1;

  while(parentIndex >= 0){
    maxHeap(arr,parentIndex,arrLength);
    parentIndex--;
  };

  while(lastChildIndex >= 0){
    //Exchange the top node value and the last child node value.
    [arr[0],arr[lastChildIndex]]=[arr[lastChildIndex],arr[0]];
    maxHeap(arr, 0,lastChildIndex);
    lastChildIndex--;
  }

  return arr;
}

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(heapSort(arr));