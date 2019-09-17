const conditionalSum = function(values, condition) {
  // input: values (array of numbers)
  //        condition ("even" or "odd")
  // return: the sum of all numbers in value that match the condition  
  let sum = 0; // initialize sum at 0

  for (let i = 0; i < values.length; i++) {
    // check each values[i] to see if it is "even"
    if (values[i] % 2 === 0 && condition === "even") {
      sum += values[i]; // add to sum if even
    // check each values[i] to see if it is "odd"  
    } else if (values[i] % 2 != 0 && condition === "odd") {
      sum += values[i]; // add to sum if odd
    };
  };
  return sum;
};

// check function with sample arrays
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));