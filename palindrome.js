

let num = -121;

function palindrome(num){
    //Math.abs is use to make number negative to postive
    num = Math.abs(num)
    if(num < 0) return "num is not valid"
let CopyNum = num;
let rev=0;

while(num > 0)
{
   let rem = num%10;
    rev= (rev*10)+rem;
num = Math.floor(num/10)
}
if( CopyNum == rev) 
{
    console.log("Palindrome Number")
}
else{
    console.log("Not a Palindrome")
}

}
const res = palindrome(num)

console.log(res)