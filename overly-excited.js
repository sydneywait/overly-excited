console.log("********************practice one, Dancing Walruses")

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
//add option for user to change the punctuation
function addExcitement (theWordArray, punctuation) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // buildMeUp = `${buildMeUp} ${sentence[i]}`
  
    // If the current value of `i` divided by 3 has no
    // remainder, add an exclamation point to the end of
    // the word and then concatenate it to `buildMeUp`.

    
    if((i + 1) % 3 === 0){
        buildMeUp = `${buildMeUp} ${sentence[i]}${punctuation}`
    }
    // Otherwise, just concatenate the word itself.
    else{
        buildMeUp = `${buildMeUp} ${sentence[i]}`
    }

    
    

        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array.  User should add which punctuation or character they want to see 
addExcitement(sentence, "?")


console.log("***************Practice two-")