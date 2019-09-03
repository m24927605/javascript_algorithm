function bubbleSort(arr){
  console.log('origin array',arr);
  let toIndex=arr.length;
  while(toIndex>1){
    toIndex--;
    console.log('toIndex',toIndex);
    for(let i=0;i<toIndex;i++){
      //如果右側的值比較大就交換
      if(arr[i]>arr[i+1]){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
        console.log(arr);
      }
    }
  }
  return arr;
}

const arr=[7,5,1,20,8];
console.log(bubbleSort(arr));