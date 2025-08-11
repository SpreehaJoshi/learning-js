var contacts = [
    {
        "firstName" : "Harry",
        "lastName" : "Potter",
        "number" : "9888888",
        "likes": ["Treacle Tart", "Cake"]
    },
    {
        "firstName" : "Kill",
        "lastName" : "Bill",
        "number" : "9888899",
        "likes": ["Murder", "Swords", "Blood"]
    },
    {
        "firstName" : "Alucard",
        "lastName" : "Tepes",
        "number" : "unknown",
        "likes": ["Friends", "Belmonds", "Blood"]
    },
    {
        "firstName" : "Violet",
        "lastName" : "Vander",
        "number" : "999999",
        "likes": ["Gauntlets", "Blue"]
    }
];

function lookUpProfile(name, prop){
    for (var i = 0; i<contacts.length; i++){
        if(contacts[i].firstName == name){
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Kill", "likes");
console.log(data);