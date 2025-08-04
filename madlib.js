function madlibs(adjective, noun, verb, adverb){
    var result=""
    result += "The " + adjective + " " + noun + " " + verb + " to the pool " + adverb + "."
    return result
}

console.log(madlibs("big", "dog", "ran", "quickly"))