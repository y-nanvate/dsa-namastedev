
let num= -1234;
let CopyNum=num;

let reverse=0;
num = Math.abs(num)
function reverseInteger(num)
{ 
    while(num > 0)
    {
        let rem=num%10;
        reverse=(reverse*10)+rem
        num = Math.floor(num/10)

    }
   return CopyNum < 0 ? - reverse : reverse
}

const res = reverseInteger(num)

console.log(res)