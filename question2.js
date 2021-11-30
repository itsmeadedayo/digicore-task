inputPlayer1 = prompt("enter scores for player1:(e.g 1, 4, 7, 2, 4)")
 array1 = inputPlayer1.split(",")//[1, 4, 7, 2, 4]  //Tom
 
 inputPlayer2= prompt("enter scores for player2:(e.g 3, 4, 2, 4, 4)");
 array2 = inputPlayer2.split(",")//[3, 4, 2, 4, 4]  //jack

 getOverallScore( array1, array2)  // Tom [1, 4, 7, 2, 4] Jack [3, 4, 2, 4, 4]



 function getOverallScore( arr1,  arr2){
       
    tomOverallWinScores=0,jackOverallWinScores=0

    for(i=0; i<arr1.length; i++){
            if(arr1[i] > arr2[i])
                    tomOverallWinScores = tomOverallWinScores + 1 

            if(arr2[i] > arr1[i] ) 
                  jackOverallWinScores = jackOverallWinScores +1

         
    }

    alert( tomOverallWinScores    + "," +    jackOverallWinScores )

}