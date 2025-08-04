var myName = "Sapphire" /*can be used throughout the program*/

myName = 8

let ourName="Sagarmatha" /*Only in scope it's been declared in*/

const pi = 3.14 /*Cant be changed*/


//Assignment operation
var a; //var declaration. semicolon doesnt need to be there
var b = 2;

console.log(a)

a = 7;

b = a;

console.log(a) //allows to see in console
console.log(b)

//initializing variable while declaration
var c = 9

//uninitialized variables
var x = 5
var y = 10
var z = "Im stringy"

x=x+1
y=y+5
z=z+" lol!"

// console.log(x)
// console.log(y)
// console.log(z)

//case sensitivity in variables -> not same if capitalzation different. Use camelCasing

//adding numbers
var sum = 10 + 10
console.log(sum)

//subtracting
var diff = 35 - 30
console.log(diff)

//multiplication
var mult = 2*45
console.log(mult)

//divide
var divi = 20/5
console.log(divi)

var modul = 22%5
console.log(modul)

//increment
var myVar= 87
myVar++
console.log(myVar)

//decrement
var decVar = myVar
decVar--
console.log(decVar)

//decimals
var ourDecimal = 5.076, myDecimal = 2.012

//multiplying decimals
var product = ourDecimal * myDecimal //can divide, mod(remainder), 
console.log(product)

//augmented math operations -> += , -= , *= ...

//declare string variable
var firstName = "Sapphire"
var lastName = "Woes"

//excaping literal quotes -> use \ (escape sequence)
var myStr = "I am a \"double quoted\" string inside \"double quotes\""
console.log(myStr)

//w single quotes' or backticks`
var ourStr = '<a href="https://www.example.com">Link</a>'
console.log(ourStr)

/*
 \'    single quote
 \"    double q
 \\    backslash
 \n    newline
 \r    carriage return
 \t    tab
 \b    backspace
 \f    form feed
 */
