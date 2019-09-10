const {isSorted}=require('./utils');

function insertionSort(arr){
  for(let i=0;i<arr.length;i++){
    let pickIndex=i;
    const insertValue=arr[i];
    //If the previous value is bigger than this value,we change both.
    while(i>=0 && arr[pickIndex-1] > insertValue){
      [arr[pickIndex],arr[pickIndex-1]]=[arr[pickIndex-1],arr[pickIndex]];
      pickIndex--;
    }
  }
  return arr;
}

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(insertionSort(arr));
console.log(isSorted(insertionSort(arr)));