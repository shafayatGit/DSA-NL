const obj = {
    NextLevel : {courseId: 101, level: 2},
    "Programming Hero" : {courseId: 102, level: 1},
}
console.log(obj.NextLevel); //----> Here we can access the property directly using dot notation also Bracket notation.
console.log(obj["Programming Hero"]); //----> Here if we want to access the property having space in between we have to use this bracket notation.


const mapObj =new Map();

const course1 = {name: "Programming Hero", courseId: 102, level: 1};
const course2 = {name: "NextLevel", courseId: 101, level: 2};

mapObj.set(course1,{ enrolledStudents: 4000, price: 5500});
mapObj.set(course2,{ enrolledStudents: 2500, price: 6500});

mapObj.forEach((value,key) => {
    console.log("Course Name:", key.name)
    console.log("Course ID:", key.courseId);
    console.log("Level:", key.level);
    console.log("Enrolled Students:", value.enrolledStudents);
    console.log("Price:", value.price);
    console.log("-----");
})

console.log(mapObj); // here course 1 and 2 will be the key of the map and the enrolledStudents and price will be the value of the map.

// ***********Important*************
mapObj.forEach((value, key) => {
    key.name = "Updating from Map " + key.name; // We can manipulate the key object properties directly from the map using forEach method.
    value.price = value.price + 300 // We can also add new properties to the key object directly from the map using forEach method.
})
console.log(mapObj)

const mapObjArrayOfKeys = [...mapObj.keys()]; //Can make an array of keys using spread operator 
const mapObjArrayOfValues = [...mapObj.values()]; //Can make an array of values using spread operator 




// ⚙️ 1️⃣ Basic Concept
// Feature	                        Object	                                                 Map
// Purpose	     |       General data structure for key-value pairs	   |     Dedicated collection for key-value data
// Introduced	 |           Since beginning of JS	                   |                 ES6 (2015)

// 💻 2️⃣ Syntax & Example
// 🔸 Object:
// const obj = {
//   name: "Shafayat",
//   age: 22
// };

// console.log(obj.name); // Shafayat
// console.log(obj["age"]); // 22

// 🔹 Map:
// const map = new Map();
// map.set("name", "Shafayat");
// map.set("age", 22);

// console.log(map.get("name")); // Shafayat
// console.log(map.get("age"));  // 22

// 🧠 3️⃣ Key Differences Explained   
// Feature	                                    Object	                                                      Map
// Key types	       |             Keys are strings or symbols only	        |            Keys can be any type (string, number, object, function, etc.)
// Iteration order     |   	Unordered (mostly insertion order, but not guaranteed for older JS versions)  |	Guaranteed insertion order
// Default keys	       |     Comes with prototype keys (like toString, hasOwnProperty)	       |             Pure — no default keys
// Performance	       |             Slower for frequent additions/removals	         |             Faster and optimized for dynamic data
// Size property	   |                Must use Object.keys(obj).length	         |               Built-in .size property
// Methods	           |                 Basic (obj[key], delete obj[key])	         |          Rich API: set, get, delete, has, clear
// Serialization	   |                     Easy with JSON.stringify()	             |       Not directly serializable (must convert manually)
// Best use case	   |         When you need a simple data model or JSON structure	  |       When you need a dynamic key-value collection or frequent operations


// 🧮 4️⃣ Examples of Key Flexibility
// ❌ Object (only string keys)
// const obj = {};
// const key1 = { id: 1 };
// obj[key1] = "Hello";
// console.log(obj); // { '[object Object]': 'Hello' }


// JS converts the key object into a string → '[object Object]'

// ✅ Map (any key type)
// const map = new Map();
// const key1 = { id: 1 };
// map.set(key1, "Hello");
// console.log(map.get(key1)); // Hello


// Map keeps the object key reference — no conversion!

// 🧰 5️⃣ Useful Map Methods
// Method	               |             Description	         |           Example
// .set(key, value)	       |         Add or update a value	     |       map.set('a', 1)
// .get(key)	           |             Retrieve a value	     |          map.get('a')
// .has(key)	           |             Check if key exists	 |           map.has('a') --> returns true or false
// .delete(key)	           |             Remove entry	         |          map.delete('a')--> deletes single entry
// .clear()	               |             Remove all	             |           map.clear()---> deletes all entries
// .size	               |             Count entries	         |            map.size        


// 🔄 6️⃣ Iteration Comparison
// Object:
// const obj = { a: 1, b: 2 };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// Map:
// const map = new Map([
//   ["a", 1],
//   ["b", 2]
// ]);

// map.forEach((value, key) => {
//   console.log(key, value);
// });

// 🧠 7️⃣ Conversion Between Them
// Object → Map
// const obj = { a: 1, b: 2 };
// const map = new Map(Object.entries(obj));
// console.log(map);

// Map → Object
// const map = new Map([["a", 1], ["b", 2]]);
// const obj = Object.fromEntries(map);
// console.log(obj);

// ⚡ 8️⃣ When to Use Which?
// Use Case	                                                           |       Use
// Simple structured data (e.g., user info, configs)	               |     Object
// Dynamic key-value data (e.g., caching, lookups, frequent updates)   |        Map
// Need non-string keys (e.g., DOM nodes, object references)	       |        Map
// Need JSON conversion	                                               |     Object


// 🧩 Quick Summary
// Aspect	           |        Object	                |         Map
// Keys	               |        Strings/Symbols only	|     Any type
// Order	           |        Not guaranteed	        |      Preserved
// Default keys	       |        Yes	                    |         No
// Methods	           |        Limited	                |      Rich API
// Size	Manual         |        count	                |         .size
// Performance	       |        Slower	                |    Faster for dynamic operations
// Use Case	           |        Static data / config	|      Dynamic data / lookups