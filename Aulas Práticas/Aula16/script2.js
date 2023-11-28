const obj = {nome: "Zé",
                     endereco: "Rua das Galinhas, numero:99",
                     CEP: "74000-000" ,
                     Cidade: "Goiânia",
                     UF: "GO"
                    };

console.log(obj['endereco']);
console.log(obj.CEP);
console.log(obj.UF);

const obj2 = {
  favoriteNumber: 42,
  greeting: 'Hello World',
  useGreeting: true,
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
  fruits: ['melon', 'papaya'],
  addNumbers: function (a, b) {
    return a + b;
  },
};

console.log(obj2.favoriteNumber);
console.log(obj2.addNumbers(5,10));