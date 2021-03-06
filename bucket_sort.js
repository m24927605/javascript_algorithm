const {isSorted}=require('./utils');

function bucketSort (arr,bucketCapacity) {
  let bucketSortArray = [];

  //Get the min and max value at the first to calculate the bucket count.
  let min = Math.min.apply(Math,arr);
  let max = Math.max.apply(Math,arr);
  let bucketCount = Math.floor((max - min) / bucketCapacity)+1;
  
  //Initialize buckets object
  let buckets={};

  //The value of the key in the buckets object is an array means the bucket.
  for(let i = 0;i<bucketCount;i++){
    buckets[i]=[];
  };

  //Calculate the bucketIndex and put the value to the bucket in the buckets object.
  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor((arr[i] - min) / bucketCapacity);
    buckets[bucketIndex].push(arr[i]);
  };
  
  //Sort the array in buckets object and put the value to the bucketSortArray. 
  Object.keys(buckets).forEach((key)=> {
    buckets[key]=buckets[key].sort((a,b)=>a-b);
    bucketSortArray.push(...buckets[key]);
  });

  return bucketSortArray
}

const arr=[4,2,8,6,0,5,1,7,3,9];
console.log(bucketSort(arr,10));
console.log(isSorted(bucketSort(arr,10)));