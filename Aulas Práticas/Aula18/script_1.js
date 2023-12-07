//Operador Rest - usado no lado esquerdo da atribuição
const [a,b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

console.log(a);
console.log(b);
console.log(everythingElse);


//Operador Rest -com objeto
const {street, ...address} = {
    street: "Rua C",
    postalCode: "74251780",
    city: "Goiânia"
  }
  
  console.log(street);
  console.log(address);

  //Operador Rest -com objeto
function concat(...strings){
    return strings.join(', ');
  }
  
  console.log(concat('one', 'two', 'three'))