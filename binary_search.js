function binarySearch(arr,target,startIndex,endIndex){
  //Get the middle index first.
  let midIndex=Math.floor((startIndex+endIndex)/2);
  //if the middle value is equal to target return its index
  if(arr[midIndex]===target){
    return midIndex;
  }
  //If the middle value is bigger than target that neans the value is on the left side of the middle vlue. 
  else if(arr[midIndex]>target){
    return binarySearch(arr,target,startIndex,midIndex-1);
  }
  //If the middle value is smaller than target that means the value is on the right side of the middle value.
  else{
    return binarySearch(arr,target,midIndex+1,endIndex);
  }
}

const arr=[0,1,2,3,4,5,6,7,8,9];
const target=7;

const index=binarySearch(arr,target,0,arr.length-1);
console.log(index)
