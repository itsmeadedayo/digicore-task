 
 compute () 

 

function compute(){

var  a = prompt("enter expression:(e.g 2,2,+)")// Input  2,2,+ Output 4’
expression = a.split(",")

//alert(expression[1])

var op1= expression[0]
var op2 = expression[1]
var operator=expression[2]

if(operator.trim() == '+' ){  
 
    alert( add (  op1 , op2 ) )
             
}
else if(operator == '-' ){
       
    alert( subtract(op1 , op2) )
}
else if(operator == '*' ){
    
    
       alert(multiply(op1 ,op2))
}

else if(operator == '/' ){
    

    alert(divide(op1 , op2))
}

}

function multiply(x,y){
    // if(y == 0)
    //  return 0

    //  if(y > 0)
    //     return (x + multiply(x, y-1))

    // if(y < 0)
    //    return -multiply(x, -y)
 
    //  return -1
    x = Number(x)
    y=Number(y)
       result=0
    for(i=1; i<=y; i++){
        result += x
    }
    return result
}


function add(x,y){
    while (y != 0){
        carry = x & y
        x = x ^ y
        y = carry << 1
    }

    return x
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

