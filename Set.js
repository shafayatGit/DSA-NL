// ***Features***               Set-Array                       ArrayList(JAVA)
// Duplicates	                ❌ Not allowed	                ✅ Allowed
// Access by index	            ❌ No	                        ✅ Yes
// Order preserved	            ✅ Yes (insertion order)	        ✅ Yes
// Lookup time	                ✅ O(1) average	                ❌ O(n)
// Use case	                    Unique collection	             Ordered, indexed collection



// ----->>>Common Methods
// Method	        Description	                Example
// add(value)	    Adds a new value	        set.add(1)
// delete(value)	Removes a value	            set.delete(2)
// has(value)	    Checks if value exists	    set.has(3). ---->>>Returns true/false
// clear()	        Removes all values	        set.clear()
// size	            Returns number of elements	set.size. ---> here size is not a function like JAVA Array's length property.


const set = new Set(); // No duplicates allowed and use like an object key-value pair
// console.log(set); // --> Set(0) {} --> Empty Set or Item Count 0

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(5); // Duplicate, will be ignored

console.log(set); // --> Set(5) { 1, 2, 3, 4, 5 } 
console.log(set.size); // --> 5
console.log(set.has(3)); // --> true
console.log(set.has(6)); // --> false


// New Set with Object References
const nameSet = new Set();
const Alice = { name: "Alice" };
const Bob = { name: "Bob" };
const Charlie = { name: "Charlie" };

nameSet.add(Alice);
nameSet.add(Bob);
nameSet.add(Charlie);
nameSet.add(Alice); // Duplicate reference, will be ignored


// Iterating over Set
nameSet.forEach((value) => { // Set does not have index, so forEach only gives value and do not return anything(undefined)
  console.log("Looping:",value); 
});

//  Converting Set to Array
const nameArray = Array.from(nameSet);
console.log("After Converting",nameArray); // --> [ { name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' } ]
console.log("Accessing By Index:", nameArray[1]); 

console.log("NameSet:",nameSet); // --> Set(3) { { name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' } } like key-value pair
console.log("Size:",nameSet.size); // --> 3

nameSet.delete(Bob); // delete Value(Bob) from the Set
console.log("After Deleting Bob:",nameSet); // --> Set(2) { { name: 'Alice' }, { name: 'Charlie' } }

nameSet.clear();
console.log("After clearing All:",nameSet); // --> Set(0) {}  

const Array1 = new Set(["Apple", "Banana", "Orange"]);
const FruitArray = Array.from(Array1);
FruitArray.push("Mango"); // Now we can use array methods like push
console.log("Fruit Array:",FruitArray); // --> [ 'Apple', 'Banana', 'Orange', 'Mango' ]
FruitArray.pop(); // Remove last element
console.log("Fruit Array After Pop:",FruitArray); // --> [ 'Apple', 'Banana', 'Orange' ]