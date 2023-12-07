//Spread Operador cm arrays

const oneToFive = [1, 2, 3, 4, 5];

const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

console.log(oneToTen);

const woow =['A', ...oneToTen, 'B', 'C', 'D', 'E', ...oneToFive, 42];

console.log(woow);