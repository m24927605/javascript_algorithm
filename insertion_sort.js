function insertionSort(arr){
  console.log('origin array');
  console.log(arr);
  for(let i=0;i<arr.length;i++){
    let pickIndex=i;
    const insertValue=arr[i];
    while(i>=0 && arr[pickIndex-1] > insertValue){
      [arr[pickIndex],arr[pickIndex-1]]=[arr[pickIndex-1],arr[pickIndex]];
      pickIndex--;
      console.log('pickIndex',pickIndex)
      console.log(arr)
    }
    arr[pickIndex]=insertValue;
  }
  return arr;
}

const arr=[7,5,1,20,8];
console.log(insertionSort(arr));