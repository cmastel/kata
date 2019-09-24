function makeCase(input, style) {
  /*
  * input: input (string) -> a string to be modified
  *         style (string) -> the casing style in which input is to 
  *                           be modified
  *  return: newArray.join() (string) -> a string with input in the 
  *                                       revised casing style
  */
 
  let newArray = []; // initialize an empty string (easier to modify than string)
  let prevSpace = false; // tracks whether the previous element was a string
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < input.length; i++) {
    // loop through each element of input
    newArray.push(input[i]); // add the current element to newArray

    if (style.includes('camel')) { 
      if (newArray.length === 1) { // set the first element to lower case
        newArray[i] = newArray[i].toLowerCase();
      } 
      if (input[i] === " ") {
        // if current element is a space, remove it from newArray
        // and set the space tracker to true
        prevSpace = true;
        newArray.pop();
      }
      if (input[i] != " " && newArray.length > 1) {
        // for each (non-first) letter
        if (prevSpace === true) {
          // make the element uppercase if the previous element
          // was a space
          newArray[newArray.length - 1] = input[i].toUpperCase();
        } else {
          // make the element lowercase if the previous element
          // wasn't a space
          newArray[newArray.length - 1] = input[i].toLowerCase();
        }
        prevSpace = false; // set space tracker to false
      }
    }

    if (style.includes('pascal')) {
      if (newArray.length === 1) {
        // set the first element to uppercase
        newArray[i] = newArray[i].toUpperCase();
      }
      if (input[i] === " ") {
        // if current element is a space, remove it from newArray
        // and set the space tracker to true
        prevSpace = true;
        newArray.pop();
      }
      if (input[i] != " " && newArray.length > 1) {
        // for each (non-first) letter
        if (prevSpace === true) {
          // make the element uppercase if the previous element
          // was a space
          newArray[newArray.length - 1] = input[i].toUpperCase();
        } else {
          // make the element lowercase if the previous element
          // wasn't a space
          newArray[newArray.length - 1] = input[i].toLowerCase();
        }
        prevSpace = false; // reset space tracker
      }
    }

    if (style.includes('snake')) {
      // for snake style, replace each space with "_"
      if (newArray[i] === " ") {
        newArray[i] = "_";
      }
    }

    if (style.includes('kebab')) {
      // for kebab style, replace each space with "-"
      if (newArray[i] === " ") {
        newArray[i] = "-";
      }
    }

    if (style.includes('title')) {
      if (newArray[i] != " ") {
        if (i == 0) {
          // set the first element to uppercase
          newArray[i] = newArray[i].toUpperCase();
        } else if (newArray[i - 1] === " ") {
          // set the element to uppercase if the previous element
          // is a space
          newArray[i] = newArray[i].toUpperCase();
        }
      }
    }
    
    if (style.includes('vowel')) {
      if (newArray[i] != " ") {
        if (vowels.includes(newArray[i])) {
          // set each vowel to upppercase
          newArray[i] = newArray[i].toUpperCase();
        } else {
          // ensure each consonant is lowercase
          newArray[i] = newArray[i].toLowerCase();
        }
      }
    }

    if (style.includes('consonant')) {
      if (newArray[i] != " ") {
        if (vowels.includes(newArray[i])) {
          // ensure each vowel is lower case
          newArray[i] = newArray[i].toLowerCase();
        } else {
          // set each consonant to uppercase
          newArray[i] = newArray[i].toUpperCase();
        }
      }
    }

    if (style.includes('upper')) {
      if (newArray[i] != " ") {
        // set each element to uppercase
        newArray[i] = newArray[i].toUpperCase();
      }
    }

    if (style.includes('lower')) {
      if (newArray[i] != " ") {
        // set each element to lowercase
        newArray[i] = newArray[i].toLowerCase();
      }
    }
        
  };
  
  return newArray.join(''); 
  // use .join() to transform newArray into a string
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
