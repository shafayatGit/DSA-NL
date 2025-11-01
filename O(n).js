//O(n) ----> map,fotEach,filter,reduce,find,includes,shift,unshift.
//O(1) ----> push,pop,length,array[index],object[key].




// --------> Performance.now() method is so precise that it can measure time intervals in microseconds (thousandths of a millisecond).
// const start = performance.now();

// for (let i = 0; i <= 5000; i++) {
//   console.log(i);
// }

// const end = performance.now();
// console.log(`Execution time: ${end - start} milliseconds`);

// Or  
console.time("loopTime"); // this also shows same time but not in microseconds

for (let i = 0; i <= 5000; i++) {
  console.log(i);
}

console.timeEnd("loopTime");