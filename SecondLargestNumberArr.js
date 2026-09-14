
let arr=[2,4,6,1,9,2,3,15,5]

function SecondLargestNumberArr(arr){

    let LargestNumber= -Infinity
    let SecondLargest = -Infinity

    for(let i=0; i<arr.length; i++){

        if(arr[i]>LargestNumber)
        {
             SecondLargest = LargestNumber;

             LargestNumber = arr[i]
        }
        else if(arr[i]> SecondLargest)
        {
            SecondLargest= arr[i]
        }
    }
    console.log(SecondLargest)

}

SecondLargestNumberArr(arr)

