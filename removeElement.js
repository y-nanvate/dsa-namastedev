let arr=[1,2,3,4,3,5,6,7] // remove 3 [1,2,4,5,6,7]
let num=3 //remove this 3 from arr

function removeElement(arr, num)
{
  let x=0
  for( let i =0; i<arr.length;i++)
  {
    if(arr[i] !== num)
    {
        arr[x]=arr[i]
        x=x+1;
    }
  } return x

  console.log(arr)
}


const res = removeElement(arr, num)
console.log(arr)