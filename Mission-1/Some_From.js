// Some --->>> Returns True or False 
// const numbers = [1, 2, 3, 4, 5];

// const hasEvenNums = numbers.some(num => 
//     //{ return num % 2 === 0} //! Curly braces use korle return dite hobe must
//     num % 2 === 0 //! Jodi single expression thake tahole curly braces and return nao dite pari
// );
// console.log(hasEvenNums); // true

const currentRoles = ["user", "editor"];
const featureRoles = ["admin", "manager"];
const canAccess = currentRoles.some(role => featureRoles.includes(role)); //cross checking two arrays
console.log(canAccess); // false

// Array.from() --->>> Creates a new Array instance from an array-like or iterable object.
const arr = Array.from({length: 5}).fill(0); //ekta object theke array create korsi jeta 5 length er hobe and sob gula element er value hobe 0
const IndexFunc = Array.from({length: 5}, (_, index) => index + 1); //ekta object theke array create korsi jeta 5 length er hobe and element gulo hobe index + 1
