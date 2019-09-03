function binarySearch(arr,target,startIndex,endIndex){
  //先求中間index
  let midIndex=Math.floor((startIndex+endIndex)/2);
  console.log('midIndex',midIndex);
  //target剛好是位在中間index
  if(arr[midIndex]===target){
    return midIndex;
  }
  //如果中間值大於target，所以target落在中間值左側，於是中間index-1繼續求新的中間值跑遞迴。
  else if(arr[midIndex]>target){
    binarySearch(arr,target,startIndex,midIndex-1);
  }
  //如果中間值小於target，所以target落在中間值右側，於是中間index+1繼續求新的中間值跑遞迴。
  else{
    binarySearch(arr,target,midIndex+1,endIndex);
  }
}

const tmparr=[1, 3, 5, 7, 8, 9];
const target=5;

const index=binarySearch(tmparr,target,0,tmparr.length-1);
console.log(index)