function camelCase(input) {
  /*  camelCase takes a string, with possible spaces, and
  *   returns it in camelCase format (initial character after
  *   a space is uppercase)
  *   input: input (string)
  *   return: newString (string) 
  */
  newString = ""; // initialize an empty string, which will have characters added
  prevSpace = false; // tracks whether the previous character was a space

  for (let i = 0; i < input.length; i++) {
    // loop through each character in the input string
    if (input[i] != " ") {
      if (prevSpace === false || newString === "") {
        // if the character is not a space, and the previous
        // character wasn't a space, add it to newString
        newString += input[i];
      } else if (prevSpace === true) {
        // if the character is not a space, and the previous
        // character was a space, add the Uppercase version to 
        // newString
        newString += input[i].toUpperCase();
      }
    prevSpace = false; // reset preSpace to false to ensure accurate tracking
    }

    if (input[i] === " ") {
      // if the character is a space, set preSpace to true without 
      // adding the character to newString
      prevSpace = true;
    }
  }

return newString;
};


// function test with various strings
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidociious"));
console.log(camelCase("  spaced string  "));