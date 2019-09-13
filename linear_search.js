function linearSearch(arr,target){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
      return i;
    }
  }
  return -1;
}

const arr=[4,2,8,6,0,5,1,7,3,9];
const target=7;
console.log(linearSearch(arr,target));