// Globally set the values of the various denominations
const values = {
  twentyDollar: 2000,
  tenDollar: 1000,
  fiveDollar: 500,
  twoDollar: 200,
  oneDollar: 100,
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1
}

function calculateChange(total, cash) {
  // determine the type of change required
  // input: total (number) -> cost in cents
  //        cash (number) -> amount paid in cents
  // return: changeGiven (object) -> { denomination: quantity }

  let changeNeeded = cash - total; // determine amount of change needed
  console.log("Total changeNeeded: " + changeNeeded);
  let changeGiven = {}; // create an empty object to store the change in
  
  // update the changeNeeded after each denomination is determined
  changeNeeded = quantity(changeNeeded, changeGiven, "twentyDollar");
  changeNeeded = quantity(changeNeeded, changeGiven, "tenDollar");
  changeNeeded = quantity(changeNeeded, changeGiven, "fiveDollar");
  changeNeeded = quantity(changeNeeded, changeGiven, "twoDollar");
  changeNeeded = quantity(changeNeeded, changeGiven, "oneDollar");
  changeNeeded = quantity(changeNeeded, changeGiven, "quarter");
  changeNeeded = quantity(changeNeeded, changeGiven, "dime");
  changeNeeded = quantity(changeNeeded, changeGiven, "nickel");
  changeNeeded = quantity(changeNeeded, changeGiven, "penny");

  return changeGiven; //
}

function quantity(changeNeeded, changeGiven, denomination) {
  // quantity determines the number of a certain denomination required
  // and updates the changeNeeded
  // inputs: changeNeeded (number) -> current amount of change needed
  //          changeGiven (object) -> object containing current denominations
  //          denomination (string) -> used to reference the values object
  //                                    and the changeGiven object
  // return: finalChange (number) -> the revised amount of change required

  let finalChange = changeNeeded;
  if (changeNeeded >= values[denomination]) {
    // determines if desired denomination can contribute to changeNeeded
    // if so, the denomination is added to changeGiven with the associated
    // whole number of units required
    changeGiven[denomination] = Math.floor(changeNeeded / values[denomination]);
    
    // changeNeeded is updated
    finalChange = changeNeeded - (changeGiven[denomination] * values[denomination]);
    //finalChange = changeNeeded;
  }
  return finalChange;
}

// test the function
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
