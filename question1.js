 
 compute () 

 

function compute(){

var  a = prompt("enter expression:(e.g 2,2,+)")// Input  2,2,+ Output 4’
expression = a.split(",")

//alert(expression[1])

var op1= expression[0]
var op2 = expression[1]
var operator=expression[2]

let op1Num = getNumber(op1.trim())
let op2Num = getNumber(op2.trim())

op1Tally=getTally(op1Num) 
op2Tally=getTally(op2Num)

if(operator.trim() == '+' ){  
 
    alert(  (op1Tally +  "" + op2Tally).length )
             
}
else if(operator == '-' ){
       
    alert( subtract(op1Num, op2Num) )
}
else if(operator == '*' ){
    var result=""
    for(i=1; i<= op2Num; i++)
       result += op1Tally
    
       alert(result.length)
}

else if(operator == '/' ){
    

    alert(divide(op1Num,op2Num))
}

}
function subtract (x, y){

    while (y !=0 ){
     borrow = (~x ) & y;

     x= x ^ y ;

     y= borrow << 1;
    }
 

 return x;



}

function divide (dividend, divisor){
     sign = ((dividend < 0)  ^ (divisor < 0)) ? - 1:1
     dividend = Math.abs (dividend)
     divisor= Math.abs(divisor)

     quotient = 0

     while (dividend >= divisor){
         dividend -= divisor
         ++quotient
     }

     if(sign==-1) quotient = -quotient
     return quotient;

} 

function getTally(num){
    tally=""
    for(i=1; i<=num; i++)
          tally += "1"

    return tally
}

function getNumber(num){

    if(num == '1')
         return 1;
         
     else if(num == '2'){
        // alert(num)
         return 2;
        }
       
      else if(num=='3')
         return 3;

      else  if(num=='4')
         return 4;
         
       else  if(num=='5')
         return 5;
         
         else  if(num=='6')
         return 6;
         
         else  if(num=='7')
         return 7;
         
         else  if(num=='8')
         return 8;
         
         else  if(num=='9')
         return 9;
         
         return -1


}

