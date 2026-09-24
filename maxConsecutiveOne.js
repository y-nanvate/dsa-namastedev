let arr=[1,0,1,0,1,1,1]

//output-3 
let currCount=0;
let maxCount=0;

for( let i=0;arr.length;i++)
{
  if( arr[i] ==1)
  {
   currCount++;
  }
  else{
    maxCount=Math.max(currCount, maxCount);
    currCount=0;
  }
}

let maxOneCount= Math.max(maxCount, currCount)

console.log(maxOneCount)