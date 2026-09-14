//write a function to return largest number of an array


let arr=[1,4,6,9,2,4,7]

function largestElementOfarray(arr){
let LargestNumber= -Infinity;
    for( let i=0; i<arr.length ; i++)
    {
        if(arr[i]>LargestNumber)
        {
            LargestNumber = arr[i]
        }
    }
    
  return LargestNumber
}

let res= largestElementOfarray(arr)

console.log(res)