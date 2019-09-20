function multiplicationTable (maxValue) {
  // input - maxValue (number)
  // return - newString (string)
  // multiplicationTable outputs a multiplaction table based on
  // the maxValue provided

  let newString = ""; // initialize an empty string where the table will be stored

  for (let x = 1; x <= maxValue; x++) { // creates the number of rows
    for (let y = 1; y <= maxValue; y++) { // creates the number of columns
      newString += (y * x) + " "; // each number added to newString
      if (y === maxValue) {
        // when y reaches maxValue (i.e. end of the row), and new line character is added
        newString += '\n';
      }
    }
  }
return newString;
}

// examples to test the function
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));