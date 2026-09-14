
// Write a function that searches for an element in arra and return the index if the element is not present then return -1


let arr=[1,2,3,47,8,9]

let arr2=["yogesh","p","s"["n","z"],["o","x"]]


function searchElemnetInedx(arr, val){

    for( let i= 0; i<arr.length ;i++)
    {
        if(arr[i]=== val)
        {
            return i;

        }
        
    }
    return "elemet is not present"

}

let Element = searchElemnetInedx(arr2, x)
console.log(Element)