var voxel = {x: 3.6, y:7.4, z: 6.45};

const {x:a, y:b, x:c} = voxel;  //get x from voxel & assign to a

const AVG_TEMP = { //object creation
    today: 77.5,
    tomorrow: 79
};

function getTemp(avgTemperature){
    const {tomorrow: tempOfTmrw} = avgTemperature;
    return tempOfTmrw;
}

console.log(getTemp(AVG_TEMP));

//destucturing w nested objects
const LOCAL_FORECAST = {
    tdy: {min: 71, max: 83},
    tmrw: {min: 73.3, max: 90.3}
};

function getMaxOfTmrw(forecast){
    const {tmrw:{max: maxOfTmrw}} = forecast;
    return maxOfTmrw;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//destructuring to assign variables form arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6]
console.log(z, x, y);

let p = 8, q = 6;
(()=>{
    "use strict"
    [p, q] = [q, p] //switch
})();

console.log(p + " & " + q);

//destructuring w rest operator
const source = [1,2,3,4,5,6,7,8,9,10]
function removeTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeTwo(source);
console.log(arr);
console.log(source);

//destructuring to pass object as function's parameters -> used for APIs
const stats={
    max: 56.78,
    min: 20.1,
    average: 35.22,
    deviation: 4.4
};

const half = (function(){
    return function half({max, min}){
        return (max+min)/2.0;
    };
})();

console.log(stats);
console.log(half(stats));
