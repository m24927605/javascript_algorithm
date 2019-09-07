const {isSorted}=require('./utils');

function bubbleSort(arr){
  let compareCount=arr.length;
  //We don't need to compare the last item because the last two element has been compared and changed in the last second time.
  while(compareCount-1>0){
    compareCount--;
    for(let i=0;i<compareCount;i++){
      //If the right value is bigger than left value we need to change their position.
      if(arr[i]>arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
      }
    }
  }
  return arr;
}

const arr=[7,5,1,20,8];
console.log(bubbleSort(arr));
console.log(isSorted(bubbleSort(arr)));