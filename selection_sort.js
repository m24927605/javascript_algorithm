function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let min=arr[i];
    let minIndex=i;
    for(let j=i;j<arr.length;j++){
      if(arr[j]<min){
        min=arr[j];
        minIndex=j;
      }
    }
    [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]];
  }
  return arr;
}

const arr=[7,5,1,20,8];
console.log(selectionSort(arr));