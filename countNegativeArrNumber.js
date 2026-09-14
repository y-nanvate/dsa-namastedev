
let arr=[1,-3,2,9,1,-3,-5]


function countNegativeArrNumber(arr){
    let count=0;
for(let i =0 ; i < arr.length ; i++)
{
    if(arr[i]<0)
    {
       count = count + 1;
    }
  

}
console.log(count)

}

countNegativeArrNumber(arr)
