//JSON - Javascript Object Notation
//JSON é uma string que retrata um objeto

const myJSON = '{"name": "JOhn", "Age": 30, "City": "New York"}';

//JSON.parse( - Converter JSON  EM OBJETO 
const obj = JSON.parse((myJSON));

console.log(obj);

//convertendo objeto em JSON
const newJSON = JSON.stringify(obj);
console.log(newJSON);