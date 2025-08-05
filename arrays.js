var myArray = ["Josh", 23]

var ourArrays = ["Quincy", 1]

//nested array
var nestArray = [["Joshua", 2], ["Kyle", 602]]

//access data in array
var myData = myArray[0]
console.log(myData)

var nestData = nestArray[1][0]
console.log(nestData)

//modifying array using indexes -> couldnt be done in string
var myNumber = [14, 10, 12]
myNumber[1] = 2
console.log(myNumber)

//accessing multi dimensional array using indexes
var bigArray = [[1,2,3], [4,5,6], [7,8,9],[[10,11,12], 13,14]]
var bigData = bigArray[3][0][1] //goes to [[10..]13,14]->[10...12]->11
console.log(bigData)

//manip array w push() -> append data to end of array
var theArray = [["Josh", 23], ["cat", 2]]
theArray.push(["dog", 3])
console.log(theArray)

//manip array w pop()
var toPop = [1, 2, 3, 4]
var removedFromArray = toPop.pop()
console.log(removedFromArray)
console.log(toPop)

//manip w shift() -> removes 1st element
var shiftArray = ["Simpy", 55, ["cat"]]
var removedValue = shiftArray.shift()
console.log(removedValue)
console.log(shiftArray)

//manip w unshift() -> adds to beginning of array
shiftArray.unshift("Blood")
console.log(shiftArray)

//shopping list nested array
var myList = [["cereal", 3], ["milk", 2], ["apples", 5], ["juice", 3], ["eggs", 12]]