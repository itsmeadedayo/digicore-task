kp1 = prompt("kangaroo1,  initial location: (e.g 2 positive number)")
kp2 = prompt("kangaroo 2, enter initial location:(e.g positive number 3) ")

kv1= prompt("kangaroo1, enter rate: ")
kv2= prompt("kangaroo2, enter rate: ")

if(!isNaN(kp1) || parseInt(kp1,10) < 1 ){
    alert("please enter a valid number")
}
else if(!isNaN(kp2) || parseInt(kp2,10) < 1 ){
    alert("please enter a valid number")
}
else if(!isNaN(kv1) || parseInt(kv1,10) < 1 ){
    alert("please enter a valid number")
}
else if(!isNaN(kv2) || parseInt(kv2,10) < 1 ){
    alert("please enter a valid number")
}


else

  {
    result = isSameLocationPossible(kp1, kp2, kv1, kv2)

    alert(result)
  }



function isSameLocationPossible(x1,x2,v1,v2){
    // x1 kangaroo1 location, v1 kangaroo rate of change of distance per jump, nextX1 next location after a jump 
    nextX1= x1 + v1 
  
    // x2 kangaroo2 location, v2 kangaroo rate of change of distance per jump, nextX2 next location after a jump 
    nextX2 = x2 + v2

    if(nextX1==nextX2)
        return "YES"
    else 
          return "NO"
}