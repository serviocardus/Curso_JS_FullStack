const obj = {
    name: 'Nome',
    age: 65,
    address: "Rua Oiapoque, nº12"
  };
  
  for(let key in obj){
    console.log(key,obj[key]);
  }