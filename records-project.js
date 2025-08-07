 var collection = {
    "2548" : {
        "album" : "Heaven Knows",
        "artist" : "pinkpantheress",
        "tracks" : [ "Feel Complete",
            "True Romance"
        ]
    },

    "2001" : {
        "album" : "Amir",
        "artist" : "Tamino",
        "tracks" : [ "Habibi",
            "Indigo Night"
        ]
    },

    "1001" : {
        "artist" : "Ariana Grande",
        "tracks" : [ ]
    },

    "3001" : {
        "album" : "Wasteland, Baby!"
    }
    
 };

 //copies object
 var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecord(id, prop, value){
    if(value === "") {  //if value passed is empty then delete record
        delete collection[id][prop]
    }
    else if(prop === "tracks"){ //two possiblities: equals itself or null. push value into tracks
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value)
    }
    else{
        collection[id][prop] = value //default
    }

    return collection
 }

console.log(collectionCopy)
console.log(updateRecord("1001", "tracks", ""))
// console.log(updateRecord("1001", "tracks", "Moonlight"))
//  console.log(updateRecord("3001", "artist", "Dustin Conrad") + "\n\n\n")
