//booleans -> True , False

//if
/*if(condition){
    ... ->true
  }
    ... -> false, nothing happens
*/

/*
 3 === 3 -> true (strict equality operator -> doesnt convert datatype to match)
 3 === '3' -> false
 BUT
 3 == '3' -> true
*/

//comparison with inequality !=
//comparison w strinct inequality !==
//comparison w logical and arithmetic operators

//else statement
/* if(condition){
        ...
    }
   else{
        ...
    }
*/


//else if
/*
 if(conditn1){
 
 }
 else if(condtn2){
 
 }

 else{
    
 }

*/

var names = ["Hole-in-one!", "Eagles", "Birdie", "Par", "Bogey", "Double Bogey"];

function score(par, strokes){
    if(strokes==1){
        return names[0];
    }
    else if(strokes <= par-2){
        return names[1];
    }
    else if(strokes == par-1){
        return names[2];
    }
    else if(strokes == par){
        return names[3];
    }
    else if(strokes == par+1){
        return names[4];
    }
    else if(strokes == par+2){
        return names[5];
    }
}

console.log(score(5,4));

//switch case : sane as C/C++