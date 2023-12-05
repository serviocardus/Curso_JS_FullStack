//Transformação de array - Reduce

const numbers = [1, 2, 3, 4, 5, 30];

const sum = numbers.reduce((total,  valorCorrente) => total + valorCorrente, 0);

console.log(sum);


const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
    ];
    const reduced = items
    .map(item => item.price)
    .reduce((prev, next) => prev + next);
    // Total: 8.97
    console.log(reduced);