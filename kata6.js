function repeatNumbers(data) {
  /*
  *   input: data (array of two number arrays) -> each sub-array contains two
  *           numbers, the first is to be repeated by the second number of times
  *   output: dataString (string)
  */
  let dataString = ""; // initialize an empty array
  for (let i = 0; i < data.length; i++) { // loop through the number of sub-arrays
    for (let j = 0; j < data[i][1]; j++) { // loop throug the number of "repeats"
      dataString += data[i][0]; // add the appropriate number to dataString
    }
    // once the current overall loop is completed, check if there is another
    // loop to do. If so, add the ", " to the dataString
    if (i + 1 < data.length) {
      dataString += ", ";
    }
  } 
  return dataString;
}

// log to the console a few examples
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92,2]]));