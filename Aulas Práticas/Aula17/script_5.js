
//Transformação de array - map()
let arr = [1, 2, 3, 4];
const newArr = arr.map((itemArray) => itemArray - 1);
console.log(newArr);
// => [0, 1, 2, 3]
console.log(arr)


//exemplo map com ternário
//exemplo map com ternário
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArrNumbers = arrNumbers.map((value) => value % 2 === 0 ? [value,'par'] : [value,'ímpar']);
console.log(newArrNumbers);