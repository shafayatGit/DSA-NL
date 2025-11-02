// ? Sort
// Sorting number array in ascending order
const nums = [5,30.50,20,10,100,3,7,8];
const sortedNumsAsc = nums.sort((a,b)=>a-b); //ascending order
console.log(nums); //! sort method original array ke modify kore dey tai ekhane nums array tao sorted hoye gese
console.log(sortedNumsAsc);

// Sorting String array in alphabetical order
const fruits = ["Banana", "apple", "Mango", "pineapple", "Orange"];
//?const sortedFruits = fruits.sort(); //by default sort method string gulo ke alphabetical order e sort kore so choto or boro hater alpha er hole shomossha
const sortedFruits = fruits.sort((a,b)=> a.localeCompare(b)); //ei method ta case insensitive vabe sort kore
console.log(sortedFruits);

// ? Nested Array Flat
const nestedArr = [1,2,[3,4],[5,6,[7,8]]];
//const flatArr1 = nestedArr.flat(); //simple array te convert hoye jabe but only one level deep e flat korbe
// const flatArr2 = nestedArr.flat(2); //jodi 2 level deep flat korte chai tahole 2 dite hobe  
const flatArr1 = nestedArr.flat(Infinity); //jodi sob level deep flat korte chai tahole //!(Infinity) dite hobe
console.log(flatArr1);

//? Combining Set and Flat
const tags = [
    ["electronics", "gadgets"],
    ["books", "literature"],
    ["electronics", "audio"],
    ["gadgets", "accessories"],
]
const uniqueTags = [...new Set(tags.flat(Infinity))]; //flat kore set er moddhe dile unique value gulo pawa jabe | ...spread operator diye object ta k access korsi then [] diye abar array te convert korsi
console.log(uniqueTags);