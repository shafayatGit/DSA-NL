//? array.reduce(callbackFn, initialValue)
//?Reduce() means to reduce an array of items to a single value. It takes a callback function that is applied to each item in the array, along with an optional initial value for the accumulator.
//? .reduce((accumulator, currentValue) => { /* ... */ }, initialValue); 
// 🔹 Why it’s used:

// To combine array elements into one value (sum, product, object, etc.)

// Replaces loops like for or forEach in many use cases

// Useful for data transformation and aggregation

// 🔹 Common use cases:

// ✅ Sum or average
// ✅ Flattening arrays
// ✅ Counting items
// ✅ Grouping data
// ✅ Building objects from arrays


// Subtotal calculation example:
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subtotal = cartItems.reduce((subtotal, product)=>{
    return subtotal = subtotal + (product.price * product.quantity);
}, 0)
//console.log(subtotal)


// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  //console.log(bestPlayer, player);
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }

  return player;
}, players[0]);

console.log(bestScorer);