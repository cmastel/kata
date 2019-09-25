function urlDecode(text) {
  // create an empty object where the keys and values will be stored
  let urlObject = {};

  // call the createKey function, which will create the key/value
  // pairs from the given text string, and store them in urlObject 
  urlObject = createKey(urlObject, text);

  // urlObject will be updated by calling the createSpaces function
  // this function will replace the "%20" characters in the values
  // with spaces
  urlObject = createSpaces(urlObject);
  
  return urlObject; // return the urlObject in the proper format
}

function createKey(urlObject, text) {
  // createKey takes the text string, and splits it into the 
  // key/value pairs

  // the while loop run until there are no longer any "&" characters
  // which is what separates the different key/value pairs
  let y = 0;
  while (y >= 0) {
    y = text.indexOf("&"); // will return -1 if there are no more "&"s
    let keyIndex = text.indexOf("="); // gets the index of the next "="
    let key = text.slice(0, keyIndex); // removes the key term from text
    let value;
    if (y > 0) { // removes teh value for the above key
      value = text.slice(keyIndex + 1, y);
    } else {
      value = text.slice(keyIndex + 1);
    }
    urlObject[key] = value; // creates the key/value pair in urlObject
    text = text.slice(y + 1); // updates text by removing the part of the 
    // string in the above key/value pair
  }
  return urlObject; // returns the revised urlObject
}

function createSpaces(urlObject) {
  // createSpaces replaces the "%20" characters in any value strings
  // with spaces
  const keys = Object.keys(urlObject); // gets an array of keys
  
  // loop through each key to get the associated value
  for (let i = 0; i < keys.length; i++) {
    let keyValue = urlObject[keys[i]]; // create a string of the value
    let y = 0;
    let newValue = []; // initialize an empty array to add each word into

    // loop through the value until there are no longer any "%20" characters
    while (y >= 0) {
      y = keyValue.indexOf("%"); // determine index of the next "%"
      let word;
      // slice the next word from the keyValue
      if (y > 0) {
        word = keyValue.slice(0, y); 
      } else {
        word = keyValue.slice(0);
      }
      keyValue = keyValue.slice(y + 3); // remove the above word and 
      // "%20" character from keyValue
      newValue.push(word); // add word to the newValue array
    }
    urlObject[keys[i]] = newValue.join(' '); // update the value in urlObject
  }
  return urlObject;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
