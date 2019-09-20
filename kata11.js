function organizeInstructors(instructors) {
  // Provides a summary of the instructors for each courese.
  // input: instructors (array of objects) -> { name: (string), course (string): }
  // return: courseSummary (object) -> {course: (string) , instructors: (array of string) }

  let courseSummary = {}; // initialize empty object

  // loop through instructors array, and provide each unique course name
  // as a key. Each course key will then have an empty array as the value
  for (let i = 0; i < instructors.length; i++) {
    let courseName = instructors[i].course;
    courseSummary[courseName] = [];
  }
  
  // loop through the instructors array again, this time adding the instructor
  // name to the array value based on the key (course)
  for (let j = 0; j < instructors.length; j++) {
    courseSummary[instructors[j].course].push(instructors[j].name);
  }

  return courseSummary;
}

// sample function calls
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
