const magic = () => new Date();

/* longer/og
var magic = () => { //used to be function(){}
    return new Date();
}
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [5, 6, 7]));

//higher order functions like map, filter, reduce -> when 1 func takes another func as args, use arrow function

//rest operator -> ...varname
//spread operator -> adds to alr existing array [...varname]