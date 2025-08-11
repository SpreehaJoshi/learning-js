//let doesnt let two variable names be declared twice, var does
/* variable declared w var is declared globally (or locally inside function)
let is limited to block statement it was declared in */

//const -> read only variable

//mutate aray declared w const -> using backet
const arr = [3, 7, 9];
function editInPlace(){
  arr[1] = 10;
}
editInPlace();
console.log(arr);


//prevent object mutation -> Object.freeze()
function freezeObj(){
    const MATH_CONST = {
        PI: 3.14
    };

    Object.freeze(MATH_CONST);

    try{
        MATH_CONST.PI=99;
    }
    catch(ex){
        console.log(ex);
    }
    return MATH_CONST.PI;
}

const PI = freezeObj();
console.log(PI);