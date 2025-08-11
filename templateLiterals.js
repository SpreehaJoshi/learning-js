const person = {
    name: "Alucard Tepes",
    age: "unknown"
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old!`;
console.log(greeting);

//challenge
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", 'no-dup-keys']
};

function makeList(arr){
    const displayArray = [];
    for(let i=0; i<arr.length; i++){
        displayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return displayArray;
}
const displayArray = makeList(result.failure);

console.log(displayArray);

//concise string literals using simple fields
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Hari", 20, "Male"));

//concise declarative functions
const bicycle = {
    gear: 2,
    setGear(newGear){ //function inside object made easier
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);