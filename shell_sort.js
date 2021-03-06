const {isSorted}=require('./utils');

function shellSort(arr){
  //Calculate the gap size first.
  let gapSize =  Math.floor(arr.length/2);
  while(gapSize > 0){
    //Loop every value.
    for(let i = gapSize; i < arr.length; i++) {
      let j = i;
      //Compare the two value and change their position if the left value is bigger than right value.
      while(j >= gapSize && arr[j - gapSize] > arr[j]) {
        [arr[j],arr[j - gapSize]]=[arr[j - gapSize],arr[j]]
        //Continune comparing th the left side.
        j =j- gapSize;
      }
    }
    gapSize = Math.floor(gapSize/2);
  }
  return arr;
}

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(shellSort(arr));
console.log(isSorted(shellSort(arr)));