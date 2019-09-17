const instructorWithLongestName = function(instructors) {
  // input: instructors (array of objects {name: "string", course: "string"})
  let longestIndex = 0; // intialize index of longest name at 0
  let longestName = 0;  // initialize the length of the longest name at 0

  for (let i = 0; i < instructors.length; i++) {
    let name = instructors[i].name; // create a variable of element in the name key
    if (name.length > longestName) {
      // check if current name length is longest
      longestIndex = i; // update the index of the longest name
      longestName = name.length; // update the length of the longest name
    };
  };
  return instructors[longestIndex];
};

// check function with sample array of objects
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));