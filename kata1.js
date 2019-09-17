let sumLargestNumbers = function(data) {
  // input: data (array of numbers)
  // return: the sum of the two largest numbers in data
  let largest1 = 0;
  let largest2 = 0;

  // loop through the data array
  for (let i = 0; i < data.length; i++) {
    // check each item against largest1, if data[i] is larger, then
    // put largest1 into largest2, and replace largest1 with data[i]
    if (data[i] >= largest1) {
      largest2 = largest1;
      largest1 = data[i];
    } else if (data[i] > largest2) {
      // check data[i] against largest2, and replace if larger
      largest2 = data[i]
    };
  };
  return largest1 + largest2; // return the sum of the two largest numbers
};

// check function with sample arrays
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));