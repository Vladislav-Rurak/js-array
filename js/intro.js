// let array = Array.from(
//   { length: 9 },
//   () => Math.floor(Math.random() * 9)
// );
// console.log(array);

// array.pop();

// array.push(6);

// array.unshift(0);

// console.log(array.length);

// for (i = 0; i < array.length; i++) {
//   if (i % 2 == 0) console.log(array[i]);
// }

// for (i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//   }
// }

// for (i = 0; i < array.length; i++) {
//   if (i === 0) console.log(array[i]);
// }
/*****************/

const MyArray = [-1, 5, 0, 9, -10];
const nonZero = MyArray.filter(
  (i) => i !== 0
);
console.log(nonZero);

const numbers = [-1, 5, 0, 9, -10];
const square = numbers.map((i) =>
  Math.pow(i, 2)
);
console.log(square);

const even = [-1, 5, 0, 9, -10];
const even1 = even.some(
  (i) => i % 2 === 0
);
console.log(even1);

const negative = [-1, 5, 0, 9, -10];
const negative1 = negative.every(
  (i) => [i] > 0
);
console.log(negative1);

const cube = [-1, 5, 0, 9, -10].forEach(
  (i) => console.log(Math.pow(i, 3))
);
