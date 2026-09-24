

let arr=[1,0,3]   //2 is missing number from array

function missingNumber(arr)
{
    let n=arr.length
    let TotalSum=n*(n+1)/2;
    let partialSum=0;

    for(let i=0; i<n ; i++)
    {
       partialSum=partialSum+arr[i];
    }
    return TotalSum - partialSum

}
let res=missingNumber(arr)

console.log("Missing Number is :- "+ res);