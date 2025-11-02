// data setup

function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Blueberry",
    "Apple",
    "Orange",
  ];

  const generatedData = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }

  return generatedData;
}

const hugeDataSet = generateSimData(800000);

console.log("Data size", hugeDataSet.length);

// Brute Force----->
// ******Ekhane ForEach er jonno O(n) then includes er jonno O(n) so total O(n^2) hobe.So time beshi lagtese*********

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Array Implementation took ${arrEndTime - arrStartTime}ms`);

// Set implementation
// ****Ekhane set er jonno O(n) ar set theke array te convert korar jonno O(1) so borota O(n) hobe. Tai time kom lagtese*****

const setStartTime = performance.now();

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();

console.log(`Set Implementation took ${setEndTime - setStartTime}ms`);