//object creation
var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails of" : 1,
    "tagline" : ["Cute", "Friendly"]
};

//accessing values w .
var nameValue = ourDog.name;
var tagValue = ourDog.tagline[1];

console.log(nameValue);
console.log(tagValue);

//if varname has space use [ ] to access them
var nValue = ourDog["tails of"]; //or ''
console.log(nValue)

//accessing using variables
var test ={
    12: "Priya",
    16: "Jyoti",
    20: "Nasmita"
};

var cName = 20;
var player = test[cName];
console.log(player);

//updating object value
ourDog.name = "Goddy";
console.log(ourDog.name);

//adding new properties
ourDog.bark = "meow meow";
console.log(ourDog);

//deletion
delete ourDog.bark;
console.log(ourDog);

//object for lookup

//testing objs for property -> hasOwnProperty

function check(checkProp){
    if (ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    }
    else{
        return "Not found";
    }
}

console.log(check("legs")); //gives 4

//manip complex objs
//accessing nested objects
//accessing nested array