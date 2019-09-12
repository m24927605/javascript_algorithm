const {isSorted}=require('./utils');

function countingSort(arr){
  let max = arr[0];
  let min = arr[0];
  //Find the max value and min value first
  for (let index = 0; index < arr.length; index++){
    if (arr[index] > max){
      max = arr[index];
    }
    else if (arr[index] < min){
      min = arr[index];
    }
  }
  let range = max - min;
  let countingArray = [];
  //Default we set 0 to the empty countingArray.
  for (let i = 0; i <= range; i++){
    countingArray[i] = 0;

  }
  //Count the appearance frequency.
  for (let i = 0; i < arr.length; i++){
    countingArray[(arr[i] - min)]++;
  }
  
  let sortArrIndex = 0;
  let sortArr = new Array(arr.length);
  console.log('countingArray',countingArray)
  //If the value of the index in the countingArray is bigger than 0 ,put the sortArrIndex to the sortArr.
  for (let i = min; i <= max; i++){
    while (countingArray[i - min]-- > 0){
      console.log('i:',i)
      console.log('sortArrIndex',sortArrIndex)
      sortArr[sortArrIndex++] = i;
      console.log('sortArr',sortArr)
    }
  }
  return sortArr;
}
const arr=[4,4,1,7,9];
console.log(countingSort(arr));