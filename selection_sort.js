const {isSorted}=require('./utils');

function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    //suppose the min value is the each value of the array.
    let min=arr[i];
    //suppose the min index is i.
    let minIndex=i;
    for(let j=i;j<arr.length;j++){
      //find the min value and min index of the others
      if(arr[j]<min){
        min=arr[j];
        minIndex=j;
      }
    }
    //change the value after searching min value loop
    [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]];
  }
  return arr;
}

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(selectionSort(arr));
console.log(isSorted(selectionSort(arr)));