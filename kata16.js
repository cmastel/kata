function blocksAway(directions) {
  let coordinates = [0, 0]; // set the starting coordinates

  // set the direction for the first move
  // this is separate from subsequent decisions as the "left"
  // or "right results in either "north" or "south"
  let currentHeading;
  if (directions[0] === "left"){
    currentHeading = "north";
  } else {
    currentHeading = "east";
  }

  // loop through each of the direction decisions in the 
  // directions array
  // it increases by two each time to move n to the next 
  // direction decision
  for (let n = 0; n < directions.length; n +=2) {
    // use a switch statement to update the coordinates and
    // currentHeading based on the currentHeading
    switch (currentHeading) {
      case "north":
        coordinates[1] += directions[n + 1]; // modify the "north" coordinate
        if (directions[n + 2] === "right"){ // check the next direction decision
          currentHeading = "east"; // update currentHeading accordingly
        } else {
          currentHeading = "west";
        }
        break;
      case "east":
        coordinates[0] += directions[n + 1]; // modify the "north" coordinate
        if (directions[n + 2] === "right") { // check the next direction decision
          currentHeading = "south"; // update currentHeading accordingly
        } else {
          currentHeading = "north";
        }
        break;
      case "south":
        coordinates[1] -= directions[n + 1]; // modify the "north" coordinate
        if (directions[n + 2] === "right") { // check the next direction decision
          currentHeading = "west"; // update currentHeading accordingly
        } else {
          currentHeading = "east";
        }
        break;
      case "west":
        coordinates[0] -= directions[n + 1]; // modify the "north" coordinate
        if (directions[n + 2] === "right") { // check the next direction decision
          currentHeading = "north"; // update currentHeading accordingly
        } else {
          currentHeading = "south";
        }      
        break;
    } // end switch statement
  } // end for loop

  // define distance as the north and east coordinates resulting from the above
  // for loop
  let distance = {"east": coordinates[0], "north": coordinates[1]};
  return distance;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
