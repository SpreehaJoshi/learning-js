function whereTheFunction(){
    console.log("Hello World!")
}

whereTheFunction()

//passing arguments to function
function withArgs(a, b){
    console.log(a - b)
    console.log(a + b)
}

withArgs(50, 20)

//global scope -> defined outside function body
var myGlobal = 20
function f1(){
   oopsGlobal = 2 //no var so it makes it global automatically. if var then local
}

function f2(){
    var output = ""
    if(typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal + "\n"
    }
    else{
        console.log("undefined")
    }

    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal
    }
    else {
        console.log("Undefined")        
    }
    console.log(output)
}

f1()
f2()

//local scope
function myLocal(){
    var myVar = 5
    console.log(myVar)
}

myLocal()
//console.log(myVar) -> error bc tried to access outside of function

//local var takes precedence over global if same varname

//return value from function
function minusThis(num){
    return num - 8
}

console.log(minusThis(18))

//undefined values returned from function
var sum = 0
function addThree(){
    sum += 3
}
console.log(addThree)

//assignment w a returned value
function change(num){
    return (num+5)/2
}

changed = change(20)

console.log(changed)

//stand in line
function nextLine(arr, item){
    arr.push(item)
    return arr.shift()
}
var test = [1, 2 , 3, 4, 5]
console.log("Before: " + JSON.stringify(test)) //json.stringify chnages into string
console.log(nextLine(test, 6))
console.log("After: " + JSON.stringify(test))