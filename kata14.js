function squareCode(message) {
  // remove spaces from message
  message = message.split(' ').join('');
  
  // determine the number of columns
  let characters = message.length;
  let columns = Math.ceil(Math.sqrt(characters));
  let rows = Math.ceil(characters / columns);

  // create an array based on the number of rows and columns
  // insert message into the array, wrapping the characters through
  // the number of columns
  let codeArray = [];
  for (let i = 0; i < rows; i++) {
    codeArray[i] = message.slice(0, columns);
    message = message.slice(columns);
  }

  // create a separate array to store the message as it is coded
  let codedMessage = [];
  for (let x = 0; x < columns; x++) {
    let line = [];
    // for each column in codeArray, create an array in codedMessage
    for (let y = 0; y < rows; y++) {
      // take the same character placing (column) in each array of codeArray
      line.push(codeArray[y][x]);
    }
    // join the recent array together to create an array of strings
    // in codedMessage
    codedMessage.push(line.join(''));
  }
  // join the arrays together into a string, with spaces separating
  // each array
  return codedMessage.join(' ');
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground go would have given us roots"));
